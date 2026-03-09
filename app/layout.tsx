import { inter, roboto } from '@/app/font'
import "./global.css"
import React  from "react"
import HowItWorks from './components/howitworks'
import Link from 'next/link'
interface RootLayoutProps 
{
  children : React.ReactNode
}

export default function RootLayout({children}:RootLayoutProps)
{
  
  return(
    <html lang="en">
     <body suppressHydrationWarning >
        <nav className="flex w-full pt-2 border-b-black-100 border-b-[2px] pb-2">
           <div className=" cursor-pointer flex items-center justify-start  w-[50%] h-10 pl-4">
             <Link href="/">
                 <img src="./logo.svg" alt="CONSTRASTO_LOGO" className="w-28 h-28"   />
             </Link>
           
           </div>
           <div className=" w-[50%] h-10 flex items-center justify-end pr-4">
            <HowItWorks/>
           </div>
        </nav>
        {children}
        <footer className="flex flex-col mx-6 mt-10">
          <p className='text-center text-[12px]'> &copy;  Contrasto by <a className='font-bold transition-colors cursor-pointer hover:underline decoration-orange-brand'>CODJA GEDEON</a> a WCAG contrast checker for devs and designers who care about accessibility.</p>
        </footer>
     </body>
    </html>
  )
}
