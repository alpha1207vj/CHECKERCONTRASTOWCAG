import { roboto } from "../font"
import { ArrowLeftRight,Eye ,Save,Copy,FileUp,Maximize2} from 'lucide-react';
export default function CardTool({ isOpen,color,color1,onColorChange,onColorChange1 }: { isOpen: boolean,color:any,color1:any,onColorChange:any,onColorChange1:any})
{
  const SwapColor = () =>
  {
    onColorChange(color1)
    onColorChange1(color)
  }
  return(
    <>
     <div className={`${roboto.className} transition-all duration-300  ease-in-out  gap-4 text-sm  flex p-4 flex-col  absolute top-2 min-w-[200px] shadow-lg  min-h-48 rounded-md -right-60 z-[100] bg-white-brand
     ${isOpen 
        ? 'opacity-100 translate-y-0 pointer-events-auto' 
        : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}>
        <button onClick={()=>{SwapColor()}} className="flex gap-2 p-2 font-semibold duration-150 rounded-md cursor-pointer md:hover:bg-light-gray tranform-all active:scale-95">
            <ArrowLeftRight className="inline"/>
            Swap colors
        </button>
         <span className="flex gap-2 p-2 font-semibold rounded-md cursor-pointer md:hover:bg-light-gray">
            <Eye className="inline"/>
            Color blindness Simulator
        </span>
        <span className="flex gap-2 p-2 font-semibold rounded-md cursor-pointer md:hover:bg-light-gray">
            <Save className="inline"/>
            Save Palette
        </span>
        <span className="flex gap-2 p-2 font-semibold rounded-md cursor-pointer md:hover:bg-light-gray">
            <Copy className="inline"/>
            Copy as
        </span>
        <span className="flex gap-2 p-2 font-semibold rounded-md cursor-pointer md:hover:bg-light-gray">
            <FileUp className="inline"/>
            Export SVG
        </span>
        <span className="flex gap-2 p-2 font-semibold rounded-md cursor-pointer md:hover:bg-light-gray">
            <Maximize2 className="inline"/>
            View Fullscreen
        </span>
     </div>
    </>
  )
}