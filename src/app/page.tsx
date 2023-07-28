'use client'
import Image from 'next/image'
import './globals.css'
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState('dark')
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    const html: HTMLHtmlElement | null = document.querySelector('html')
    if (html){
      html.className = theme;
    }
  }

  return (
    <div className="relative flex flex-column w-full p-8 transition-all duration-600">
      <div>
        <div className="text-2xl text-neutral"> Cache Guide Home Page</div>
        <div className="text-1xl text-neutral-contrast mb-20"> Welcome to the cache guide </div>
        <button className="absolute bottom-4 right-4 rounded-lg shadow-inner bg-accent hover:bg-accent-2 text-white px-8 py-2"
          onClick={()=>toggleTheme()}
        >
        {theme} mode
        </button>
      </div>
    </div>
  )
}
