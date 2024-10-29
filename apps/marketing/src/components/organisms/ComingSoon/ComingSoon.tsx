import IconLogo from '~/components/atoms/IconLogo'
import ButtonLink from '~/components/atoms/ButtonLink'
import { useForm, ValidationError } from "@formspree/react";
import { Button } from '~/components/ui/Button'
import { Input } from '~/components/ui/Input'
import { Label } from '~/components/ui/Label'


export default function ComingSoon(){

    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM || '');

    return(
               
                <div >

                    {state.succeeded ?
                         <section className="mx-4 my-6">
                            <h1 className="text-4xl mb-4 text-center font-bold">Thank you!</h1>
                            <p className="text-center mb-4">Trade Tracker is currently under development. <br/>We will email you for early access once we launch.</p>
                            <p className="text-center mb-12">Check back soon.</p>

                            <ButtonLink to="/" display="secondary" variant={'main'} >Exit →</ButtonLink>

                            <IconLogo className="relative mt-16 translate-x-[-25%] left-1/2"/>
                         </section>
                    :
                        <section className="mx-4 my-6 ">
                            <h1 className="text-4xl mb-2 text-center font-extrabold">Sign Up</h1>
                            <p className="text-center mb-4">It&apos;s free!</p>

                            <form onSubmit={(event) => void handleSubmit(event)} className="space-y-5 mt-4 mb-8">
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
                                <ValidationError errors={state.errors} />
                            </form>

                            <IconLogo className="relative mt-10 translate-x-[-25%] left-1/2"/>

                        </section>
                    }
                </div>
    )
}