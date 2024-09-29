import data from '../../data/data.json';
import { Calendar } from 'lucide-react';
import Card from '../ui/Card';

export default function CardEvents() {
  return (
    <Card
      data={data.loisirs}
      icon={<Calendar />}
      getTitle={(loisirs) => loisirs.name}
      getImageUrl={(loisirs) => loisirs.imageUrl}
      onSelect={(loisirs) => loisirs}
    />
  )
}
