import data from '../../data/data.json';

export default function CardHistory() {
  return (
    <div>
      {data.history.map((history, index) => (
        <div key={index}>
          <h1>{history.title}</h1>
          <p>{history.description}</p>
          <img src={history.description_photo} alt="" />
        </div>
      ))}
    </div>
  )
}
