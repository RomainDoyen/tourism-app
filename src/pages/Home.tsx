import Image from "../components/ui/Image";
import "./Home.css";
import CardRun from "../components/feature/CardRun";
import CardRunSTRose from "../components/feature/CardRunSTRose";
import "../utils/maps";
import { useState } from "react";

export default function Home() {

  const [highlightedItem, setHighlightedItem] = useState<number | null>(null);
  
  const city: string[] = [
    "Mairie de Sainte Rose", 
    "Ravine Glissante", 
    "Eglise Notre Dame des Laves", 
    "Anse des Cascades", 
    "Forêt de Bois-Blanc", 
    "Pas de Bellecombe"
  ]

  const handleMapClick = (index: number) => {
    setHighlightedItem(index);
  };

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
          <CardRunSTRose onMapClick={handleMapClick} />
        </div>
        <div className="map__list">
          <ul>
            {city.map((item, index) => (
              <li key={index} className={highlightedItem === index ? 'highlighted' : ''}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
