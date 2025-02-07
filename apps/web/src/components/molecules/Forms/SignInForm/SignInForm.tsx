'use client'

import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { Input } from '~/components/ui/Input'
import { Label } from '~/components/ui/Label'
import { Button } from '~/components/ui/Button'
import Loader from '~/components/ui/Loader'
import CloseCircle from '~/images/svgs/close-circle-icon.svg'

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
                callbackUrl,
                redirect: false
            })

            // if(res?.status === 401){
            //     setError('Invalid email or password')
            // }

            if(!res?.error){
                console.log({res})
                router.push(callbackUrl)
            } else {
                setIsLoading(false)
                setError('Invalid email or password. Please try again.')
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
                        tabIndex={1}
                    />
                </div>

          

                <div className="grid w-full  items-center gap-1.5">
                    <div className="flex leading-none justify-between">
                        <Label htmlFor='password' className="text-sm">Password</Label>
                        <p className="text-sm text-right">
                            <Link 
                                href="/reset-request" 
                                className="text-[#119B81]"
                                tabIndex={4}
                            >
                                    Forgot your password?
                            </Link>
                        </p>
                    </div>
                    <Input 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id='password' 
                        type='password'
                        tabIndex={2}
                    />
                        
                </div>

                {!!error && <p className="italic"><CloseCircle className="inline mb-[4px]"/> {error}</p>}

                <div>
                    {
                        isLoading ?
                                <Loader/>
                            :
                                <Button className="w-full mt-4" size="lg" tabIndex={3}>Login →</Button>
                    }
                </div>
        </form>

    </>
    )
}

export default SignInForm