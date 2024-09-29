import data from '../../data/data.json';
import { Hotel } from 'lucide-react';
import Card from '../ui/Card';

export default function CardHotel() {
  return (
    <Card
      data={data.hotel}
      icon={<Hotel />}
      getTitle={(hotel) => hotel.name}
      getImageUrl={(hotel) => hotel.imageUrl}
      onSelect={(hotel) => hotel}
    />
  );
}