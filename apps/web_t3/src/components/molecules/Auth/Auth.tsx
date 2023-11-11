'use client'

import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { signIn, signOut } from 'next-auth/react'
import { Input } from '~/components/ui/Input'
import { Label } from '~/components/ui/Label'
import { Button } from '~/components/ui/Button'


export const LoginButton = () => {
    return <Button onClick={() => signIn()}>Sign in</Button>
}

export const LogoutButton = () => {
    return <Button onClick={() => signOut({callbackUrl: '/'})}>Sign out</Button>
}


export const SignInForm = () => {

    const router = useRouter()
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const [error, setError ] = useState('')


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await signIn('credentials', {
                email,
                password,
                callbackUrl
            })
            if(!res?.error){
                router.push(callbackUrl)
            } else {
                setError('Invalid email or password')
            }
        } catch(error){
            console.error(error)
        }
    }

    return (
        <>
            <form 
            className='space-y-8'
            onSubmit={handleSubmit}
            >

                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor='email'>Email</Label>
                    <Input 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id='email' 
                        type='email'
                    />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor='password'>Password</Label>
                    <Input 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id='password' 
                        type='password'/>
                </div>

            <Button className="w-full mt-10" size="lg">login</Button>
        </form>

        <p>{error}</p>
    </>
    )
}


export const ResetForm = () => {

    const router = useRouter()
    // const searchParams = useSearchParams();
    // const callbackUrl = searchParams.get('callbackUrl') || '/login';

    const [ email, setEmail ] = useState('')

    const [error, setError ] = useState('')


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await fetch('/api/reset', {
                method: 'POST',
                body: JSON.stringify({
                    email
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if(res.ok){
                console.log('response ok for reset pasword')
                router.push('/forgot-password/success')
            } else {
                setError('Invalid email or password')
            }
        } catch(error){
            console.error(error)
        }
    }

    return (
        <>
            <form 
            className='space-y-8'
            onSubmit={handleSubmit}
            >

                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor='email'>Email</Label>
                    <Input 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id='email' 
                        type='email'
                    />
                </div>
                

            <Button className="w-full mt-10" size="lg">Submit</Button>
        </form>

        <p>{error}</p>
    </>
    )
}



export const ResetPasswordForm = ( { token } : {token: string}) => {
    const router = useRouter()
    // const searchParams = useSearchParams();
    // const callbackUrl = searchParams.get('callbackUrl') || '/login';

    const [ password, setPassword ] = useState('')
    const [ confirm, setConfirm ] = useState('')

    const [error, setError ] = useState('')


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if(!password || typeof password !== 'string' || password !== confirm){
            setError('Passwords did not match. Please try retyping them and submitting again')
            return;
        }

        try {
            const res = await fetch('/api/resetpass', {
                method: 'POST',
                body: JSON.stringify({
                    token,
                    password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }) 
            if(res.ok){
                console.log('response ok for reset pasword')
                router.push('/login')
            } else {
                setError('Invalid email or password')
            }
        } catch(error){
            console.error(error)
        }
    }

    return (
        <form 
            className='space-y-8'
            onSubmit={handleSubmit}
        >
            <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor='password'>Password</Label>
                    <Input 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id='password' 
                        type='password'/>
                </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor='confirm'>Confirm Password</Label>
                <Input 
                    required
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    id='confirm' 
                    type='password'
                />
            </div>
            {
                error ? 
                    <p>{error}</p>
                    :
                    null
            }
            <Button className="w-full mt-10" size="lg">Reset Password</Button>
        </form>
    )
}