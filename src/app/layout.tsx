import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import Slidebar from './components/Slidebar'
import Head from 'next/head';
const inter = Rubik({ subsets: ['latin'] })
import Trololo from '../app/'

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
    
    <>
    <Head>
      <link rel="icon" href="@/public/Sber_znachek_gree.svg" />
    </Head>
    <html lang="en">
      <body className={inter.className}>
        <Slidebar>{children}</Slidebar>
      </body>
    </html>
  </>
  )
}
