import Link from 'next/link'
import React from 'react'
import MainNav from '@/ui/MainNav'
import { NavBar } from '@/ui/NavBar'
import { Providers } from './providers'

 
export default function NotFound() {
  return (
    <div>
      <Providers>
        <MainNav />
        <div className="flex min-h-screen flex-col items-center justify-between lg:pl-72 bg-neutral-accent transition-all duration-200">
          <div className="ml-auto mr-auto w-full max-w-6xl space-y-8 px-2 pt-20 lg:py-2 lg:px-8">
          <NavBar />
          <div className="mt-16 p-4 bg-neutral-bg rounded-xl shadow-md">
            <div className="text-neutral-contrast text-xl flex flex-col items-center">
              <div className="mb-4">...Whoops</div>
              <div>Looks like the dev got tired of writing doc</div>
              <div className="flex space-x-2">
                <div>If you want to see this page written, go ahead and leave an issue on </div>
                <Link className="text-neutral-contrast hover:text-hovercolor underline rounded-md" href="https://github.com/dev-cameron/cache-guide">the github</Link>
              </div>
              <Link className="mt-12 text-neutral-contrast hover:text-hovercolor px-4 border border-neutral rounded-md" href="/">Return Home</Link>
            </div>
          </div>
        </div>
      </div>
    </Providers>
  </div>
    

  )
}