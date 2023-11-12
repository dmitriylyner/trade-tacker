import { FC } from 'react'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { User } from '../api/user'

// interface pageProps {

// }



export default async function Dashboard(){
  const session = await getServerSession(authOptions)

  return (
    <main className="m-4">
      <h1 className="text-lg text-color-700 mb-10 mt-4">Dashboard main page </h1>
      <p>Server Session:</p>
      <pre>{JSON.stringify(session)}</pre>

      <h2>Client Call</h2>
      <User />
    </main>
  )
}




export const metadata: Metadata = {
    title: 'Overview | Trade Tracker - Next generation investment journal and analysis',
    description: 'Trade Tracker - next generation investment journal and analysis. Boost consistency and gain insights specific to your trading style.'
  }

// export default page