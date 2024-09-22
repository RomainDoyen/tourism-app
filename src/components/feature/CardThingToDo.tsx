import { SetStateAction, useState } from "react";
import Slider from "react-slick";
import CardRunSTRose from "../feature/CardRunSTRose";
import "./CardThingToDo.css";
import { places } from "../../data/places";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CardThingToDo() {
  
  const [highlightedItem, setHighlightedItem] = useState<number | null>(null);
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  const handleMapHover = (index: number) => {
    setHighlightedItem(index);
    if (sliderRef) {
      sliderRef.slickGoTo(index);
    }
  };

  const handleCardHover = (index: number) => {
    setHighlightedItem(index);
    if (sliderRef) {
      sliderRef.slickGoTo(index);
    }
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    afterChange: (current: SetStateAction<number | null>) => setHighlightedItem(current),
    ref: (slider: SetStateAction<Slider | null>) => setSliderRef(slider),
  };

  return (
    <div className="card-container">
      <h2>Carte interactive</h2>
      <div className="card-maps">
        <div className="map__image">
          <CardRunSTRose onMapHover={handleMapHover} highlightedItem={highlightedItem} />
        </div>
        <Slider {...settings} className="carousel">
          {places.map((place, index) => (
            <div key={index} className="card">
              <div className="card-header" onMouseEnter={() => handleCardHover(index)}>
                <h3>{place.name}</h3>
              </div>
              <div className="card-body">
                <img src={place.image} alt={place.name} className="card-image" />
                <p>{place.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}