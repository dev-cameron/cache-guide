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
  activeScenario: Scenario
}

interface ControlBoxProps {
  toggleActiveNode: () => void;
  updateActiveFrame: (forward: boolean) => void;
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
    <div className=" relative flex items-center h-28 w-full bg-neutral-bg rounded-lg">
      <div>
        <h2 className="absolute top-2 left-2 text-white">X: {x ?? "No result"}</h2>
        <h2 className="absolute top-2 left-20 text-white">active: {activeNode ?? "No result"}</h2>
        <h2 className="absolute top-2 left-60 text-white">frame: {activeFrame ?? "No result"}</h2>
      </div>
      {/* "relative flex items-center w-full h-20 text-neutral-contrast" */}
      <div className="relative flex items-center w-full h-20 text-neutral-contrast">
        <div ref={clientRef} className={clsx("flex justify-center basis-1/5", {
          "text-neutral-contrast": activeNode === "clientRef", 'text-neutral': activeNode !== 'clientRef'
        })}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
          </svg>
        </div>
        <div ref={cacheRef} className={clsx("flex justify-center basis-1/5", {
          "text-neutral-contrast": activeNode === "cacheRef", 'text-neutral': activeNode !== 'cacheRef'
        })}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
          </svg>
        </div>
        <div className="flex justify-center basis-2/5"></div>
        <div ref={serverRef} className={clsx("flex justify-center basis-1/5", {
          "text-neutral-contrast": activeNode === "serverRef", 'text-neutral': activeNode !== 'serverRef'
        })}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
          </svg>
        </div>
        <div className="absolute z-10 bottom-10 text-accent-2 bg-neutral-accent transition-all duration-300 rounded-md p-1" style={{ left: activeNode==="serverRef" ? `${x-40}px` : `${x+2}px` }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
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
    <div className="flex h-60 w-full bg-neutral-bg rounded-lg py-2 px-2">
      <div className="flex flex-col bg-neutral-accent w-1/2 rounded-lg">
        <div className="text-neutral-contrast font-bold">
          { activeScenario.frames[activeFrame].type }
        </div>
        <div className="text-neutral-contrast mt-4">
        { 
          Object.entries(activeScenario.frames[activeFrame].httpObj.headers).map(([key, value]) => (
            <p key={key}>{`${key}: ${value}`}</p>
          ))
        }
        </div>

      </div>
      <div className="flex bg-neutral-bg px-1"></div>
      <div className="flex  flex-col bg-neutral-accent w-1/2 rounded-lg">
        <div className="text-neutral-contrast font-bold">
          What's happening?
        </div>
        <div className="text-neutral-contrast mt-4 overflow-y-auto">
          { activeScenario.frames[activeFrame].description }
        </div>
      </div>
    </div>
  )
}

const ControlBox: React.FC<ControlBoxProps> = ( { updateActiveFrame, toggleActiveNode } ) => {
  return (
    <div className="flex items-center justify-center w-full h-10 bg-neutral-bg rounded-lg mt-2">
      <button className="rounded-lg bg-accent hover:bg-accent-2 py-1 px-2"onClick={()=>updateActiveFrame(false)}>prev</button>
      <button className="rounded-lg bg-accent hover:bg-accent-2 py-1 px-2"onClick={()=>updateActiveFrame(true)}>next</button>
      {/* <button className="rounded-lg bg-accent hover:bg-accent-2 py-1 px-2"onClick={()=>toggleActiveNode()}>toggle</button> */}
    </div>
  )
}

export default function VisualizerContainer( { children, directive, frames }: VisualizerContainerProps) {
  const [activeNode, setActiveNode] = useState('clientRef');

  const [activeScenario, setActiveScenario] = useState(cacheScenarios['max-age']);
  const [activeFrame, setActiveFrame] = useState(0);

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
    <div className="w-auto rounded-lg overflow-hidden bg-neutral-accent p-2 drop-shadow">
      <div className="flex flex-col w-auto lg:flex-row space-y-2 lg:space-x-2 lg:space-y-0">
        
        <InfoBox activeScenario={activeScenario} activeFrame={activeFrame}/>
      </div>
      <AnimBox activeNode={activeNode} activeFrame={activeFrame} activeScenario={activeScenario}/>

      <ControlBox toggleActiveNode={toggleActiveNode} updateActiveFrame={updateActiveFrame} />

    </div>
  )
}
