"use client"
import Fullscreen_Preview from "./fullscreen_preview";
import ColorBlindSimulator from "./colorblind";
import { createPortal } from 'react-dom'
import { ColorTranslator } from "colortranslator";
import { useState, forwardRef } from "react";
import { roboto } from "../font"
import { FaCss } from "react-icons/fa6";
import { ArrowLeftRight, Eye, Save, FileUp, Maximize2 ,BadgeCheck, Copy,Link} from 'lucide-react';
import { RiTailwindCssFill } from "react-icons/ri";
import SaveColors from "./savecolors";

function SubMenu({ label, icon, items }: { label: string, icon: React.ReactNode, items: { label: string, onClick: () => void, icon: React.ReactNode }[]}) {
  const [open, setOpen] = useState(false)
  const [toast, setToast] = useState("")

  const handleItemClick = (e: React.MouseEvent, item: { label: string, onClick: () => void }) => {
    e.stopPropagation()
    item.onClick()
    setToast(item.label)
    setOpen(false)
    setTimeout(() => setToast(""), 1000)
    
  }

  return (
    <div
      onMouseEnter={() => window.innerWidth >= 768 && setOpen(true)}
      onMouseLeave={() => window.innerWidth >= 768 && setOpen(false)}
      className="flex flex-col w-full"
    >
      <button
        onClick={(e) => { e.stopPropagation(); setOpen(!open) }}
        className="flex gap-2 p-2 font-semibold duration-100 rounded-md cursor-pointer md:hover:bg-light-gray active:scale-95 active:bg-light-gray">
        {icon} {label}
      </button>

      <div className={`flex flex-col gap-1 overflow-hidden transition-all duration-500 ease-in-out
        ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
        {items.map((item) => (
          <button
            key={item.label}
            onClick={(e) => handleItemClick(e, item)}
            className="flex gap-2 p-2 px-8 font-semibold rounded-md cursor-pointer md:hover:bg-light-gray active:scale-95 active:bg-light-gray">
              {item.icon}
            {item.label}
          </button>
        ))}
      </div>

      {toast && createPortal(
  <span className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded-full shadow-lg z-[9999] pointer-events-none whitespace-nowrap transition-all duration-300 ease-in-out toast-enter flex gap-2">
    <BadgeCheck/>
    Copied as {toast} 
  </span>,
  document.body
)}
    </div>
  )
}

const CardTool = forwardRef<HTMLDivElement, { isOpen: boolean, color: any, color1: any, onColorChange: any, onColorChange1: any }>(
  ({ isOpen, color, color1, onColorChange, onColorChange1 }, ref) => {
    const [isFullScreen, setFullscreen] = useState(false)
    const [isColorBlind, setIsColorBlind] = useState(false)
    const [save,setSave] = useState(false)
    const SwapColor = () => {
      onColorChange(color1)
      onColorChange1(color)
    }
   const copyAsTailwind = (fg:any,back:any)=>
   {
     navigator.clipboard.writeText(`text-[${fg}] bg-[${back}]`)
   }
   const copyAsCss = (fg:any,back:any)=>
   {
     const rgba1= ColorTranslator.toRGBA(fg);
     const rgba2= ColorTranslator.toRGBA(back);
     const hsl1 = ColorTranslator.toHSL(fg)
     const hsl2= ColorTranslator.toHSL(back);
     navigator.clipboard.writeText(`  /*HEX VALUES*/ \n color : ${fg};\n background-color : ${back}  \n /*RGBA VALUES*/ \n color : ${rgba1};\n background-color : ${rgba2} \n /*HSL VALUES*/ color : ${hsl1};\n background-color : ${hsl2} `)
   }
   const copyAsUrl = ()=>
   {
     navigator.clipboard.writeText(`${window.location.origin}?fg=${encodeURIComponent(color)}&bg=${encodeURIComponent(color1)}`)
   }

    return (
      <div ref={ref} className={`${roboto.className} transition-all duration-300 ease-in-out gap-4 text-sm flex p-4 flex-col z-[100] bg-white-brand
        fixed bottom-0 left-0 right-0 rounded-t-2xl shadow-2xl top-42
        md:absolute md:top-2 md:-right-60 md:left-auto md:bottom-auto
        md:w-auto md:min-w-[200px] md:min-h-48 md:rounded-md md:shadow-lg
        ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-full md:translate-y-0 pointer-events-none'}`}>

        <button onClick={SwapColor} className="flex gap-2 p-2 font-semibold duration-150 rounded-md cursor-pointer md:hover:bg-light-gray active:scale-95 active:bg-light-gray">
          <ArrowLeftRight className="inline" /> Swap colors
        </button>
        <button onClick={() => setIsColorBlind(true)} className="flex gap-2 p-2 font-semibold duration-150 rounded-md cursor-pointer md:hover:bg-light-gray active:scale-95 active:bg-light-gray">
          <Eye className="inline" /> Color blindness Simulator
        </button>
        <button onClick={() => setSave(true)} className="flex gap-2 p-2 font-semibold duration-150 rounded-md cursor-pointer md:hover:bg-light-gray active:scale-95 active:bg-light-gray">
          <Save className="inline" /> Saved Palettes
        </button>

         <button onClick={() => setFullscreen(true)} className="flex gap-2 p-2 font-semibold transition-all duration-300 ease-in-out rounded-md cursor-pointer lg:hover:bg-light-gray active:scale-95 active:bg-light-gray">
          <Maximize2 className="inline" /> View Fullscreen
        </button>

        <SubMenu
          label="Copy as"
          icon={<Copy className="inline" />}
          items={[
            { label: "CSS", icon: <FaCss size={25}/> ,onClick: () => copyAsCss(color,color1) },
             { label: "Tailwind", icon: <RiTailwindCssFill size={25}/>, onClick: () => copyAsTailwind(color, color1) },
            { label: "URL", icon: <Link/>, onClick: () => copyAsUrl() },
          ]}
        />

        
       
        <Fullscreen_Preview isOpen={isFullScreen} color={color} color1={color1} onClose={() => setFullscreen(false)} />
        <ColorBlindSimulator isOpen={isColorBlind} onClose={() => setIsColorBlind(false)} color={color} color1={color1} />
        
        <SaveColors
  isOpen={save}
  onClose={() => setSave(false)}
  color={color}
  color1={color1}
  onColorChange = {onColorChange}
  onColorChange1 = {onColorChange1} 
/>
      </div>
    )
  }
)

CardTool.displayName = "CardTool"
export default CardTool

