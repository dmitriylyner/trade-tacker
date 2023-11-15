import { prisma } from '~/app/lib/prisma'
import { hash } from 'bcrypt'
import { NextResponse } from "next/server"
import { randomUUID } from 'crypto'
import sgMail from '@sendgrid/mail'

type BodyType = {
    email: string,
    password: string | Buffer
}


export async function POST(req: Request){
    try{
        const { email, password } = await req.json() as BodyType
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
              return NextResponse.json(
                { 
                    error: 'Internal Server Error',
                }, 
                { status: 500, statusText: 'Could not send email'}
            )
            })
    
        return NextResponse.json({
            user: {
                email: user.email
            }
        })
    } catch (error){
        console.log(error)
        return NextResponse.json(
            { 
                error: 'Internal Server Error',
            }, 
            { status: 500, statusText: 'Could not create account. Please try a different email.'  },
        )
    }
}

