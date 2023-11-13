
import Card from '~/components/ui/Card'
import Link from 'next/link'
import SignInForm from '~/components/molecules/Forms/SignInForm'

export default function Register(){
    return(
        <main className="flex h-screen bg-gradient-to-br from-[#FFFFFF] to-[var(--gradient-color)]">
            <Card>
                <h1 className="text-4xl mb-4 text-center font-extrabold">Sign In</h1>
                
                <SignInForm />

                <p className="text-center mt-8">
                    <Link href="/reset-request" className="underline underline-offset-4">I forgot password or can&apos;t sign in</Link>
                </p>

                <p className="text-center mt-8">
                    Need to create an account? &nbsp;
                    <Link href="/" className="underline underline-offset-4">Create Account</Link>
                </p>

                </Card>
            </main>
    )
}