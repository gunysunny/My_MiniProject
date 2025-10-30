import { Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "@/components/Header";




export default function MainLayout() {
  const [query, setQuery] = useState('')

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header onSearch={setQuery} />
      <main className="pt-20 px-4">
        {/* context로 query 전달 */}
        <Outlet context={{ query }} />
      </main>
    </div>
  )
}