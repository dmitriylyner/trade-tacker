import { type NextPage } from "next"
import LoginSignUp from "~/components/organisms/LoginSignUp"


const Login: NextPage = () => {
    return (
        <main className="flex h-screen bg-gradient-to-br from-[#FFFFFF] to-[var(--gradient-color)]">
            <section className="min-h-[75%] m-auto mx-6 min-w-max md:mx-auto max-w-3xl w-full bg-slate-50 p-6 pt-0 rounded-lg drop-shadow-lg lg:w-1/3 lg:min-w-[550px] ">
                <LoginSignUp />
            </section>
        </main>
    )
}

export default Login