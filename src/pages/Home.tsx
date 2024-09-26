import Image from "../components/ui/Image";
import Text from "../components/ui/Text";
import data from "../data/data.json";
import "./Home.css";

export default function Home() {

  const { para1, para2, para3 } = data.intro[0];

  return (
    <div className="card-container">
      <div className="logo-section">
        <Image 
          src="./src/assets/proxy-image.png"
          alt="logo"
          className="card-logo"
        />
        <div className="card-content">
          <Text 
            text={para1}
            style={{ fontSize: '15px', lineHeight: '2', wordSpacing: '2px' }}
          />
          <div className="map__image map-str">
            <Image 
              src="./src/assets/carte_reunion.png"
              alt="Carte de la Réunion"
              className="map-run"
            />
          </div>
          <Text 
            text={para2}
            style={{ fontSize: '15px', lineHeight: '2' }}
          />
        </div>
      </div>
      <div className="image-section">
        <Image 
          src="./src/assets/1.png"
          alt="Demi-cercle"
          className="half-circle-image"
        />
        <Text 
          text={para3}
          style={{ fontSize: '15px', marginTop: '25px', lineHeight: '2' }}
        />
      </div>
    </div>
  )
}
