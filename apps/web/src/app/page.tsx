import { type NextPage } from "next"
import Card from '~/components/ui/Card'
import RegisterForm from "~/components/molecules/Forms/RegisterForm"
import Link from 'next/link'

const Login: NextPage = () => {
    return (
        <main className="flex h-screen bg-gradient-to-br from-[#FFFFFF] to-[var(--gradient-color)]">
            <Card>
                <h1 className="text-4xl mb-4 text-center font-extrabold">Create your account</h1>
                <p className="text-center mb-4">It&apos;s free!</p>
                <RegisterForm />
                <p className="text-center mt-8">
                    Already have an account? &nbsp;
                    <Link href="/login" className="underline underline-offset-4">Sign in</Link>
                </p>
            </Card>
        </main>
    )
}

export default Login