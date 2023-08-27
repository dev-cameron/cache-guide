'use client'

import clsx from 'clsx';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { cacheScenarios, type Frame, type Scenario } from '@/lib/scenarios';


interface VisualizerContainerProps {
  children?: React.ReactNode;
  directive?: string;
  frames?: Array<Frame>;
}

interface AnimBoxProps {
  activeNode: string;
  activeFrame: number;
  activeScenario: Scenario
}

interface InfoBoxProps {
  activeFrame: number;
  activeScenario: Scenario;
}

interface ControlBoxProps {
  toggleActiveNode: () => void;
  updateActiveFrame: (forward: boolean) => void;
  frameCount: number;
  activeFrame: number;
}

// debounce function to prevent too many calls to getPosition
function debounce(func, wait: number) {
  let timeout: NodeJS.Timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

/*
* This component animates caching scenarios, selected from CacheScenarios (see /lib/scenarios )
*
* @param activeNode: string - the name of the node that is currently active, 
* includes clientRef, cacheRef, and serverRef
* 
*/
const AnimBox: React.FC<AnimBoxProps> = ({ activeNode, activeFrame, activeScenario }) => {
  const clientRef = useRef<HTMLDivElement>(null);
  const cacheRef = useRef<HTMLDivElement>(null);
  const serverRef = useRef<HTMLDivElement>(null);

  const [x, setX] = useState<number | undefined>();

  /*
  * getPosition finds the X offset of the current activeNode (client, cache, or server div)
  * updates X position of our HTTP obj div to align with activeNode
  */
  const getPosition = useCallback(() => {
    const calculateOffset = (ref: React.RefObject<HTMLDivElement>) => {
      return ref.current ? ref.current?.offsetLeft + ref.current?.offsetWidth / 2 : 0;
    }

    let offset: number;
    switch (activeNode) {
      
      case 'clientRef':
        offset = calculateOffset(clientRef);
        setX(offset);
        break;
      case 'cacheRef':
        offset = calculateOffset(cacheRef);
        setX(offset);
        break;
      case 'serverRef':
        offset = calculateOffset(serverRef);
        setX(offset);
        break;
      default:
        offset = calculateOffset(clientRef);
        setX(offset);
        break;
    }
  }, [activeNode]);

  // debounce getPosition to prevent too many calls, useCallback
  const debouncedGetPosition = useCallback(debounce(()=> getPosition(), 100), [getPosition]);

  useEffect(() => {
    getPosition();
  }, [activeNode]);

  // Re-calculate X and Y of the red box when the window is resized by the user
  useEffect(() => {
    window.addEventListener("resize", debouncedGetPosition);

    return () => {
      window.removeEventListener("resize", debouncedGetPosition);
    };
  }, [debouncedGetPosition]);

  return (
    <div className="border border-neutral relative flex items-center h-28 bg-neutral-accent rounded-lg my-2 mx-2 drop-shadow-xl">
      <div>
        {/* <h2 className="absolute top-2 left-2 text-white">X: {x ?? "No result"}</h2>
        <h2 className="absolute top-2 left-20 text-white">active: {activeNode ?? "No result"}</h2>
        <h2 className="absolute top-2 left-60 text-white">frame: {activeFrame ?? "No result"}</h2> */}
      </div>
      {/* "relative flex items-center w-full h-20 text-neutral-contrast" */}
      <div className="relative flex items-center w-full h-20 text-neutral-contrast">
        <div ref={clientRef} className={clsx("flex flex-col items-center justify-center basis-1/5", {
          "text-white": activeNode === "clientRef", 'text-neutral': activeNode !== 'clientRef'
        })}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
          </svg>
          <div>
            client
          </div>
        </div>
        <div ref={cacheRef} className={clsx("flex flex-col items-center justify-center basis-1/5", {
          "text-white": activeNode === "cacheRef", 'text-neutral': activeNode !== 'cacheRef'
        })}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
          </svg>
          <div>
            cache
          </div>
        </div>
        <div className="flex justify-center basis-2/5"></div>
        <div ref={serverRef} className={clsx("flex flex-col items-center justify-center basis-1/5", {
          "text-white": activeNode === "serverRef", 'text-neutral': activeNode !== 'serverRef'
        })}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
          </svg>
          <div>
            server
          </div>
        </div>
        <div className="absolute z-10 -top-3 text-neutral-accent bg-neutral transition-all duration-300 rounded-md p-1 drop-shadow-xl" style={{ left: activeNode==="serverRef" ? `${x-40}px` : `${x+2}px` }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clipRule="evenodd" />
            <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

const InfoBox: React.FC<InfoBoxProps> = ({ activeScenario, activeFrame }) =>{
  return (
    <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4 w-full rounded-lg py-2 px-2">
      <div className="border border-neutral flex flex-col bg-neutral-accent h-32 lg:h-48 lg:w-1/2 rounded-lg py-2 px-4 drop-shadow-xl">
        <div className="text-white font-bold">
          HTTP Message Type: <span className="px-2 rounded-md bg-neutral text-white shadow-inner">{ activeScenario.frames[activeFrame].type }</span>
        </div>
        <div className="h-full my-1 p-1 rounded-md bg-neutral text-white font-mono text-sm overflow-y-auto">
        { 
          Object.entries(activeScenario.frames[activeFrame].httpObj.headers).map(([key, value]) => (
            <p key={key}>{`${key}: ${value}`}</p>
          ))
        }
        </div>

      </div>
      <div className="border border-neutral flex flex-col bg-neutral-accent h-32 lg:h-48 lg:w-1/2 rounded-lg py-2 px-4 drop-shadow-xl">
        <div className="text-white font-bold mb-1">
          What&apos;s happening?
        </div>
        <div className="text-white text-sm overflow-y-auto">
          { activeScenario.frames[activeFrame].description.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment> )
          )}
        </div>
      </div>
    </div>
  )
}

const ControlBox: React.FC<ControlBoxProps> = ( { updateActiveFrame, toggleActiveNode, frameCount, activeFrame } ) => {
  const frameDots = [];
  for (let i = 0; i < frameCount; i++) {
    frameDots.push(
      <div className={clsx("bg-neutral w-2 h-2 rounded-xl",{
        "bg-white": i === activeFrame
      })}></div>
    )
  }
  
  return (
    <div className="flex items-center justify-left space-x-2 w-full h-10 rounded-lg mx-2">
      <button className="border border-neutral text-white rounded-lg bg-neutral-accent hover:contrast-150 py-1 px-2 drop-shadow-xl"onClick={()=>updateActiveFrame(false)}>prev</button>
      <button className="border border-neutral text-white rounded-lg bg-neutral-accent hover:contrast-150 py-1 px-2 drop-shadow-xl"onClick={()=>updateActiveFrame(true)}>next</button>
      <div className="flex space-x-2 pl-2">
        {frameDots}
      </div>
    </div>
  )
}

export default function VisualizerContainer( { children, directive, frames }: VisualizerContainerProps) {
  const [activeNode, setActiveNode] = useState('clientRef');

  const [activeScenario, setActiveScenario] = useState(cacheScenarios['max-age']);
  const [activeFrame, setActiveFrame] = useState(0);
  const [frameCount, setFrameCount] = useState(0);

  useEffect(() => {
    setFrameCount(activeScenario.frames.length)
  },[activeScenario])

  const updateActiveFrame = (forward: boolean) => {
    if (forward) {
      if (activeFrame < activeScenario.frames.length - 1) {
        const nextNode = activeScenario.frames[activeFrame + 1].activeNode
        setActiveNode(nextNode)
        setActiveFrame(activeFrame + 1);
      } else {
        const nextNode = activeScenario.frames[0].activeNode
        setActiveNode(nextNode)
        setActiveFrame(0);
      }
    } else {
      if (activeFrame > 0) {
        const nextNode = activeScenario.frames[activeFrame - 1].activeNode
        setActiveNode(nextNode)
        setActiveFrame(activeFrame - 1);
      }
    }
  }

  const toggleActiveNode = () => { 
    // case switch to toggle between all 3 refs
    switch (activeNode) {
      case 'clientRef':
        setActiveNode('cacheRef');
        break;
      case 'cacheRef':
        setActiveNode('serverRef');
        break;
      case 'serverRef':
        setActiveNode('clientRef');
        break;
      default:
        setActiveNode('clientRef');
        break;
    }
  }
  
  return (
    <div className="w-full rounded-lg overflow-hidden bg-neutral-accent bg-grid-pattern mt-4 p-2 shadow-inner">
      <AnimBox activeNode={activeNode} activeFrame={activeFrame} activeScenario={activeScenario}/>
      <InfoBox activeScenario={activeScenario} activeFrame={activeFrame} />
      <ControlBox toggleActiveNode={toggleActiveNode} updateActiveFrame={updateActiveFrame} activeFrame={activeFrame} frameCount={frameCount}/>
    </div>
  )
}
