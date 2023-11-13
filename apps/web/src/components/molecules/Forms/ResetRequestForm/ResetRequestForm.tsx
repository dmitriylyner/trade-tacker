'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '~/components/ui/Input'
import { Label } from '~/components/ui/Label'
import { Button } from '~/components/ui/Button'


function ResetRequestForm(){

    const router = useRouter()
    // const searchParams = useSearchParams();
    // const callbackUrl = searchParams.get('callbackUrl') || '/login';

    const [ email, setEmail ] = useState('')

    const [error, setError ] = useState('')


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await fetch('/api/reset-request', {
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
            className='space-y-8 w-3/4'
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


export default ResetRequestForm