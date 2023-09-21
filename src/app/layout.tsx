import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import MainNav from '@/ui/MainNav'
import { NavBar } from '@/ui/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <MainNav />
        <div className="flex min-h-screen flex-col items-center justify-between lg:pl-72 bg-neutral-accent transition-all duration-200">
          <div className="ml-auto mr-auto w-full max-w-6xl space-y-8 px-2 pt-20 lg:py-2 lg:px-8">
          <NavBar />
            <div className="mt-16 p-4 bg-neutral-bg
            rounded-xl  shadow-md">
              
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}