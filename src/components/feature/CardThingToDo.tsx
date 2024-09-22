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

  const handleMapHover = (index: number) => {
    setHighlightedItem(index);
  };

  return (
    <div className="card-container">
      <div className="card-maps">
        <h2>Carte interactive</h2>
        <div className="map__image">
          <CardRunSTRose onMapHover={handleMapHover} />
        </div>
        <div className="map__accordion">
          {city.map((item, index) => (
            <div key={index} className={`accordion-item ${highlightedItem === index ? 'open' : ''}`}>
              <div className="accordion-header">
                <h3>{item}</h3>
              </div>
              {highlightedItem === index && (
                <div className="accordion-body">
                  <p>Informations supplémentaires sur {item}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
