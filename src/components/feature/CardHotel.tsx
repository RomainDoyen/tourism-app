import data from '../../data/data.json';
import Header from "../../components/ui/Header"
import Footer from "../../components/ui/Footer"
import { links } from "../../routes/routes"

export default function CardHotel() {
  return (
    <>
      <Header links={links} />
      <div>
        {
          data.hotel.map((hotel, index) => (
            <div key={index}>
              <h1>{hotel.name}</h1>
              <p>{hotel.description}</p>
              <p>{hotel.address}</p>
              <p>{hotel.phone}</p>
              <img src={hotel.imageUrl} alt="image" />
            </div>
          ))
        }
      </div>
      <Footer 
        nameSite="Tourism App" 
        copyright="Tous droits réservés" 
      />
    </>
  )
}
