import { bold_inter, roboto } from "../font"

export default function ContrastResult({ ratio }: any) {
  const isValid = ratio > 0

  if (!isValid) {
    return (
      <>
        <p className={`${bold_inter.className} text-[40px] text-gray-400`}>--</p>
        <small className={`${roboto.className} text-gray-400`}>Contrast ratio</small>
      </>
    )
  }

  const ratioColor = ratio >= 4.5 ? "#166534" : ratio >= 3 ? "#f97316" : "#991B1B"
  const ratioComment = ratio >= 7 ? "Excellent contrast" : ratio >= 4.5 ? "Good contrast" : ratio >= 3 ? "Acceptable for large text only" : "Poor contrast — fails WCAG"

  return (
    <>
      <p className={`${bold_inter.className} text-[40px]`} style={{ color: ratioColor }}>
        {ratio}:1
      </p>
      <small className={`${roboto.className}`} style={{ color: ratioColor }}>
        {ratioComment}
      </small>
    </>
  )
}