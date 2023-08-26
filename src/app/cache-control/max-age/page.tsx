import HelloWorld from './doc.mdx'
import VisualizerContainer from '@/ui/VisualizerContainer'

export default function Page() {
  return (
    <div className="justify-center text-white">
    
        <HelloWorld className="text-accent"/>
        <VisualizerContainer />
    </div>
  )
}