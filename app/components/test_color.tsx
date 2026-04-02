'use client'

import { useState } from 'react'
import { 
  Contrast, 
  Eye, 
  Keyboard, 
  Volume2, 
  Brain, 
  MousePointerClick,
  Accessibility,
  ZoomIn,
  Type,
  Image,
  Music,
  Moon,
  Sun,
  MonitorPlay,
  Speech,
  Hand,
  Languages,
  Grid3x3,
  Move,
  Quote,
  Ear,
  Mic,
  Focus,
  Pointer,
  ScanText,
  AudioLines,
  Sparkles,
  Layers,
  Layout,
  AlignJustify
} from 'lucide-react'

import { semibold_inter, roboto } from "../font"

const quotes = [
  { q: "Every pixel matters because even the smallest detail can affect trust and experience.", a: "Unknown" },
  { q: "Design is not just what it looks like. Design is how it works.", a: "Steve Jobs" },
  { q: "The details are not the details. They make the design.", a: "Charles Eames" },
  { q: "Simplicity is the ultimate sophistication.", a: "Leonardo da Vinci" },
  { q: "Good design is obvious. Great design is transparent.", a: "Joe Sparano" },
  { q: "Color is a power which directly influences the soul.", a: "Wassily Kandinsky" },
  { q: "Design is intelligence made visible.", a: "Alina Wheeler" },
  { q: "The best design is the simplest one that works.", a: "Albert Einstein" },
  { q: "Accessibility is not a feature, it is a social trend.", a: "Antonio Santos" },
  { q: "Good design is good business.", a: "Thomas Watson Jr." },
  { q: "Design adds value faster than it adds costs.", a: "Joel Spolsky" },
  { q: "The role of the designer is that of a good host anticipating the needs of the guest.", a: "Charles Eames" },
  { q: "Design is where science and art break even.", a: "Robin Mathew" },
  { q: "A user interface is like a joke. If you have to explain it, it is not that good.", a: "Unknown" },
  { q: "Make it simple, but significant.", a: "Don Draper" },
  { q: "Design creates culture. Culture shapes values. Values determine the future.", a: "Robert L. Peters" },
  { q: "The best error message is the one that never shows up.", a: "Thomas Fuchs" },
  { q: "Color does not add a pleasant quality to design — it reinforces it.", a: "Pierre Bonnard" },
  { q: "Contrast is the engine of visual communication.", a: "Unknown" },
  { q: "Good typography is invisible. Bad typography is everywhere.", a: "Unknown" },
  { q: "White space is not empty space — it is breathing room.", a: "Unknown" },
  { q: "Design is thinking made visual.", a: "Saul Bass" },
  { q: "The details are what separate good design from great design.", a: "Unknown" },
]

const iconCategories = [
  {
    title: "Visual",
    icons: [
      { Icon: Eye, label: "Vision" },
      { Icon: Contrast, label: "Contrast" },
      { Icon: ZoomIn, label: "Zoom" },
      { Icon: Sun, label: "Brightness" },
      { Icon: Moon, label: "Dark Mode" },
    ]
  },
  {
    title: "Motor",
    icons: [
      { Icon: Keyboard, label: "Keyboard Nav" },
      { Icon: MousePointerClick, label: "Click Area" },
      { Icon: Hand, label: "Motor Skills" },
      { Icon: Move, label: "Navigation" },
      { Icon: Pointer, label: "Precision" },
    ]
  },
  {
    title: "Auditory",
    icons: [
      { Icon: Volume2, label: "Volume" },
      { Icon: Music, label: "Audio" },
      { Icon: Speech, label: "Speech" },
      { Icon: Ear, label: "Hearing" },
      { Icon: AudioLines, label: "Sound" },
    ]
  },
  {
    title: "Cognitive",
    icons: [
      { Icon: Brain, label: "Cognitive" },
      { Icon: Type, label: "Typography" },
      { Icon: Grid3x3, label: "Structure" },
      { Icon: Languages, label: "Language" },
      { Icon: Sparkles, label: "Focus" },
    ]
  },
  {
    title: "General",
    icons: [
      { Icon: Accessibility, label: "Accessibility" },
      { Icon: Image, label: "Alt Text" },
      { Icon: MonitorPlay, label: "Media" },
      { Icon: Layers, label: "Hierarchy" },
      { Icon: Layout, label: "Layout" },
    ]
  }
]

export default function TestColor({ color, onColorChange, color1, onColorChange1 }: any) {
  const [quote] = useState(
    () => quotes[Math.floor(Math.random() * quotes.length)]
  )
  const [activeTab, setActiveTab] = useState<'quote' | 'icons'>('quote')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleTabChange = (tab: 'quote' | 'icons') => {
    if (tab === activeTab) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveTab(tab)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 50)
    }, 150)
  }

  return (
    <div className="flex flex-col items-center justify-center w-full p-6">
      {/* Animated Tab Buttons */}
      <div className="relative flex gap-2 mb-6 border-b border-opacity-20" style={{ borderColor: color1 }}>
        <button
          onClick={() => handleTabChange('quote')}
          className={`flex items-center gap-2 px-4 py-2 text-sm transition-all duration-300 relative ${
            activeTab === 'quote' ? 'opacity-100' : 'opacity-50 hover:opacity-80'
          }`}
          style={{ color: color1 }}
        >
        
          Quote of the Day
          {activeTab === 'quote' && (
            <span 
              className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300"
              style={{ backgroundColor: color1 }}
            />
          )}
        </button>
        <button
          onClick={() => handleTabChange('icons')}
          className={`flex items-center gap-2 px-4 py-2 text-sm transition-all duration-300 relative ${
            activeTab === 'icons' ? 'opacity-100' : 'opacity-50 hover:opacity-80'
          }`}
          style={{ color: color1 }}
        >
          Accessibility Icons
          {activeTab === 'icons' && (
            <span 
              className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300"
              style={{ backgroundColor: color1 }}
            />
          )}
        </button>
      </div>

      {/* Content with Smooth Transition */}
      <div className="relative w-full overflow-hidden">
        <div
          className={`transition-all duration-500 ease-in-out transform ${
            isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          {/* Quote Tab */}
          {activeTab === 'quote' && (
            <div className="w-full duration-500 animate-in fade-in slide-in-from-bottom-4">
              <p className={`${semibold_inter.className} text-[35px] text-center`} style={{ color: color1 }}>
                Proverb of the day
              </p>
              <p className={`text-center ${roboto.className} flex justify-center gap-2 text-[18px] mt-4`} style={{ color: color1 }}>
                "{quote.q}"
              </p>
              <p className={`text-center ${roboto.className} text-[13px] mt-2 opacity-60`} style={{ color: color1 }}>
                — {quote.a}
              </p>
            </div>
          )}

          {/* Icons Showcase Tab with Custom Scrollbar */}
          {activeTab === 'icons' && (
            <div className="w-full duration-500 animate-in fade-in slide-in-from-bottom-4">
              <style>{`
                .custom-scrollbar-container {
                  scrollbar-width: thin;
                  scrollbar-color: ${color1}40 transparent;
                  max-height: 400px;
                  overflow-y: auto;
                  padding-right: 8px;
                }
                .custom-scrollbar-container::-webkit-scrollbar {
                  width: 4px;
                  height: 4px;
                }
                .custom-scrollbar-container::-webkit-scrollbar-track {
                  background: transparent;
                  border-radius: 10px;
                }
                .custom-scrollbar-container::-webkit-scrollbar-thumb {
                  background: ${color1}30;
                  border-radius: 10px;
                  transition: background 0.3s ease;
                }
                .custom-scrollbar-container::-webkit-scrollbar-thumb:hover {
                  background: ${color1}60;
                }
                .custom-scrollbar-container::-webkit-scrollbar-corner {
                  background: transparent;
                }
                
                @keyframes fadeIn {
                  from {
                    opacity: 0;
                    transform: translateY(8px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                
                .animate-in {
                  animation: fadeIn 0.4s ease-out forwards;
                }
              `}</style>
              
              <div className="custom-scrollbar-container">
                <p className={`${semibold_inter.className} text-[24px] text-center mb-2`} style={{ color: color1 }}>
                  Accessibility Icons
                </p>
                <p className={`text-center ${roboto.className} text-[12px] mb-6 opacity-70`} style={{ color: color1 }}>
                  Icons must maintain proper contrast for all users
                </p>
                
                <div className="flex flex-col gap-6">
                  {iconCategories.map((category, idx) => (
                    <div 
                      key={idx}
                      className="animate-in"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <h3 className={`${semibold_inter.className} text-[14px] mb-3 opacity-80`} style={{ color: color1 }}>
                        {category.title}
                      </h3>
                      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
                        {category.icons.map(({ Icon, label }, iconIdx) => (
                          <div 
                            key={iconIdx} 
                            className="flex flex-col items-center gap-2 p-3 transition-all rounded-lg cursor-pointer hover:bg-white hover:bg-opacity-10 group"
                            style={{ transition: 'all 0.2s ease' }}
                          >
                            <Icon 
                              size={32} 
                              strokeWidth={1.5}
                              style={{ color: color1 }}
                              className="transition-all duration-300 group-hover:scale-110"
                            />
                            <span 
                              className={`${roboto.className} text-[10px] text-center opacity-70 transition-all duration-200 group-hover:opacity-100`}
                              style={{ color: color1 }}
                            >
                              {label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-3 mt-6 text-center rounded-lg transition-all duration-300 hover:scale-[1.02]" style={{ backgroundColor: `${color1}10` }}>
                  <p className={`${roboto.className} text-[11px]`} style={{ color: color1 }}>
                    All icons respect the same color contrast ratio as text
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}