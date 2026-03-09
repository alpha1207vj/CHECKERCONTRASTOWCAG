import { bold_inter, semibold_roboto } from "../font"
export default function HeroTitle()
{
    return(
         <div>
           <h1 className={`mx-4 text-center ${bold_inter.className} text-[40px] text-black-brand lg:text-[65px]`}>COLOR CONTRAST CHECKER</h1>
        <p className={`mx-4  text-sm ${semibold_roboto.className} text-center text-grey-brand lg:text-[25px]`}>Calculate the contrast ratio of text and background colors.</p>
        </div>
       
    )
}