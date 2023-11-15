'use client'

import { useState } from 'react'

import { signIn, signOut } from 'next-auth/react'
import { Button } from '~/components/ui/Button'
import Loader from "~/components/ui/Loader"
import GoogleIcon from '~/images/svgs/google-icon.svg'
import { buttonVariants } from "~/components/ui/Button"



export const LoginButton = () => {
    const [ isLoading, setIsLoading ] = useState<boolean>(false)

    const handleClick = () => {
        setIsLoading(true);
        signIn('credentials');
    }

    return (
        <>
            {
                isLoading ? 
                        <Loader />
                    :
                        <Button onClick={handleClick}>Sign in</Button>
            }
        </>
    )
}

export const LogoutButton = () => {
    return <Button onClick={() => signOut({callbackUrl: '/'})}>Sign out</Button>
}


export const LoginGoogleBtn = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const signInWithGoogle = async () => {
        try {
        setIsLoading(true)
        await signIn('google', {callbackUrl: 'http://localhost:3000/dashboard'}) // TODO set env variable for dev and prod for redirect path
        } catch (error) {
        //   toast({
        //     title: 'Error signing in',
        //     message: 'Please try again later.',
        //     type: 'error',
        //   })
        console.log("error signing in", error)
        }
    }

    return (
        <>
            {
                isLoading ?
                        <Loader />
                    :
                        <button className={`${buttonVariants({variant: 'depressed'})} mt-5 text-slate-600`} onClick={signInWithGoogle}>
                           <GoogleIcon className='w-5 h-5 mr-1'/> Google
                        </button>
            }
        </>
       
    )
}