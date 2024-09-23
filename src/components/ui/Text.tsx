import { TextProps } from "../../types/ui_types"

export default function Text({ text, className, style }: TextProps) {
  return (
    <p className={className} style={style}>
      {text}
    </p>
  )
}
