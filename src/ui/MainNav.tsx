'use client';
import { useState } from "react";
import { items, type Item } from "@/lib/items";
import Link from "next/link";
import clsx from "clsx";

export default function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  
  const bodyItems = items.map((section) => {
    return ( 
    <div className="text-white py-4 pl-4">
      <div className="text-lg text-slate-700">
        {section.name}
      </div>
      {
        section.items.map((item) => {
          return (
            <div className="text-slate-500 py-2 font-bold ">
              <Link className="hover:text-slate-300" href={item.slug}>{item.name}</Link>
            </div>
          )
      })
    }
    </div> 
  )});

  return (
    <div className="fixed top-0 flex flex-col w-full 
        lg:w-72 lg:bottom-0 bg-black border-none 
        lg:border-solid lg:border-r lg:border-slate-700"
      >
      <div 
      className="flex flex-row items-center justify-between 
        ml-4 mr-4 mb-8 h-16 
        text-slate-500 font-bold text-lg 
        border-b border-slate-700"
      >
        <Link className="flex items-center hover:text-slate-300" href="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
          </svg>
          <span className="pl-2">cache-guide</span>
        </Link>
        <button 
          className="flex gap-x-2 items-center hover:text-slate-300 lg:hidden"
          onClick={()=>setIsOpen(!isOpen)}
        >
          Menu
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )
        }
        </button>
      </div>

      <div className={clsx('overflow-y-auto lg:static lg:block', 
        {'fixed inset-x-0 bottom-0 top-20 mt-px bg-black':isOpen, 
        'hidden':!isOpen,
        })}>
        {bodyItems}
      </div>
      
    </div>
  )
}