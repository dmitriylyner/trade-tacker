import { type NextPage } from "next"
import Card from '~/components/ui/Card'
import RegisterForm from "~/components/molecules/Forms/RegisterForm"
import Link from 'next/link'
import { LoginGoogleBtn } from '~/components/molecules/Auth'
import IconLogo from '~/components/atoms/IconLogo'


const Login: NextPage = () => {
    return (
        <main className="flex min-h-screen bg-gradient-to-br from-[#FFFFFF] to-[var(--gradient-color)]">
            <IconLogo className="fixed top-2 m-4 scale-[0.8]"/>
            <Card>
                <h1 className="text-4xl mb-4 text-center font-bold">Create your account</h1>
                <p className="text-center mb-4">Get started for free</p>
                <RegisterForm />
                <div className="separator mt-6 w-3/4"><p className=" text-slate-600 inline-block bg-slate-50 z-10 relative px-4">or continue with</p></div>
                <LoginGoogleBtn />
                <p className="text-center mt-10">
                    Already have an account? &nbsp;
                    <Link href="/login" className="text-[#119B81]">Sign in</Link>
                </p>
            </Card>
        </main>
    )
}

export default Login