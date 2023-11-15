import { prisma } from '~/app/lib/prisma'
import { hash } from 'bcrypt'
import { NextResponse } from "next/server"
import { randomUUID } from 'crypto'
import sgMail from '@sendgrid/mail'


type BodyType = {
    email: string
}


export async function POST(req: Request){
    const { email }= await req.json() as BodyType 

    if(!email || typeof email !== 'string'){
       throw new Error('invalid email')
    }

    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if(!user){
        throw new Error('This email is not registered')
    }


    const token = await prisma.passwordResetToken.create({
        data: {
            userId: user.id,
            token: `${randomUUID()}${randomUUID()}`.replace(/-/g, '')
        }
    })


    sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? '')

    const msg = {
        to: `${user.email}`, // Change to your recipient
        from: 'support@tradetracker.ai', // Change to your verified sender
        subject: 'Reset Password Request',
        text: `Reset Trade Tracker password`,
        html: `<div><strong>Hello, someone (hopefully you) requested a password reset for this account.</strong><p>For security reasons, this link is only valid for a few hours. If you did not request this reset, please ignore this email.</p><a href="http://localhost:3000/password-reset/${token.token}">reset password</a></div>`, // TODO - need to change the link address to env variable DOMAIN not hard coded, as well as ${PROTOCOL} ie http for local dev, and https for prod
    }

    sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) => {
          console.error(error)
        })

    return NextResponse.json({
        user: {
            email: user.email
        }
    })
}

