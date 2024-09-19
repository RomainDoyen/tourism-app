import data from '../../data/data.json';

export default function CardHotel() {
  return (
    <>
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
    </>
  )
}
