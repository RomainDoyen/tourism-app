import data from '../../data/data.json';
import Image from '../ui/Image';
import { Bookmark, Soup } from 'lucide-react';
import Modal from './Modal';
import { useState } from 'preact/hooks';
import Button from '../ui/Button';
import './Card.css';

export default function CardRestaurant() {

  const [selectedResto, setSelectedResto] = useState<null | typeof data.resto[0]>(null);

  const handleModalOpen = (resto: typeof data.resto[0]) => {
    setSelectedResto(resto);
  };

  const handleModalClose = () => {
    setSelectedResto(null);
  };

  return (
    <div className="card-container">
      {data.resto.map((resto, index) => (
        <article class="card" key={index}>
          <section class="card__hero">
            <div class="card__hero_head">
              <span>$150/hr</span>
              <div class="card__icon">
                  <Bookmark />
              </div>
            </div>
            <Image 
              src={resto.imageUrl} 
              alt={resto.name} 
              className="card__image"
            />
          </section>

          <footer class="card__footer">
            <div class="card__summary">
              <div class="card__icon">
                <Soup />
              </div>
              <div class="card__m">
                <p class="card__m_title">
                  {resto.name}
                </p>
              </div>
            </div>

            <Button 
              className="card__btn" 
              onClick={() => handleModalOpen(resto)}
              children={"voir"}
            />
          </footer>
        </article>
      ))}
      {selectedResto && (
        <Modal establishment={selectedResto} onClose={handleModalClose} />
      )}
    </div>
  )
}