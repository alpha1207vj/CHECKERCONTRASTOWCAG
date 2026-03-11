
"use client"
import { Settings } from "lucide-react"
import { useState ,useRef, useEffect} from "react"
import CardTool from "./card.tool"


Settings
export default function ToolButton()
{
const [showTool,setShowTool] = useState(false)
    const inputRef = useRef<HTMLButtonElement>(null)
    useEffect(()=>{
       const  handleClickOutside = (event:MouseEvent)=>
       {
        if(inputRef.current && !inputRef.current?.contains(event.target as Node))
        {
            setShowTool(false)
        }
        console.log("Mouse down");
       }//Create the function to run on every click

       document.addEventListener("mousedown",handleClickOutside)//Attach an event listener to each time the screen is taped on
       
       return()=>
       {
        document.removeEventListener("mousedown",handleClickOutside);//Remove the eventlistener for freeing up memory and avoiding memory leaks 
       }
    })

    return(
        <>
           <button ref={inputRef} onClick={()=>{setShowTool(!showTool)}} className='absolute flex items-center justify-center w-6 h-6 transition-all duration-75 rounded-md top-2 right-2 bg-gray-tool-brand active:scale-90 opacity-[0.8]'>
              <Settings size={20}  color='black'/>
            </button>
         {showTool && <CardTool/>}
        </>
            
    )
}