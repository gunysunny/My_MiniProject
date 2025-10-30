interface Props {
  title: string
  category?: string
  area?: string
  thumb: string
}
export default function DetailHeader({ title, category, area, thumb }: Props) {
  return (
    <div className="animate-fadeIn">
      <img src={thumb} alt={title} className="w-full max-h-96 object-cover rounded-xl shadow" />
      <h1 className="text-3xl font-bold mt-4">{title}</h1>
      <p className="text-gray-600">{[category, area].filter(Boolean).join(' · ')}</p>
    </div>
  )
}