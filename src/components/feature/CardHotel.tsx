import data from '../../data/data.json';
import Image from '../ui/Image';
import { Bookmark } from 'lucide-react';
import { Hotel } from 'lucide-react';
import './Card.css';

export default function CardHotel() {
  return (
    <div className="card-container">
      {data.hotel.map((hotel, index) => (
        <article class="card" key={index}>
              <section class="card__hero">
              <div class="card__hero_head">
                <span>$150/hr</span>
                <div class="card__icon">
                  <Bookmark />
                </div>
              </div>
              <Image 
                  src={hotel.imageUrl} 
                  alt={hotel.name} 
                  className="card__image"
                />
              </section>

              <footer class="card__footer">
                <div class="card__summary">
                  <div class="card__icon">
                    <Hotel />
                  </div>
                  <div class="card__m">
                    <p class="card__m_title">
                      {hotel.name}
                    </p>
                  </div>
                </div>

                <button class="card__btn">voir</button>
              </footer>
        </article>
      ))}
    </div>
  )
}
