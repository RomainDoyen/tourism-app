import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import CardHotel from "./components/feature/CardHotel"
import CardRestaurant from "./components/feature/CardRestaurant";
import CardHistory from "./components/feature/CardHistory";
import CardThingToDo from "./components/feature/CardThingToDo";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import { links } from "./routes/routes";

export function App() {
  return (
      <BrowserRouter>
        <Header links={links} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thingstodo" element={<CardThingToDo />} />
          <Route path="/events" element={<p>Événements</p>} />
          <Route path="/lodging" element={<CardHotel />} />
          <Route path="/history" element={<CardHistory />} />
          <Route path="/foodservice" element={<CardRestaurant />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer 
          nameSite="Tourism App" 
          copyright="Tous droits réservés" 
        />
      </BrowserRouter>
  )
}
