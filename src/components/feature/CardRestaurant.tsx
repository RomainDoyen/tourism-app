import data from '../../data/data.json';
// import './CardRestaurant.css';

export default function CardRestaurant() {
  return (
    <div className="card-container">
      {data.resto.map((resto, index) => (
        <div className="card" key={index}>
          <img src={resto.imageUrl} alt={resto.name} />
          <div className="card-content">
            <h1>{resto.name}</h1>
            <p>{resto.description}</p>
            <p>{resto.address}</p>
            <p>{resto.phone}</p>
          </div>
        </div>
      ))}
    </div>
  )
}