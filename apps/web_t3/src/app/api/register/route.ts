import { prisma } from '~/app/lib/prisma'
import { hash } from 'bcrypt'
import { NextResponse } from "next/server"
import { randomUUID } from 'crypto'
import sgMail from '@sendgrid/mail'


export async function POST(req: Request){
    const { email, password } = await req.json()
    const hashed = await hash(password, 12)

    const user = await prisma.user.create({
        data: {
            email, 
            password: hashed
        }
    })

    const token = await prisma.activateToken.create({
        data: {
            token: `${randomUUID()}${randomUUID()}`.replace(/-/g, ''),
            userId: user.id 
        }
    })

    sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? '')

    const msg = {
        to: `${email}`, // Change to your recipient
        from: 'support@tradetracker.ai', // Change to your verified sender
        subject: 'Confirm your Trade Tracker account',
        text: `Please confirm your account\'s email address`,
        html: `<div><strong>CONFIRM NOW</strong><a href="http://localhost:3000/activate/${token.token}">activate account</a></div>`, // TODO - need to change the link address to env variable DOMAIN not hard coded
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

