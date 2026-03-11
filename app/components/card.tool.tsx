import { roboto } from "../font"
import { ArrowLeftRight,Eye ,Save,Copy,FileUp,Maximize2} from 'lucide-react';
export default function CardTool()
{
  return(
    <>
     <div className={`${roboto.className}  gap-4 text-sm  flex p-4 flex-col  absolute top-2 min-w-[200px] shadow-lg  min-h-48 rounded-md -right-60 z-[100] bg-white-brand`}>
        <span className="flex gap-2 p-2 font-semibold rounded-md cursor-pointer md:hover:bg-light-gray">
            <ArrowLeftRight className="inline"/>
            Swap colors
        </span>
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