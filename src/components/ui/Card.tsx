import { useState } from 'react';
import Image from '../ui/Image';
import Modal from '../feature/Modal';
import Button from '../ui/Button';
import { CardProps } from '../../types/ui_types';
import './Card.css';

export default function Card({
  title,
  imageUrl,
  price,
  icon,
  establishment,
  onBookmarkClick,
  onButtonClick,
}: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
    if (onButtonClick) onButtonClick();
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <article className="card">
      <section className="card__hero">
        <div className="card__hero_head">
          <span>{price}</span>
          <div className="card__icon" onClick={onBookmarkClick}>
            {icon}
          </div>
        </div>
        <Image src={imageUrl} alt={title} className="card__image" />
      </section>

      <footer className="card__footer">
        <div className="card__summary">
          <div className="card__icon">{icon}</div>
          <div className="card__m">
            <p className="card__m_title">{title}</p>
          </div>
        </div>

        <Button className="card__btn" onClick={handleModalOpen} children={"voir"} />
      </footer>

      {isModalOpen && (
        <Modal 
          establishment={establishment} 
          onClose={handleModalClose} 
        />
      )}
    </article>
  );
}
