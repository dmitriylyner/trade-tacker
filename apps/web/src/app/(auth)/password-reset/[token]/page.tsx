import Link from 'next/link'
import Card from '~/components/ui/Card'
import ResetPasswordForm from '~/components/molecules/Forms/ResetPasswordForm'
import IconLogo from '~/components/atoms/IconLogo'

export default function PasswordReset({params}: {params: {token: string}}) {
    return (
            
        <main className="flex min-h-screen bg-gradient-to-br from-[#FFFFFF] to-[var(--gradient-color)]">
            <IconLogo className="fixed top-2 m-4 scale-[0.8]"/>
            <Card>
                <h1 className="text-4xl mb-4 text-center font-bold">Choose a new password</h1>
                <p className="text-center mb-4">You can reset your password here.</p>
                <ResetPasswordForm token={params.token} />
            </Card>
        </main>
    )
}