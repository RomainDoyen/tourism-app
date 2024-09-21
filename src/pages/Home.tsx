import Image from "../components/ui/Image";
import "./Home.css";
import CardRun from "../components/feature/CardRun";
import CardRunSTRose from "../components/feature/CardRunSTRose";

export default function Home() {
  return (
    <div className="card-container">
      <div className="logo-section">
        <Image 
          src="./src/assets/proxy-image.png"
          alt="logo"
          className="card-logo"
        />
        <div className="card-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique vitae temporibus corporis optio ea blanditiis in laudantium repellat possimus explicabo quod neque facere aspernatur distinctio harum fugit nulla, cumque modi?
          <div className="map__image map-str">
            <CardRun />
          </div>
        </div>
      </div>
      <div className="image-section">
        <Image 
          src="./src/assets/1.png"
          alt="Demi-cercle"
          className="half-circle-image"
        />
      </div>
      <div className="card-maps">
        <h2>Carte intéractive</h2>
        <div className="map__image">
          <CardRunSTRose />
        </div>
        <div className="map__list">
          <ul>
            <li>Mairie de Sainte Rose</li>
            <li>Ravine Glissante</li>
            <li>Eglise Notre Dame des Laves</li>
            <li>Anse des Cascades</li>
            <li>Forêt de Bois-Blanc</li>
            <li>Pas de Bellecombe</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
