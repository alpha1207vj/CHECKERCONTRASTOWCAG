'use client'
import { useState, useRef, useEffect } from "react";
import { roboto,semibold_roboto } from "../font"
import { Chrome } from '@uiw/react-color'
import { LuCopy } from "react-icons/lu";
import { BadgeCheck } from "lucide-react";

export default function ColorInput1({ color1, onColorChange1 }: any) {
  const [showPicker, setShowPicker] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const pickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setShowPicker(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(color1)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2500)
  }

  return (
    <>
     
      <div className="relative flex flex-col w-full rounded-md min-h-24" ref={pickerRef}>
         <span className={`${semibold_roboto.className} text-[18px]`}>Text color</span>
        <button
          style={{ backgroundColor: color1 }}
          onClick={() => setShowPicker(!showPicker)}
          className="w-full rounded-tl-md rounded-tr-md min-h-12"
        />
        <div className="flex w-full min-h-[25px] rounded-bl-md shadow-lg rounded-br-md">
          <input
            value={color1}
            onChange={(e) => {
              if (e.target.value === "") {
                onColorChange1('#000000')
                return
              }
              onColorChange1(e.target.value)
            }}
            type="text"
            placeholder="#FCFCFC"
            className={`${roboto.className} w-full h-full text-[15px] p-2 border-2 outline-none rounded-br-md rounded-bl-md caret-gray-brand border-transparent`}
          />
          <div className="flex items-center justify-center pr-2 bg-white rounded-br-md">
            <span className="flex items-center justify-center w-[35px] h-[35px] transition-colors rounded-full lg:hover:bg-[#E8E0DE]">
              <LuCopy
                className="cursor-pointer"
                onClick={handleCopy}
              />
            </span>
          </div>
        </div>

        {showPicker && (
          <div className="absolute z-50 w-full md:top-[-240px] top-[60px]">
            <Chrome
              color={color1}
              style={{ width: '100%' }}
              onChange={(c) => onColorChange1(c.hex)}
            />
          </div>
        )}
      </div>

      {/* toast */}
      <div
        className="fixed z-50 flex items-center gap-2 px-4 py-3 text-white transition-all duration-300 bg-black rounded-full shadow-lg bottom-6 left-1/2"
        style={{
          opacity: showToast ? 1 : 0,
          transform: showToast ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(20px)',
          pointerEvents: 'none'
        }}
      >
        <BadgeCheck size={18} />
        <span className={`${roboto.className} text-sm`}>
          Color copied to the clipboard!
        </span>
      </div>
    </>
  )
}