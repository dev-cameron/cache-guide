'use client'
import { usePathname } from 'next/navigation';

export const NavBar = () => {
  const pathname = usePathname();
  return (
    <div className="mt-12 p-2 bg-neutral-bg rounded-xl text-neutral-contrast shadow-md border border-none rounded-lg">
      {"cache-guide"+pathname}
    </div>
  )
}