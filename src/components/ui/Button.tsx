import { ButtonProps } from "../../types/ui_types"

export default function Button({ className, onClick, children }: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}
