import { ImageProps } from "../../types/ui_types"
import defaultImage from '../../assets/default-image.jpg';
import { useState } from 'preact/hooks';

export default function Image({ src, alt, className }: ImageProps) {
  const [imgSrc, setImgSrc] = useState(src || defaultImage);

  const handleError = () => {
    setImgSrc(defaultImage);
  };

  return (
    <img 
      src={imgSrc} 
      alt={alt} 
      className={className}
      onError={handleError}
    />
  )
}
