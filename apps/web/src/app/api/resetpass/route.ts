import { prisma } from '~/app/lib/prisma'
import { hash } from 'bcrypt'
import { NextResponse } from "next/server"
// import { randomUUID } from 'crypto'
import { redirect } from "next/navigation";


type BodyType = {
    password: string | Buffer
    token: string,
}


export async function POST(req: Request){
    const { password, token } = await req.json() as BodyType

    // if(!email || typeof email !== 'string'){
    //    throw new Error('invalid email')
    // }

    const passwordResetToken = await prisma.passwordResetToken.findFirst({
        where: {    
            token: token,
            createdAt: { gt: new Date(Date.now() - 1000 * 60 * 60 * 4) },
            resetAt: null
        }
    })

    if(!passwordResetToken){
       throw new Error('Invalid token reset request. Please try resetting your password again')
    }

    const encrypted = await hash(password, 12)
    const updateUser = prisma.user.update({
        where: { id: passwordResetToken.userId },
        data: {
            password: encrypted
        }
    })


    const updateToken = prisma.passwordResetToken.update({
        where: {
            id: passwordResetToken.id,
        },
        data: {
            resetAt: new Date()
        }
    })

    try {
        await prisma.$transaction([updateUser, updateToken])
    } catch(err){
        console.error(err)
        throw new Error('An unexpected error occured. Please try again')
    }


    // TODO: send email saying password was successfully changed

    redirect('/login')

    // return NextResponse.json({
    //     success: {d
    //         email: user.email
    //     }
    // })
}

