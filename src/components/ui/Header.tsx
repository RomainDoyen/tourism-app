import { NavLink } from 'react-router-dom';
import { linksType, HeaderProps } from "../../types/ui_types";

export default function Header({ links }: HeaderProps) {
  return (
    <header>
      <nav>
        <ul>
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
