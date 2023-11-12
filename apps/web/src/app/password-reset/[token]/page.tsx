import Link from 'next/link'
import { ResetPasswordForm } from '~/components/molecules/Auth'

export default function PasswordReset({params}: {params: {token: string}}) {
    return (
            
        <main className="flex h-screen bg-gradient-to-br from-[#FFFFFF] to-[var(--gradient-color)]">
        <section className="min-h-[75%] m-auto mx-6 min-w-max md:mx-auto max-w-3xl w-full bg-slate-50 p-6 pt-0 rounded-lg drop-shadow-lg lg:w-1/3 lg:min-w-[550px] ">
                <div >
                        <section className="mx-4 my-6 ">
                            <h1 className="text-4xl mb-4 text-center font-extrabold">Choose a new password</h1>
                            <p className="text-center mb-4">You can reset your password here.</p>

                            <ResetPasswordForm token={params.token} />

                        </section>
                </div>

            </section>
            </main>
    )
}