"use client"

import { useState } from 'react'
// import ButtonLink from '~/components/atoms/ButtonLink'
import { Button } from '~/components/ui/Button'
import { Input } from '~/components/ui/Input'
import { Label } from '~/components/ui/Label'


export default function RegisterForm(){

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
                <div className="grid w-full items-center gap-1.5">
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
    )
}