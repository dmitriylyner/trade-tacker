
import Card from '~/components/ui/Card'
import Link from 'next/link'
import ResetRequestForm from '~/components/molecules/Forms/ResetRequestForm'

export default function Reset(){

    return(
               
        <main className="flex h-screen bg-gradient-to-br from-[#FFFFFF] to-[var(--gradient-color)]">
            <Card>
                <h1 className="text-4xl mb-4 text-center font-extrabold">Reset Password</h1>

                <ResetRequestForm />

                <p className="text-center mt-8">
                    <Link href="/login" className="underline underline-offset-4">Return to Login</Link>
                </p>

                <p className="text-center mt-8">
                    Need to create an account? &nbsp;
                    <Link href="/" className="underline underline-offset-4">Create Account</Link>
                </p>

            </Card>
        </main>
    )
}