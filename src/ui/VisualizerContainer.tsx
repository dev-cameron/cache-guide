interface VisualizerContainerProps {
  children?: React.ReactNode;
  directive?: String;
  frames?: Array<{}>;
}

const AnimBox = () =>{
  return (
    <div className="flex items-center h-60 w-full lg:w-1/2 bg-neutral-bg rounded-lg">
      <div className="flex items-center w-full h-20 text-neutral-contrast">
        <div className="flex justify-center basis-1/5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
          </svg>
        </div>
        <div className="flex justify-center basis-1/5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
          </svg>
        </div>
        <div className="flex justify-center basis-2/5"></div>
        <div className="flex justify-center basis-1/5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

const InfoBox = () =>{
  return (
    <div className="flex h-60 w-full lg:w-1/2 bg-neutral-bg rounded-lg"></div>
  )
}

const ControlBox = () =>{
  return (
    <div className="w-full h-10 bg-neutral-bg rounded-lg mt-2"></div>
  )
}

export default function VisualizerContainer( { children, directive, frames }: VisualizerContainerProps) {
  
  
  return (
    <div className="w-auto rounded-lg overflow-hidden bg-neutral-accent p-2 drop-shadow">
      <div className="flex flex-col w-auto lg:flex-row space-y-2 lg:space-x-2 lg:space-y-0">
        <AnimBox />
        <InfoBox />
      </div>
      <ControlBox />
    </div>
  )
}
