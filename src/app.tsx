import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import CardHotel from "./components/feature/CardHotel"
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import { links } from "./routes/routes";

export function App() {
  return (
      <BrowserRouter>
        <Header links={links} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thingstodo" element={<p>Choses à faire</p>} />
          <Route path="/events" element={<p>Événements</p>} />
          <Route path="/lodging" element={<CardHotel />} />
          <Route path="/history" element={<p>Histoire de la ville</p>} />
          <Route path="/foodservice" element={<p>Restauration</p>} />
          <Route path="*" element={<p>Page introuvable</p>} />
        </Routes>
        <Footer 
          nameSite="Tourism App" 
          copyright="Tous droits réservés" 
        />
      </BrowserRouter>
  )
}
