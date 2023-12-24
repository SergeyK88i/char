import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import Slidebar from './components/Slidebar'

const inter = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PSIKOD2',
  description: 'Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Slidebar>{children}</Slidebar>
        
        </body>
    </html>
  )
}
