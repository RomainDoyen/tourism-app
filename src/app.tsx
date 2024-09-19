import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import CardHotel from "./components/feature/CardHotel"

export function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thingstodo" element={<p>Choses à faire</p>} />
          <Route path="/events" element={<p>Événements</p>} />
          <Route path="/lodging" element={<CardHotel />} />
          <Route path="/history" element={<p>Histoire de la ville</p>} />
          <Route path="/foodservice" element={<p>Restauration</p>} />
          <Route path="*" element={<p>Page introuvable</p>} />
        </Routes>
      </BrowserRouter>
  )
}
