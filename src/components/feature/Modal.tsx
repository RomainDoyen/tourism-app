import { CircleX } from 'lucide-react';
import './Modal.css';

interface ModalProps {
  establishment: {
    name: string;
    imageUrl: string;
    description: string;
    address: string;
    phone: string;
  };
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ establishment, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <CircleX />
        </button>
        <div className="modal-body">
          <div className="modal-left">
            <h2 className="modal-header">{establishment.name}</h2>
            <img src={establishment.imageUrl} alt={establishment.name} className="modal-image" />
          </div>
          <div className="modal-right">
            <div className="modal-description">{establishment.description}</div>
            <div className="modal-address">Adresse: {establishment.address}</div>
            <div className="modal-phone">Téléphone: {establishment.phone}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
