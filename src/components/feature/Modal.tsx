import { CircleX } from 'lucide-react';
import './Modal.css';

interface ModalProps {
  hotel: {
    name: string;
    imageUrl: string;
    description: string;
    address: string;
    phone: string;
  };
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ hotel, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <CircleX />
        </button>
        <div className="modal-body">
          <div className="modal-left">
            <h2 className="modal-header">{hotel.name}</h2>
            <img src={hotel.imageUrl} alt={hotel.name} className="modal-image" />
          </div>
          <div className="modal-right">
            <div className="modal-description">{hotel.description}</div>
            <div className="modal-address">Adresse: {hotel.address}</div>
            <div className="modal-phone">Téléphone: {hotel.phone}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
