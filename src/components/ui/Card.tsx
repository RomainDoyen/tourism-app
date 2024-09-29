import { useState } from 'preact/hooks';
import Image from '../ui/Image';
import Button from '../ui/Button';
import Modal from './Modal';
import { Bookmark } from 'lucide-react';
import { Establishment, CardProps } from '../../types/ui_types';
import './Card.css';

export default function Card<T extends Establishment>({
  data,
  icon,
  onSelect,
  getTitle,
  getImageUrl,
}: CardProps<T>) {
  const [selectedItem, setSelectedItem] = useState<null | T>(null);

  const handleModalOpen = (item: T) => {
    setSelectedItem(item);
    onSelect(item);
  };

  const handleModalClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className="card-container">
      {data.map((item, index) => (
        <article className="card" key={index}>
          <section className="card__hero">
            <div className="card__hero_head">
              <span>150€/h</span>
              <div className="card__icon">
                <Bookmark />
              </div>
            </div>
            <Image src={getImageUrl(item)} alt={getTitle(item)} className="card__image" />
          </section>

          <footer className="card__footer">
            <div className="card__summary">
              <div className="card__icon">
                {icon}
              </div>
              <div className="card__m">
                <p className="card__m_title">
                  {getTitle(item)}
                </p>
              </div>
            </div>

            <Button className="card__btn" onClick={() => handleModalOpen(item)}>
              voir
            </Button>
          </footer>
        </article>
      ))}
      {selectedItem && <Modal establishment={selectedItem} onClose={handleModalClose} />}
    </div>
  );
}
