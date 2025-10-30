import { Search, Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";


import { useDebounce } from "@/hooks/useDebounce";

interface HeaderProps {
  onSearch?: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header({ onSearch }: HeaderProps) {
  const [input, setInput] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // 각각의 상태 분리
  const [showSearchDesktop, setShowSearchDesktop] = useState(false);
  const [showSearchMobile, setShowSearchMobile] = useState(false);

  const debounced = useDebounce(input, 500);

  useEffect(() => {
    onSearch?.(debounced);
  }, [debounced, onSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(input);
    setShowSearchMobile(false); // 모바일 모달 닫기
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-500">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* 로고 */}
        <Link
          to="/"
          className="text-2xl font-bold text-emerald-600 hover:text-emerald-700 transition"
        >
          RecipeFinder
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-600">
          <Link to="/" className="hover:text-emerald-600 transition">Home</Link>
          <Link to="/favorites" className="hover:text-emerald-600 transition">Favorites</Link>
          <Link to="/about" className="hover:text-emerald-600 transition">About</Link>
        </nav>

        {/* 아이콘 영역 */}
        <div className="flex items-center gap-3">
          {/* 💻 데스크탑용 검색창 */}
          <form onSubmit={handleSubmit} className="relative hidden sm:flex items-center">
            <input
              type="text"
              placeholder="Search recipes..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={`
                bg-transparent border-b-2 border-emerald-500 text-sm text-gray-800 placeholder-gray-400
                focus:outline-none absolute right-0 transition-all duration-500 ease-in-out
                ${showSearchDesktop ? "opacity-100 w-48 sm:w-64 pr-8" : "opacity-0 w-0"}
              `}
            />
            <button
              type="button"
              onClick={() => setShowSearchDesktop((v) => !v)} // ✅ 데스크탑만 반응
              className="text-gray-500 hover:text-emerald-600 transition p-2 relative z-10 cursor-pointer"
            >
              <Search size={20} />
            </button>
          </form>

          {/* 📱 모바일 검색 아이콘 */}
          <button
            onClick={() => setShowSearchMobile(true)} // ✅ 모바일만 반응
            className="sm:hidden p-2 text-gray-600 hover:text-emerald-600 cursor-pointer"
            aria-label="검색 열기"
          >
            <Search size={22} />
          </button>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-emerald-600 transition cursor-pointer"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-inner border-t animate-fadeIn">
          <nav className="flex flex-col p-4 gap-3 text-gray-700">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/favorites" onClick={() => setMenuOpen(false)}>Favorites</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          </nav>
        </div>
      )}

      {/* 모바일 검색 모달 */}
      {showSearchMobile &&
        ReactDOM.createPortal(
          <div
            className="
              fixed inset-0 
              bg-black/60 backdrop-blur-sm 
              z-[9999] 
              flex items-start justify-center 
              animate-fadeIn
            "
          >
            <div
              className="
                bg-white 
                rounded-xl 
                shadow-2xl 
                p-6 
                w-11/12 sm:w-2/3 max-w-lg 
                relative mt-10
              "
            >
              <button
                onClick={() => setShowSearchMobile(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <X size={22} />
              </button>

              <h2 className="text-lg font-semibold text-gray-700 mb-3">Search Recipes</h2>

              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type an ingredient or dish..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:border-emerald-500 focus:outline-none"
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition cursor-pointer"
                >
                  Search
                </button>
              </form>
            </div>
          </div>,
          document.body // header 바깥, body 최상단에 렌더링
        )}
    </header>
  );
}