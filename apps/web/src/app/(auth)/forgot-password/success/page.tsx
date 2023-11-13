import Link from 'next/link'
import Card from '~/components/ui/Card'


export default function SuccessPage(){
    return (
        <main>
            <Card>
                <h1>Passowrd reset sent</h1>
                <p>If the email doesn&apos;t show up, check your spam folder.</p>
                <Link href="/login">Return to Login</Link>
            </Card>
        </main>
    )
}



