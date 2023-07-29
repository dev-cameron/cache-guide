interface VisualizerContainerProps {
  children?: React.ReactNode;
  directive?: String;
  frames?: Array<{}>;
}

export default function VisualizerContainer( { children, directive, frames }: VisualizerContainerProps) {
  return (
    <div className="w-auto rounded-lg overflow-hidden">
      <div className="flex flex-col w-auto lg:flex-row">
        <div className="animBox flex h-60 w-full lg:w-1/2 bg-neutral"></div>
        <div className="infoBox flex h-60 w-full lg:w-1/2 bg-neutral-accent"></div>
      </div>
      <div className="w-full h-10 bg-neutral-contrast"></div>
    </div>
  )
}
