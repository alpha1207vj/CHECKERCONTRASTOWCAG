// app/fonts.ts
import { Inter, Roboto } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })

export const semibold_roboto = Inter({ subsets: ['latin'],weight: "500" })
export const bold_inter = Inter(
    {subsets:["latin"],
     weight : "900"
    }
)
export const roboto = Roboto({ subsets: ['latin'],weight: "400"})
export const semibold_inter = Inter({ subsets: ['latin'],weight: "700" })
