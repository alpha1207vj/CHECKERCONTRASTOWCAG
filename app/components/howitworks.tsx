'use client'
import { useState, useEffect } from 'react'
import { bold_inter, roboto, semibold_inter } from '../font'
import {CircleX} from "lucide-react"

export default function HowItWorks() {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  const open = () => {
    setIsOpen(true)
    setTimeout(() => setVisible(true), 10)
  }

  const close = () => {
    setVisible(false)
    setTimeout(() => setIsOpen(false), 400)
  }

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <>
   <button
  onClick={open}
  className="rounded relative inline-flex group items-center justify-center px-2 py-1 cursor-pointer border-b-4 border-l-2 active:border-[#C4664A] active:shadow-none active:scale-95 lg:active:scale-100 shadow-lg bg-gradient-to-tr from-[#C4664A] to-[#DA7756] border-[#C4664A] text-[#FCFCFC] whitespace-nowrap transition-transform"
>
  <span className="absolute w-0 h-0 bg-white rounded-full lg:transition-all lg:duration-300 lg:ease-out lg:group-hover:w-32 lg:group-hover:h-32 opacity-10"></span>
  <span className="relative text-[15px] font-medium">How it works?</span>
</button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center"
          style={{
            backgroundColor: visible ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0)',
            transition: 'background-color 0.4s ease',
          }}
          onClick={close}
        >
          <div
            className="w-full max-w-3xl p-8 overflow-y-auto bg-white rounded-t-2xl"
            style={{
              maxHeight: '90vh',
              transform: visible ? 'translateY(0)' : 'translateY(100%)',
              transition: 'transform 0.4s cubic-bezier(0.32, 0.72, 0, 1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className={`${bold_inter.className} text-2xl text-gray-900`}>
                How it works
              </h2>
              <button
                onClick={close}
                className={`${roboto.className} w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600 text-lg`}
              >
                <CircleX/>
              </button>
            </div>

            <div className="flex flex-col gap-8">

              {/* section 1 */}
              <section className="flex flex-col gap-2">
                <h3 className={`${semibold_inter.className} text-lg text-gray-800`}>
                  What is color contrast?
                </h3>
                <p className={`${roboto.className} text-sm text-gray-600 leading-relaxed`}>
                  Color contrast is the difference in luminance between two colors — typically text and its background.
                  A higher contrast ratio means text is easier to read, especially for people with visual impairments.
                  The contrast ratio ranges from <strong>1:1</strong> (identical colors) to <strong>21:1</strong> (black on white).
                </p>
              </section>

              {/* section 2 */}
              <section className="flex flex-col gap-2">
                <h3 className={`${semibold_inter.className} text-lg text-gray-800`}>
                  How to use this tool
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    { step: '01', text: 'Pick your foreground color — the color of your text or icon.' },
                    { step: '02', text: 'Pick your background color — the surface behind your text.' },
                    { step: '03', text: 'The contrast ratio is calculated instantly and displayed in real time.' },
                    { step: '04', text: 'Check the table to see which WCAG levels your combination passes or fails.' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <span className={`${bold_inter.className} text-xs text-orange-800 mt-0.5 w-6 shrink-0`}>
                        {item.step}
                      </span>
                      <p className={`${roboto.className} text-sm text-gray-600 leading-relaxed`}>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* section 3 — WCAG */}
              <section className="flex flex-col gap-3">
                <h3 className={`${semibold_inter.className} text-lg text-gray-800`}>
                  WCAG Contrast Levels
                </h3>
                <p className={`${roboto.className} text-sm text-gray-600 leading-relaxed`}>
                  WCAG (Web Content Accessibility Guidelines) defines two levels of contrast compliance:
                </p>

                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2 p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className={`${bold_inter.className} text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded`}>AA</span>
                      <span className={`${semibold_inter.className} text-sm text-gray-800`}>Minimum Standard</span>
                    </div>
                    <ul className="flex flex-col gap-1">
                      <li className={`${roboto.className} text-sm text-gray-600`}>• Normal text (below 18pt) — minimum ratio of <strong>4.5:1</strong></li>
                      <li className={`${roboto.className} text-sm text-gray-600`}>• Large text (above 18pt or bold above 14pt) — minimum ratio of <strong>3:1</strong></li>
                      <li className={`${roboto.className} text-sm text-gray-600`}>• UI components and icons — minimum ratio of <strong>3:1</strong></li>
                    </ul>
                  </div>

                  <div className="flex flex-col gap-2 p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className={`${bold_inter.className} text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded`}>AAA</span>
                      <span className={`${semibold_inter.className} text-sm text-gray-800`}>Enhanced Standard</span>
                    </div>
                    <ul className="flex flex-col gap-1">
                      <li className={`${roboto.className} text-sm text-gray-600`}>• Normal text — minimum ratio of <strong>7:1</strong></li>
                      <li className={`${roboto.className} text-sm text-gray-600`}>• Large text — minimum ratio of <strong>4.5:1</strong></li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* section 4 — ratio scale */}
              <section className="flex flex-col gap-3">
                <h3 className={`${semibold_inter.className} text-lg text-gray-800`}>
                  Contrast ratio scale
                </h3>
                <div className="flex flex-col gap-2">
                  {[
                    { range: '1 — 2.9',   label: 'Poor',                      color: '#991B1B', bg: '#FEF2F2' },
                    { range: '3 — 4.4',   label: 'Acceptable (large text only)', color: '#92400E', bg: '#FFFBEB' },
                    { range: '4.5 — 6.9', label: 'Good',                      color: '#166534', bg: '#F0FDF4' },
                    { range: '7 — 21',    label: 'Excellent',                  color: '#1E3A5F', bg: '#EFF6FF' },
                  ].map((item) => (
                    <div
                      key={item.range}
                      className="flex items-center justify-between px-4 py-2 rounded-lg"
                      style={{ backgroundColor: item.bg }}
                    >
                      <span className={`${bold_inter.className} text-sm font-mono`} style={{ color: item.color }}>
                        {item.range}
                      </span>
                      <span className={`${roboto.className} text-sm`} style={{ color: item.color }}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

            </div>
          </div>
        </div>
      )}
    </>
  )
}