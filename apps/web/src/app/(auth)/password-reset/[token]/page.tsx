import Link from 'next/link'
import Card from '~/components/ui/Card'
import ResetPasswordForm from '~/components/molecules/Forms/ResetPasswordForm'

export default function PasswordReset({params}: {params: {token: string}}) {
    return (
            
        <main className="flex h-screen bg-gradient-to-br from-[#FFFFFF] to-[var(--gradient-color)]">
            <Card>
                <h1 className="text-4xl mb-4 text-center font-extrabold">Choose a new password</h1>
                <p className="text-center mb-4">You can reset your password here.</p>
                <ResetPasswordForm token={params.token} />
            </Card>
        </main>
    )
}