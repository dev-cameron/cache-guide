import Content from './doc.mdx'
import { MdxWrapper } from '@/ui/MdxWrapper'

export default function Page() {
  return (
    <div className="flex flex-column w-full p-8">
        <MdxWrapper>
          <Content />
        </MdxWrapper>      
    </div>
  )
}