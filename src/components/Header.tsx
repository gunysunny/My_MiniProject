import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDebounce } from "@/hooks/useDebounce";


interface HeaderProps {
  onSearch?: React.Dispatch<React.SetStateAction<string>>;
}


export default function Header({ onSearch }: HeaderProps) {
  const [input, setInput] = useState('')
  const debounced = useDebounce(input, 500)

  useEffect(() => {
    onSearch?.(debounced)
  }, [debounced, onSearch])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.(input)
  }


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* 로고 (홈 이동) */}
        <Link to="/" className="text-2xl font-bold text-emerald-600 ">
          RecipeFinder
        </Link>

        {/* 메뉴 */}
        <nav className="flex gap-4 text-sm text-gray-600">
          <Link to="/" className="hover:text-emerald-600">Home</Link>
          <Link to="/favorites" className="hover:text-emerald-600">Favorites</Link>
          <Link to="/about" className="hover:text-emerald-600">About</Link>
        </nav>

        {/* 검색창 */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border rounded-md px-3 py-1 text-sm focus:outline-emerald-500"
          />
          <button className="p-2 text-gray-500 hover:text-emerald-600" type="submit">
            <Search size={20} />
          </button>
        </form>
      </div>
    </header>
  )
}