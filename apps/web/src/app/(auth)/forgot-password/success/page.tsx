import Link from 'next/link'
import Card from '~/components/ui/Card'
import IconLogo from '~/components/atoms/IconLogo'

export default function SuccessPage(){
    return (
        <main>
            <IconLogo className="fixed top-2 m-4 scale-[0.8]"/>
            <Card>
                <h1>Passowrd reset sent</h1>
                <p>If the email doesn&apos;t show up, check your spam folder.</p>
                <Link href="/login" className="text-[#119B81]">Return to Login</Link>
            </Card>
        </main>
    )
}



