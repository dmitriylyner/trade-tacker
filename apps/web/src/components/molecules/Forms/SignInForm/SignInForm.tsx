'use client'

import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { Input } from '~/components/ui/Input'
import { Label } from '~/components/ui/Label'
import { Button } from '~/components/ui/Button'
import Loader from '~/components/ui/Loader'

function SignInForm(){

    const router = useRouter()
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') ?? '/dashboard';

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ isLoading, setIsLoading ] = useState<boolean>(false)

    const [error, setError ] = useState('')


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        setIsLoading(true)

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
            className='space-y-5 w-3/4'
            onSubmit={handleSubmit}
            >

                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor='email'>Email</Label>
                    <Input 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id='email' 
                        type='email'
                    />
                </div>

          

                <div className="grid w-full  items-center gap-1.5">
                    <div className="flex leading-none justify-between">
                        <Label htmlFor='password' className="text-sm">Password</Label>
                        <p className="text-sm text-right">
                            <Link href="/reset-request" className="text-[#119B81]">Forgot your password?</Link>
                        </p>
                    </div>
                    <Input 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id='password' 
                        type='password'/>
                </div>

                <div>
                    {
                        isLoading ?
                                <Loader/>
                            :
                                <Button className="w-full mt-4" size="lg">login</Button>
                    }
                </div>
        </form>

        <p>{error}</p>
    </>
    )
}

export default SignInForm