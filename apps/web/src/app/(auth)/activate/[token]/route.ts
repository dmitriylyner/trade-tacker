import { NextRequest } from "next/server";
import { prisma } from '~/app/lib/prisma'
import { redirect } from "next/navigation";

export async function GET(request: NextRequest, { params }: {params: {token: string}}){
    const { token } = params

    const user = await prisma.user.findFirst({
        where: {
            activateToken: {
                some: {
                    AND: [
                        {
                            activatedAt: null,
                        },
                        {
                            createdAt: {
                                gt: new Date(Date.now() - 24 * 60 * 60 * 1000), // 24 hours ago
                            }
                        },
                        {
                            token,
                        }
                    ]
                }
            }
        }
    })

    if(!user){
        throw new Error('invalid token') // TODO: redirect user to error page saying that token may be expired or user not found
    }

    const updatedUser = await prisma.user.update({
        where: {
            id: user.id,
        },
        data: {
            active: true,
        }
    })

    if(!updatedUser){
        console.log('no user found')
        throw new Error('invalid update of user')
    }

    await prisma.activateToken.update({ // change to updateMany?
        where: {
            token,
        },
        data: {
            activatedAt: new Date(),
        }
    })

    redirect("/login")
}