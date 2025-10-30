import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from "@/layouts"
import { Detail, Home } from "@/pages"





export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}