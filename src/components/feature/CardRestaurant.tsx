import data from '../../data/data.json';
import { Soup } from 'lucide-react';
import Card from '../ui/Card';

export default function CardRestaurant() {
  return (
    <Card
      data={data.resto}
      icon={<Soup />}
      getTitle={(resto) => resto.name}
      getImageUrl={(resto) => resto.imageUrl}
      onSelect={(resto) => resto}
    />
  );
}