import './globals.css'
import VisualizerContainer from '@/ui/VisualizerContainer'

export default function Home() {
  
  return (
    <div className="relative flex flex-column w-full p-8 transition-all duration-600">
      <div className="w-full">
        <div className="text-2xl text-neutral"> Cache Guide Home Page</div>
        <div className="text-1xl text-neutral-contrast mb-20"> Welcome to the cache guide </div>
        <VisualizerContainer />
      </div>
    </div>
  )
}
