import data from '../../data/data.json';
import Image from '../ui/Image';
import './CardHistory.css';

export default function CardHistory() {
  return (
    <div className="card-container">
      {data.history.map((history, index) => (
        <div key={index} className="history-card">
          <h1 className="history-title">{history?.title}</h1>
          {history.description.split('\n').map((line, lineIndex) => (
            <p className="history-description" key={lineIndex}>{line}</p>
          ))}
          <Image 
            src={history?.description_photo} 
            alt={history?.title} 
            className="history-image" 
          />
        </div>
      ))}
    </div>
  )
}
