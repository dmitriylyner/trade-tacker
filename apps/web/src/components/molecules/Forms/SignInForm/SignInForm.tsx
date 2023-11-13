'use client'

import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { Input } from '~/components/ui/Input'
import { Label } from '~/components/ui/Label'
import { Button } from '~/components/ui/Button'

function SignInForm(){

    const router = useRouter()
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') ?? '/dashboard';

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
            className='space-y-8 w-3/4'
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

export default SignInForm