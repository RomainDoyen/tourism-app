import data from '../../data/data.json';
import './CardHotel.css';
import Image from '../ui/Image';

export default function CardHotel() {
  return (
    <div className="card-container">
      {data.hotel.map((hotel, index) => (
        <div className="card" key={index}>
          <Image 
            src={hotel.imageUrl} 
            alt={hotel.name} 
          />
          <div className="card-content">
            <h1>{hotel.name}</h1>
            <p>{hotel.description}</p>
            <p>{hotel.address}</p>
            <p>{hotel.phone}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
