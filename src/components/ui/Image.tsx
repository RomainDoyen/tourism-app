import { ImageProps } from "../../types/ui_types"

export default function Image({ src, alt, className }: ImageProps) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
    />
  )
}
