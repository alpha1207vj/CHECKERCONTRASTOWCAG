import CheckCondition from './checkcondition';
import { BadgeCheck,CircleX ,LucideIcon} from 'lucide-react';
import { roboto,bold_inter } from "../font"
import ColorInput from "./color_pickerInput1"
import ContrastResult from "./contrast_result"
import ColorInput2 from '../color_pickerInput2';
import ColorInput1 from './color_pickerInput1';
export default function ColorPicker({color,onColorChange,color1,onColorChange1}:any)
{
  // calculate ratio here in the parent
  function getContrastRatio(c1: string, c2: string) {
    function hexToRgb(hex: string) {
      const clean = hex.replace('#', '')
      return {
        r: parseInt(clean.slice(0, 2), 16),
        g: parseInt(clean.slice(2, 4), 16),
        b: parseInt(clean.slice(4, 6), 16)
      }
    }
    function linearize(value: number) {
      const v = value / 255
      return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
    }
    function getLuminance(hex: string) {
      const { r, g, b } = hexToRgb(hex)
      return 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b)
    }
    const L1 = getLuminance(c1)
    const L2 = getLuminance(c2)
    const lighter = Math.max(L1, L2)
    const darker = Math.min(L1, L2)
    return parseFloat(((lighter + 0.05) / (darker + 0.05)).toFixed(2))
  }
  
  const isValid = (hex: string) => /^#[0-9A-Fa-f]{6}$/.test(hex)
  const ratio = isValid(color) && isValid(color1) 
    ? getContrastRatio(color, color1) 
    : 0;
  return(
    <>
    <div className="flex flex-col gap-2 p-2 pt-4 min-h-[250px] w-full md:flex-row  md:min-h-[125px]">
        <ColorInput1 color = {color} onColorChange = {onColorChange} /> 
        <ColorInput2  color1 = {color1} onColorChange1 = {onColorChange1}/>
    </div>
    <div className="w-full  min-h-[50px] flex flex-col items-center mb-6 justify-center">
      <ContrastResult color={color} color1 = {color1} onColorChange = {onColorChange} onColorChange1 = {onColorChange1} ratio = {ratio}/>
    </div>
    <div className="w-full flex-col p-4  min-h-[300px] ">
      <CheckCondition ratio ={ratio} />
    </div>
    </>
  )
}