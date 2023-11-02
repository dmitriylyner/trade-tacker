import { FC } from 'react'
import type { Metadata } from 'next'

// interface pageProps {

// }

const page: FC = ({}) => {
    return <div>index overview page</div>
}

export const metadata: Metadata = {
    title: 'Overview | Trade Tracker - Next generation investment journal and analysis',
    description: 'Trade Tracker - next generation investment journal and analysis. Boost consistency and gain insights specific to your trading style.'
  }

export default page