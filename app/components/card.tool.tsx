"use client"
import Fullscreen_Preview from "./fullscreen_preview";
import { createPortal } from "react-dom";
import { useState } from "react";
import { roboto } from "../font"
import { ArrowLeftRight,Eye ,Save,Copy,FileUp,Maximize2} from 'lucide-react';
export default function CardTool({ isOpen,color,color1,onColorChange,onColorChange1 }: { isOpen: boolean,color:any,color1:any,onColorChange:any,onColorChange1:any})
{
 const [isFullScreen, setFullscreen] = useState(false);
  const SwapColor = () =>
  {
    onColorChange(color1)
    onColorChange1(color)
  }
  const Fullscreen = ()=>
  {
    setFullscreen(true)
  }
  return (
    <>
   <div className={`${roboto.className} transition-all duration-300 ease-in-out gap-4 text-sm flex p-4 flex-col z-[100] bg-white-brand
  fixed bottom-0 left-0 right-0 rounded-t-2xl shadow-2xl top-42
  md:absolute md:top-2 md:-right-60 md:left-auto md:bottom-auto
  md:w-auto md:min-w-[200px] md:min-h-48 md:rounded-md md:shadow-lg
${isOpen 
  ? 'opacity-100 translate-y-0 pointer-events-auto' 
  : 'opacity-0 translate-y-full md:translate-y-0 pointer-events-none'
}
`}>
        <button onClick={()=>{SwapColor()}} className="flex gap-2 p-2 font-semibold duration-150 rounded-md cursor-pointer md:hover:bg-light-gray tranform-all active:scale-95 active:bg-light-gray">
            <ArrowLeftRight className="inline"/>
            Swap colors
        </button>
         <span className="flex gap-2 p-2 font-semibold rounded-md cursor-pointer lg:hover:bg-light-gray">
            <Eye className="inline"/>
            Color blindness Simulator
        </span>
        <span className="flex gap-2 p-2 font-semibold rounded-md cursor-pointer lg:hover:bg-light-gray">
            <Save className="inline"/>
            Save Palette
        </span>
        <span className="flex gap-2 p-2 font-semibold rounded-md cursor-pointer lg:hover:bg-light-gray">
            <Copy className="inline"/>
            Copy as
        </span>
        <span className="flex gap-2 p-2 font-semibold rounded-md cursor-pointer lg:hover:bg-light-gray">
            <FileUp className="inline"/>
            Export SVG
        </span>
        <span onClick={()=>{Fullscreen()}} className="flex gap-2 p-2 font-semibold transition-all duration-300 ease-in-out rounded-md cursor-pointer lg:hover:bg-light-gray active:scale-95 active:bg-light-gray">
            <Maximize2 className="inline"/>
            View Fullscreen
        </span>
      <Fullscreen_Preview 
  isOpen={isFullScreen}
  color={color}
  color1={color1}
  onClose={() => setFullscreen(false)}
/>
     </div>
    </>
  )
}