import {LucideIcon, BadgeCheck, CircleX} from "lucide-react"
import { roboto } from "../font"

export default function CheckCondition({ ratio }: any) {

  interface TableElements {
    id: number
    title: string
    stateAA: string
    stateAAA: string
    iconAA: LucideIcon
    iconAAA: LucideIcon
    colorAA: string
    colorAAA: string
  }

  const table_elements: TableElements[] = [
    {
      id: 1,
      title: "Normal text",
      stateAA:  ratio >= 4.5 ? "Pass" : "Fail",
      stateAAA: ratio >= 7   ? "Pass" : "Fail",
      iconAA:   ratio >= 4.5 ? BadgeCheck : CircleX,
      iconAAA:  ratio >= 7   ? BadgeCheck : CircleX,
      colorAA:  ratio >= 4.5 ? "#166534" : "#991B1B",
      colorAAA: ratio >= 7   ? "#166534" : "#991B1B",
    },
    {
      id: 2,
      title: "Large text",
      stateAA:  ratio >= 3   ? "Pass" : "Fail",
      stateAAA: ratio >= 4.5 ? "Pass" : "Fail",
      iconAA:   ratio >= 3   ? BadgeCheck : CircleX,
      iconAAA:  ratio >= 4.5 ? BadgeCheck : CircleX,
      colorAA:  ratio >= 3   ? "#166534" : "#991B1B",
      colorAAA: ratio >= 4.5 ? "#166534" : "#991B1B",
    },
    {
      id: 3,
      title: "UI Elements",
      stateAA:  ratio >= 3 ? "Pass" : "Fail",
      stateAAA: ratio >= 3 ? "Pass" : "Fail",
      iconAA:   ratio >= 3 ? BadgeCheck : CircleX,
      iconAAA:  ratio >= 3 ? BadgeCheck : CircleX,
      colorAA:  ratio >= 3 ? "#166534" : "#991B1B",
      colorAAA: ratio >= 3 ? "#166534" : "#991B1B",
    },
  ]

  return (
    <>
      <div className="flex items-center justify-between w-full border-b-2 border-gray-brand min-h-[60px]">
        <span className={`${roboto.className}`}>Category</span>
        <span className={`${roboto.className}`}>AA</span>
        <span className={`${roboto.className}`}>AAA</span>
      </div>

      <div className='flex-1 w-full min-h-64'>
        {table_elements.map((element) => (
          <div key={element.id} className='flex items-center justify-between min-h-16'>
            <span className={`${roboto.className} md:w-[120px] w-[70px]`}>
              {element.title}
            </span>
            <span className='flex items-center gap-1 w-[70px]  justify-end'>
              <element.iconAA size={25} color={element.colorAA} />
              <span className={`${roboto.className} hidden md:block `} style={{ color: element.colorAA }}>
                {element.stateAA}
              </span>
            </span>
            <span className='flex items-center gap-1 w-[70px]  justify-end'>
              <element.iconAAA size={25} color={element.colorAAA} />
              <span className={`${roboto.className} hidden md:block`} style={{ color: element.colorAAA }}>
                {element.stateAAA}
              </span>
            </span>
          </div>
        ))}
    <div className="flex flex-col gap-1 mt-2">
          <p className={`${roboto.className} text-center text-[15px] text-gray-500`}>
            Small text (below 18pt) requires a minimum ratio of <strong>4.5:1</strong> for good contrast.
          </p>
          <p className={`${roboto.className} text-[15px] text-center text-gray-500`}>
            Large text (above 18pt or bold above 14pt) requires a minimum ratio of <strong>3:1</strong>.
          </p>
          <p className={`${roboto.className} text-[15px] text-gray-500 text-center`}>
            UI components and icons require a minimum ratio of <strong>3:1</strong>.
          </p>
        </div>
      </div>
    </>
  )
}