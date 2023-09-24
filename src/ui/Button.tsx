interface ButtonProps {
  children?: React.ReactNode
}

export default function Button ({ children }: ButtonProps) {
  return (
    <div className="
    transition-transform duration-100
    flex items-center justify-center h-12 w-48 
    bg-gradient-to-r from-accent to-accent-light 
    hover:shadow-xl
    hover:scale-105
    cursor-pointer rounded-lg shadow-md text-white dark:text-black text-xl
    ">
      {children}
    </div>
  )
}