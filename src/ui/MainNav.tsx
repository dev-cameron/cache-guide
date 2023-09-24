'use client';
import '../app/globals.css'
import { useState } from "react";
import { items } from "@/lib/items";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from "clsx";
import { useTheme } from 'next-themes';

export default function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  // const [theme, setTheme] = useState('light')
  const { theme, setTheme } = useTheme();

  const pathname: string = usePathname();

  const closeNav = () => {
    setIsOpen(false) 
  }

  const bodyItems = items.map((section, index) => {
    return ( 
    <div className="py-4 pl-4" key={index}>
      <div className="text-lg text-neutral">
        {section.name}
      </div>
      {
        section.items.map((item, itemIndex) => {
          const isActive = pathname.includes(item.slug);
          
          return (
            <div onClick={()=>closeNav()}className="text-neutral-contrast py-2 font-bold" key={itemIndex}>
              <Link className={isActive ? "underline" : "hover:text-hovercolor"} href={`/${item.slug}`}>{item.name}</Link> 
              {/* use template literal for href w/ root prepended. just using item.slug will append slug to current route, not root */}
            </div>
          )
      })
    }
    </div> 
  )});

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }


  // border-none lg:border-solid lg:border-r lg:border-neutral
  return (
    <div className="fixed top-0 flex flex-col w-full z-10
        lg:w-72 lg:bottom-0 bg-neutral-bg 
        transition-all duration-200"
      >
      <div 
      className="flex flex-row items-center justify-between 
        ml-4 mr-4 mb-8 h-16 
        text-neutral-contrast font-bold text-lg 
        border-b border-neutral"
      >
        <Link className="flex items-center hover:text-hovercolor" href="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
          </svg>
          <span className="pl-2">cache-guide</span>
        </Link>
        <button 
          className="flex gap-x-2 items-center hover:text-hovercolor lg:hidden"
          onClick={()=>setIsOpen(!isOpen)}
        >
          Menu
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )
        }
        </button>
      </div>

      <div className={clsx('overflow-y-auto lg:static lg:block', 
        {'fixed inset-x-0 bottom-0 top-20 mt-px bg-neutral-bg':isOpen, 
        'hidden':!isOpen,
        })}>

        {bodyItems}

        <button className="absolute bottom-4 left-4 rounded-lg shadow-inner bg-neutral-accent hover:bg-neutral text-white px-3 py-1"
          onClick={()=>toggleTheme()}
        >
          { theme === 'dark' ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          )}
        </button>
      </div>


    </div>
  )
}