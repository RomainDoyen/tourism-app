import { ImageProps } from "../../types/ui_types"

export default function Image({ src, alt }: ImageProps) {
  return (
    <img 
      src={src} 
      alt={alt} 
    />
  )
}
