'use client'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { simulate } from '@bjornlu/colorblind'
import { semibold_inter, roboto } from "../font"
import { X, ChevronLeft, ChevronRight,BadgeCheck } from 'lucide-react'


const types = [
  { label: 'Normal Vision', type: null },
  { label: 'Protanopia', sublabel: 'Red blind', type: 'protanopia' },
  { label: 'Deuteranopia', sublabel: 'Green blind', type: 'deuteranopia' },
  { label: 'Tritanopia', sublabel: 'Blue blind', type: 'tritanopia' },
  { label: 'Achromatopsia', sublabel: 'Full color blind', type: 'achromatopsia' },
]

const quotes = [
  { q: "Every pixel matters because even the smallest detail can affect trust and experience.", a: "Unknown" },
  { q: "Design is not just what it looks like. Design is how it works.", a: "Steve Jobs" },
  { q: "Color is a power which directly influences the soul.", a: "Wassily Kandinsky" },
  { q: "Accessibility is not a feature, it is a social trend.", a: "Antonio Santos" },
  { q: "Contrast is the engine of visual communication.", a: "Unknown" },
]

const hexToRgb = (hex: string) => ({
  r: parseInt(hex.slice(1, 3), 16),
  g: parseInt(hex.slice(3, 5), 16),
  b: parseInt(hex.slice(5, 7), 16)
})

const rgbToHex = ({ r, g, b }: { r: number, g: number, b: number }) =>
  '#' + [r, g, b].map(v => Math.round(v).toString(16).padStart(2, '0')).join('')

const simulateColor = (hex: string, type: string | null) => {
  if (!type) return hex
  const rgb = hexToRgb(hex)
  const result = simulate(rgb, type as any)
  return rgbToHex(result)
}

export default function ColorBlindSimulator({ isOpen, onClose, color, color1 }: { isOpen: boolean, onClose: () => void, color: string, color1: string }) {
  const [current, setCurrent] = useState(0)
  const [quote] = useState(() => quotes[Math.floor(Math.random() * quotes.length)])
  const [toast ,setToast] = useState(false)
  const [hiding,setHiding] = useState(false)
  const HandleToast = ()=>
  {
    setToast(true) 
  setTimeout(() => setToast(false), 1000)
  }

  if (!isOpen) return null

  const simColor = simulateColor(color, types[current].type)
  const simColor1 = simulateColor(color1, types[current].type)
  const onClickCopy = (value: any)=>
  {
    navigator.clipboard.writeText(`${value}`)
  }
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-end md:items-center justify-center">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* modal */}
      <div className={`${roboto.className} relative z-10 w-full max-w-lg mx-4 mb-0 md:mb-0 bg-white rounded-t-2xl md:rounded-2xl shadow-2xl overflow-hidden`}>
        
        {/* header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div>
            <p className="text-sm font-semibold">{types[current].label}</p>
            {types[current].sublabel && (
              <p className="text-xs opacity-50">{types[current].sublabel}</p>
            )}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs opacity-40">{current + 1} / {types.length}</span>
            <button onClick={onClose} className="p-1 transition-all rounded-md hover:bg-gray-100 active:scale-90">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* preview */}
        <div className="flex flex-col items-center justify-center w-full p-8 min-h-[220px]" style={{ backgroundColor: simColor }}>
          <p className={`${semibold_inter.className} text-[28px] text-center`} style={{ color: simColor1 }}>
            Proverb of the day
          </p>
          <p className={`text-center ${roboto.className} text-[15px] mt-2`} style={{ color: simColor1 }}>
            "{quote.q}"
          </p>
          <p className={`text-center ${roboto.className} text-[12px] mt-2 opacity-60`} style={{ color: simColor1 }}>
            — {quote.a}
          </p>
        </div>

        {/* color swatches */}
        <div className="flex border-t border-gray-100">
          <div className="flex flex-col items-center flex-1 gap-1 py-3">
            <button onClick={()=>{onClickCopy(simColor),HandleToast()}} className="w-8 h-8 border border-gray-200 rounded-full" style={{ backgroundColor: simColor }} />
            <span className="font-mono text-xs opacity-60">{simColor}</span>
          </div>
           {toast && createPortal(
  <span className={`fixed bottom-6 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded-full shadow-lg z-[9999] pointer-events-none whitespace-nowrap transition-all duration-1000 ease-in-out toast-enter flex gap-2 ` }>
    <BadgeCheck/>
    Color copied to clipboard
  </span>,
  document.body
)}
          <div className="w-px bg-gray-100" />
          <div className="flex flex-col items-center flex-1 gap-1 py-3">
            <button onClick={()=>{onClickCopy(simColor1),HandleToast()}} className="w-8 h-8 border border-gray-200 rounded-full" style={{ backgroundColor: simColor1 }} />
            <span className="font-mono text-xs opacity-60">{simColor1}</span>
          </div>
        </div>

        {/* nav */}
        <div className="flex border-t border-gray-100">
          <button
            onClick={() => setCurrent(c => Math.max(0, c - 1))}
            disabled={current === 0}
            className="flex items-center justify-center flex-1 p-3 transition-all hover:bg-gray-50 disabled:opacity-30 active:scale-95">
            <ChevronLeft size={20} />
          </button>
          <div className="flex items-center gap-1 px-4">
            {types.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-black' : 'bg-gray-300'}`} />
            ))}
          </div>
          <button
            onClick={() => setCurrent(c => Math.min(types.length - 1, c + 1))}
            disabled={current === types.length - 1}
            className="flex items-center justify-center flex-1 p-3 transition-all hover:bg-gray-50 disabled:opacity-30 active:scale-95">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}