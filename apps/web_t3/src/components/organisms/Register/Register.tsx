"use client"

import { useState } from 'react'
import IconLogo from '~/components/atoms/IconLogo'
// import ButtonLink from '~/components/atoms/ButtonLink'
import { Button } from '~/components/ui/Button'
import Link from 'next/link'
import { Input } from '~/components/ui/Input'
import { Label } from '~/components/ui/Label'


export default function Register(){

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try{
            const res = await fetch('/api/register', {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if(res.ok){
                // redirect
                // signIn()
            }
        } catch(error){
            console.error(error)
        }
        // console.log("registered!")
    }



    return(
               
                <div >
                        <section className="mx-4 my-6 ">
                            <h1 className="text-4xl mb-4 text-center font-extrabold">Create your account</h1>
                            <p className="text-center mb-4">It&apos;s free!</p>

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

                                <Button className="w-full mt-10" size="lg">Register</Button>
                            </form>



                            {/* <SignInButton /> */}


                            <p className="text-center mt-8">
                                Already have an account? &nbsp;
                               <Link href="/login" className="underline underline-offset-4">Sign in</Link>
                            </p>

                            <IconLogo className="relative mt-8 pl-4 translate-x-[-25%] left-1/2"/>

                        </section>
                </div>
    )
}