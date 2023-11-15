import '~/styles/globals.css'
import type { Metadata } from 'next'
 
// These styles apply to every route in the application
 
export const metadata: Metadata = {
  title: 'Trade Tracker - Next generation investment journal and analysis.',
  description: 'Trade Tracker - next generation investment journal and analysis. Boost consistency and gain insights specific to your trading style.',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}