import { useState } from "react";
import CardRunSTRose from "../feature/CardRunSTRose";

export default function CardThingToDo() {

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
