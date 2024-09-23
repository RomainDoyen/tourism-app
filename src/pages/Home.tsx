import Image from "../components/ui/Image";
import Text from "../components/ui/Text";
import "./Home.css";

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
          <Text 
            text="Sainte-Rose est une commune située à l'Est de l'île de la Réunion qui est, 
            tout comme Saint-Philippe, fortement marquée par le volcan - le Piton de la Fournaise. 
            On ne pourra le louper tellement les coulées de laves qui ont dévalé les 
            pentes de l'enclos sont nombreuses. Dotée d'une nature luxuriante, 
            diversifiée et unique au monde, Sainte-Rose est une destination touristique hors du commun."
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
            text="Même si les infrastructures touristiques y sont encore peu développées, 
            la culture créole, les paysages sauvages, la nature préservée, en font un endroit à visiter absolument. 
            Pour les locaux, Sainte-Rose dépayse et offre des activités agréables telles que ses imnombrables sites 
            de pique-nique ou encore ses sentiers de randonnée (comme le sentier littoral qui emmenera les visiteurs 
            à la découverte des richesses du bord de mer du sud sauvage)."
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
          text="La cuisine de l'Est de la Réunion, souvent à base de choux de vacoa ou encore du fameux 
          pinpin est à l'honneur dans les restaurants et les différentes tables d'hôtes de la commune. 
          Sainte-Rose abrite aussi différents ouvrages et monuments ayant marqués l'histoire de l'île de 
          la Réunion, comme le pont de la rivière de l'Est ou l'église Notre Dame des Laves."
          style={{ fontSize: '15px', marginTop: '25px', lineHeight: '2' }}
        />
      </div>
    </div>
  )
}
