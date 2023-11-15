import { FC } from 'react'
import type { Metadata } from 'next'

// interface pageProps {

// }

const page: FC = ({}) => {
    return (
      <main  className="m-4">
        <h1 className="text-3xl">journal page</h1>
      </main>
    )
}

export const metadata: Metadata = {
    title: 'Journal | Trade Tracker - Next generation investment journal and analysis',
    description: 'Trade Tracker - next generation investment journal and analysis. Boost consistency and gain insights specific to your trading style.'
  }

export default page