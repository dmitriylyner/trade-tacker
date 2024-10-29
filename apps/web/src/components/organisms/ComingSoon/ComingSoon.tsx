"use client"

import ButtonLink from '~/components/atoms/ButtonLink'
import { useForm, ValidationError } from "@formspree/react";
import { Button } from '~/components/ui/Button'
import { Input } from '~/components/ui/Input'
import { Label } from '~/components/ui/Label'

export default function ComingSoon(){

    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM || '');

    return(
               
                <>
                    {state.succeeded ?
                         <section className="w-3/4">
                            <h1 className="text-4xl mb-4 text-center font-bold">Thank you!</h1>
                            <p className="text-center mb-4">Trade Tracker is currently under development. <br/>We will email you for early access once we launch.</p>
                            <p className="text-center mb-12">Check back soon.</p>
                         </section>
                    :
                        <section className="w-3/4">
                            <h1 className="text-4xl mb-4 text-center font-bold">Sign Up</h1>
                            <p className="text-center mb-4">It&apos;s free!</p>
                            <form onSubmit={(event) => void handleSubmit(event)} className='space-y-5 mt-4 mb-8'>
                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        required
                                        id="name"
                                        aria-label="Enter Name"
                                        name="name"
                                    />
                                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                                </div>

                                <div className="grid w-full items-center gap-1.5 pb-4">
                                    <Label htmlFor='email'>Email</Label>
                                    <Input
                                        required
                                        id="email"
                                        aria-label="email"
                                        type="email"
                                        name="email"
                                    />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                                </div>

                                <Button type="submit" disabled={state.submitting} className='w-full' variant="default" size="lg">Submit →</Button>
                                <ValidationError errors={state.errors} />
                            </form>
                        </section>
                    }
                </>
    )
}