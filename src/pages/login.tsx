import { type NextPage } from "next"
import IconLogo from '~/components/atoms/IconLogo'
import LoginSignUp from "~/components/organisms/LoginSignUp"


const Login: NextPage = () => {
    return (
        <main className="flex h-screen bg-gradient-to-br from-[#FFFFFF] to-[var(--gradient-color)]">
            <section className={`m-auto bg-slate-50 p-6 pt-0 rounded-lg drop-shadow-lg h-3/4 w-1/3`}>
                <div className="h-28 flex justify-center">
                    <IconLogo />
                </div>
                <LoginSignUp />
            </section>
        </main>
    )
}

export default Login