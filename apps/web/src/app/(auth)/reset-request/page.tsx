
import Card from '~/components/ui/Card'
import Link from 'next/link'
import ResetRequestForm from '~/components/molecules/Forms/ResetRequestForm'
import IconLogo from '~/components/atoms/IconLogo'

export default function Reset(){

    return(
               
        <main className="flex min-h-screen bg-gradient-to-br from-[#FFFFFF] to-[var(--gradient-color)]">
            <IconLogo className="fixed top-2 m-4 scale-[0.8]"/>
            <Card>
                <h1 className="text-4xl mb-4 text-center font-bold">Reset Password</h1>

                <ResetRequestForm />

                <p className="text-center mt-8">
                    <Link href="/login" className="text-[#119B81]">Return to Login</Link>
                </p>

                <p className="text-center mt-8">
                    Need to create an account? &nbsp;
                    <Link href="/" className="text-[#119B81]">Create Account</Link>
                </p>

            </Card>
        </main>
    )
}