
import IconLogo from '~/components/atoms/IconLogo'
// import ButtonLink from '~/components/atoms/ButtonLink'
import Link from 'next/link'
import { SignInForm } from '~/components/molecules/Auth'

export default function Register(){


    return(
               
        <main className="flex h-screen bg-gradient-to-br from-[#FFFFFF] to-[var(--gradient-color)]">
        <section className="min-h-[75%] m-auto mx-6 min-w-max md:mx-auto max-w-3xl w-full bg-slate-50 p-6 pt-0 rounded-lg drop-shadow-lg lg:w-1/3 lg:min-w-[550px] ">
                <div >
                        <section className="mx-4 my-6 ">
                            <h1 className="text-4xl mb-4 text-center font-extrabold">Sign In</h1>

                            <SignInForm />

                            {/* <SignInButton /> */}

                            <p className="text-center mt-8">
                               <Link href="/reset" className="underline underline-offset-4">I forgot password or can&apos;t sign in</Link>
                            </p>


                            <p className="text-center mt-8">
                                Need to create an account? &nbsp;
                               <Link href="/" className="underline underline-offset-4">Create Account</Link>
                            </p>

                            <IconLogo className="relative mt-8 pl-4 translate-x-[-25%] left-1/2"/>

                        </section>
                </div>

            </section>
            </main>
    )
}