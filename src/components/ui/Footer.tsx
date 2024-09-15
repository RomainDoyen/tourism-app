import { FooterProps } from '../../types/ui_types'

export default function Footer({ nameSite, copyright }: FooterProps): React.JSX.Element {

  const getCurrentYear = () => new Date().getFullYear()

  return (
    <footer className="footer">
      <p>© {getCurrentYear()} - {nameSite} - {copyright}</p>
    </footer>
  )
}