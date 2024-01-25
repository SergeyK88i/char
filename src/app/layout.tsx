import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import Slidebar from './components/Slidebar'
import Head from 'next/head';
const inter = Rubik({ subsets: ['latin'] })

import { Providers } from './components/Providers';

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
    
    <html lang="en">
      
      <body className={inter.className}>
      <Providers>
        <Slidebar>{children}</Slidebar>
        </Providers>
      </body>
      
    </html>
  </>
  )
}
