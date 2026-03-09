
"use client"
import dynamic from 'next/dynamic'
import { useState } from "react";
import {semibold_inter,bold_inter, roboto,semibold_roboto} from "@/app/font";
import ColorPicker from './components/color_picker'
import TestColor from "./components/test_color";
import HeroTitle from "./components/hero_titile";
import HowItWorks from "./components/howitworks";
export default function Page()
{
  const TestColor = dynamic(() => import('./components/test_color'), {
  ssr: false
})
  const [color,SetColor] = useState('#ACC8E5')
  const [color1,SetColor1] = useState('#000000')
   return (
     <main className="flex flex-col w-full min-h-screen">
      
      <section className="flex items-center justify-center w-full flex-cols h-[40vh]">
        <HeroTitle/>
      </section>
      <section className="flex flex-1 h-full ">
        <div className="flex flex-col w-full h-full gap-4 p-6 lg:flex-row md:flex-row">
          <div className="w-full  min-h-[200px] rounded-md md:min-h-[500px] flex md:items-center md:justify-center " style={{ backgroundColor: color }}>
           <TestColor color = {color} onColorChange ={SetColor} color1 = {color1} onColorChange1 = {SetColor1}/>
          </div>
          
          <div className="w-full bg-colorpicker-white-brand shadow-2xl  min-h-[600px] rounded-md flex items-center justify-center flex-col gap-2">
            <ColorPicker color = {color} onColorChange ={SetColor} color1 = {color1} onColorChange1 = {SetColor1}/>
          </div>
        </div>
      </section>
     </main>
   );
}