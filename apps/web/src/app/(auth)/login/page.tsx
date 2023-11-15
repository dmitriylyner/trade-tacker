import type { Metadata } from 'next'
import Card from '~/components/ui/Card'
import Link from 'next/link'
import SignInForm from '~/components/molecules/Forms/SignInForm'
import { LoginGoogleBtn } from '~/components/molecules/Auth'
import IconLogo from '~/components/atoms/IconLogo'


export const metadata: Metadata = {
    title: 'Trade Tracker Login - Sign in to the Trade Tracker dashboard',
    description: 'Sign in to the Trade Tracker dashboard to manage your investment journal and analysis.',
}

export default function Register(){
    return(
        <main className="flex min-h-screen bg-gradient-to-br from-[#FFFFFF] to-[var(--gradient-color)]">
            <IconLogo className="fixed top-2 m-4 scale-[0.8]"/>
            <Card>
                <h1 className="text-4xl mb-4 text-center font-bold">Sign in</h1>
                
                <SignInForm />

                <div className="separator mt-6 w-3/4"><p className=" text-slate-600 inline-block bg-slate-50 z-10 relative px-4">or continue with</p></div>
                <LoginGoogleBtn tabIndex={5}/>

                <p className="text-center mt-10 text-sm">
                    Don&apos;t have an account? &nbsp;
                    <Link href="/" className="text-[#119B81]" tabIndex={6}>Sign up</Link>
                </p>

                </Card>
            </main>
    )
}