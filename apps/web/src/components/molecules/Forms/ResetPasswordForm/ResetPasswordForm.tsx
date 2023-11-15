'use client'

import { useState } from 'react'
import {  useRouter } from 'next/navigation'
import { Input } from '~/components/ui/Input'
import { Label } from '~/components/ui/Label'
import { Button } from '~/components/ui/Button'


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
            className='space-y-5 w-3/4'
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

export default ResetPasswordForm