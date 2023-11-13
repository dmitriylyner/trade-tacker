'use client'

import { signIn, signOut } from 'next-auth/react'
import { Button } from '~/components/ui/Button'


export const LoginButton = () => {
    return <Button onClick={() => signIn()}>Sign in</Button>
}

export const LogoutButton = () => {
    return <Button onClick={() => signOut({callbackUrl: '/'})}>Sign out</Button>
}


