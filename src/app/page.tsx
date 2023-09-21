import './globals.css'
import Content from './doc.mdx';

export default function Home() {
  
  return (
    <div className="relative flex flex-column w-full p-8 transition-all duration-200">
      <div className="w-full">
        <Content />
      </div>
    </div>
  )
}