import Image from "../components/ui/Image";
import "./Home.css";
import CardRun from "../components/feature/CardRun";

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
    </div>
  )
}
