import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

export function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thingstodo" element={<p>Choses à faire</p>} />
          <Route path="/events" element={<p>Événements</p>} />
          <Route path="/lodging" element={<p>Où se loger</p>} />
          <Route path="/history" element={<p>Histoire de la ville</p>} />
          <Route path="/foodservice" element={<p>Restauration</p>} />
          <Route path="*" element={<p>Page introuvable</p>} />
        </Routes>
      </BrowserRouter>
  )
}
