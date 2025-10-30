import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from "@/layouts"
import { Detail, Home } from "@/pages"





function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Layout을 감싸는 구조 */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
