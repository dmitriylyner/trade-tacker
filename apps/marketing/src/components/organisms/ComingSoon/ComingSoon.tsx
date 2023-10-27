import IconLogo from '~/components/atoms/IconLogo'
import ButtonLink from '~/components/atoms/ButtonLink'
import { useForm, ValidationError } from "@formspree/react";


export default function ComingSoon(){

    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM || '');

    return(
               
                <div >

                    {state.succeeded ?
                         <section className="mx-4 my-6">
                            <h1 className="text-4xl mb-4 text-center font-extrabold">Thank you!</h1>
                            <p className="text-center mb-4">Trade Tracker is currently under development. We are close to launching and will email you with updates.</p>
                            <p className="text-center mb-12">Check back soon.</p>


                            <ButtonLink to="/" display="secondary" variant={'main'} >Back to home →</ButtonLink>

                            <IconLogo className="relative mt-8 pl-4 translate-x-[-25%] left-1/2"/>

                         </section>
                    :
                        <section className="mx-4 my-6 ">
                            <h1 className="text-4xl mb-4 text-center font-extrabold">Sign Up</h1>
                            <p className="text-center mb-4">It's free!</p>

                            <form onSubmit={handleSubmit}>
                                <label htmlFor="name" className="Label">Name</label>
                                <input 
                                    id="name" 
                                    name="name" 
                                    className="flex h-10 w-full border shadow-md border-[#06BD9A] border-input bg-transparent px-3 py-2 text-sm ring-offset-background ring-main-color-400 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                                <ValidationError prefix="Name" field="name" errors={state.errors} />

                                <label htmlFor="email" className="Label">Email Address</label>
                                <input 
                                    id="email" 
                                    type="email"
                                    name="email" 
                                    className="flex h-10 w-full border shadow-md border-[#06BD9A] border-input bg-transparent px-3 py-2 text-sm ring-offset-background ring-main-color-400 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                                <ValidationError prefix="Email" field="email" errors={state.errors} />

                                <button 
                                    type="submit" 
                                    disabled={state.submitting}
                                    className="mt-8 block text-center w-full shadow-md max-w-xl rounded-sm bg-main-color-400 py-4 px-12 text-slate-50 text-lg hover:bg-color-500 transition-colors "
                                >
                                    Submit
                                </button>
                                <ValidationError errors={state.errors} />
                            </form>


                            {/* <SignInButton /> */}


                            {/* <p className="text-center mt-8">
                                Already have an account? &nbsp;
                                <button onClick={() => setControlledValue("tab2")} className="underline decoration-inherit text-color-500">
                                    Sign In Here
                                </button>
                            </p> */}

                            <IconLogo className="relative mt-8 pl-4 translate-x-[-25%] left-1/2"/>

                        </section>
                    }
                </div>
    )
}