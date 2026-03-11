export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="w-10 h-10 border-4 border-gray-300 rounded-full border-t-orange-brand animate-spin" />
    </div>
  )
}