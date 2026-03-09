'use client'
import { useState } from 'react'
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

export default function TestColor({ color, onColorChange, color1, onColorChange1 }: any) {
  const [quote] = useState(
    () => quotes[Math.floor(Math.random() * quotes.length)]
  )

  return (
    <div className="flex flex-col items-center justify-center w-full p-6">
      <p className={`${semibold_inter.className} text-[35px] text-center`} style={{ color: color1 }}>
        Proverb of the day
      </p>
      <p className={`text-center ${roboto.className} text-[18px]`} style={{ color: color1 }}>
        "{quote.q}"
      </p>
      <p className={`text-center ${roboto.className} text-[13px] mt-2 opacity-60`} style={{ color: color1 }}>
        — {quote.a}
      </p>
    </div>
  )
}