import '~/styles/globals.css'
import type { Metadata } from 'next'
 
// These styles apply to every route in the application
 
export const metadata: Metadata = {
  title: 'trade Tracker App',
  description: 'Next Gen Trade Journal',
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