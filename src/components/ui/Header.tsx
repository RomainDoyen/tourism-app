import { NavLink } from 'react-router-dom';
import { linksType, HeaderProps } from "../../types/ui_types";
import { useState } from 'preact/hooks';
import headerImage from '../../assets/proxy-image.png';
import header from '../../assets/header.png';
import './Header.css';
import Image from './Image';

export default function Header({ links }: HeaderProps) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header>
      <Image src={header} alt="fond" className='logo-header' />
      <nav>
        <div className="logo">
          <Image src={headerImage} alt="logo" />
        </div>
        <div className="burger-menu">
          <input type="checkbox" id="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
          <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          {links.map((link: linksType, index: number) => (
            <li key={index}>
              <NavLink to={link.to} className={link.className}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
