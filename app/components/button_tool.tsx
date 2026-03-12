
"use client"
import { Settings ,Settings2} from "lucide-react"
import { useState ,useRef, useEffect} from "react"
import CardTool from "./card.tool"
import { Tooltip } from "react-tooltip"
Settings
export default function ToolButton({color,color1,onColorChange,onColorChange1}:any)
{
    const isOpen= true
const [showTool,setShowTool] = useState(false)
    const inputRef = useRef<HTMLButtonElement>(null)
    useEffect(()=>{
       const  handleClickOutside = (event:MouseEvent)=>
       {
        if(inputRef.current && !inputRef.current?.contains(event.target as Node))
        {
            setShowTool(false)
        }
        
       }//Create the function to run on every click

       document.addEventListener("click",handleClickOutside)//Attach an event listener to each time the screen is taped on
       
       return()=>
       {
        document.removeEventListener("click",handleClickOutside);//Remove the eventlistener for freeing up memory and avoiding memory leaks 
       }
    })

    return(
        <>
        <button 
        data-tooltip-id="preview_tooltip"
        data-tooltip-content="Customize preview"
  ref={inputRef} 
  onClick={() => setShowTool(!showTool)} 
  className='absolute flex items-center justify-center w-6 h-6 transition-all duration-75 rounded-md top-2 right-2 bg-gray-tool-brand active:scale-90 opacity-[0.8]'
>
    
  <Settings2 size={20} color='black' opacity={0.8}/>
</button>
<Tooltip id="preview_tooltip" style={{borderRadius :"6px",fontSize : "15px",padding: "8px"}}   place="top"
  delayShow={300} />
         <CardTool color = {color} color1= {color1} onColorChange={onColorChange} onColorChange1={onColorChange1} isOpen={showTool}/>
      
                </>
            
    )
}