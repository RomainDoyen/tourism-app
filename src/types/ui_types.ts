export type linksType = {
  to: string;
  className: (nav: { isActive: any; }) => string;
  text: string;
};

export type HeaderProps = {
  links: linksType[];
};

export type FooterProps = {
  nameSite: string
  copyright: string
};

export type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export type TextProps = {
  text: string
  className?: string
  style?: React.CSSProperties
}

export type ButtonProps = {
  children?: string | JSX.Element;
  className?: string;
  onClick?: () => void;
};