import { FC } from 'react'
import type { Metadata } from 'next'

interface pageProps {

}

const page: FC<pageProps> = ({}) => {
    return <div><h1 className="text-3xl text-red-600">progress page</h1></div>
}

export const metadata: Metadata = {
    title: 'Progress | Trade Tracker - Next generation investment journal and analysis',
    description: 'Trade Tracker - next generation investment journal and analysis. Boost consistency and gain insights specific to your trading style.'
  }

export default page