import React from "react"

interface MdxWrapperProps {
  children: React.ReactNode
}

export const MdxWrapper: React.FC<MdxWrapperProps> = ({ children }) => {
  return (
    <div className="w-full prose prose-custom prose-quoteless dark:prose-invert">
      {children}
    </div>
  )
}