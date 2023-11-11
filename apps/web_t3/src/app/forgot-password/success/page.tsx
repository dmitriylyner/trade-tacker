import Link from 'next/link'


export default async function SuccessPage(){
    return (
        <main>
            <h1>Passowrd reset sent</h1>
            <p>If the email doesn't show up, check your spam folder.</p>
            <Link href="/login">Return to Login</Link>
        </main>
    )
}



