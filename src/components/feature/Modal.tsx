import { CircleX } from 'lucide-react';
import Image from '../ui/Image';
import Button from '../ui/Button';
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

export default function Modal ({ establishment, onClose }: ModalProps) {
  return (
    <div className="modal">
      <div className="modal-content">
        <Button 
          className="modal-close" 
          onClick={onClose}
          children={<CircleX />}
        />
        <div className="modal-body">
          <div className="modal-left">
            <h2 className="modal-header">{establishment.name}</h2>
            <Image 
              src={establishment.imageUrl} 
              alt={establishment.name} 
              className="modal-image" 
            />
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

