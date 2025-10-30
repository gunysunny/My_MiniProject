import { Link } from 'react-router-dom'

interface RecipeCardProps {
  id: string
  title: string
  thumb: string
  category?: string
}

export default function RecipeCard({ id, title, thumb, category }: RecipeCardProps) {
  return (
    <Link
      to={`/recipe/${id}`}
      className="block bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden"
    >
      <img
        src={thumb}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="p-3">
        <h3 className="font-semibold truncate">{title}</h3>
        {category && <p className="text-sm text-gray-500">{category}</p>}
      </div>
    </Link>
  )
}
