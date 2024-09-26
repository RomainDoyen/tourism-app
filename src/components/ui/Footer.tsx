import { FooterProps } from '../../types/ui_types'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import './Footer.css'

export default function Footer({ nameSite, copyright }: FooterProps): React.JSX.Element {

  const getCurrentYear = () => new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__wave">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
        >
          <path 
            fill="#1d1d1d" 
            fill-opacity="1" 
            d="M0,0L80,26.7C160,53,320,107,480,106.7C640,107,800,53,960,53.3C1120,53,1280,107,1360,133.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          >
          </path>
        </svg>
      </div>
      <div className="footer__content">
        <div className="footer__info">
          <p>© {getCurrentYear()} - {nameSite}</p>
          <p>{copyright}</p>
        </div>
        <div className="footer__socials">
          <a href="https://facebook.com" aria-label="Facebook"><Facebook /></a>
          <a href="https://instagram.com" aria-label="Instagram"><Instagram /></a>
          <a href="https://twitter.com" aria-label="Twitter"><Twitter /></a>
          <a href="https://youtube.com" aria-label="YouTube"><Youtube /></a>
        </div>
      </div>
    </footer>
  )
}