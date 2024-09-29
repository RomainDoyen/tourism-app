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

// export type CardProps = {
//   title: string;
//   imageUrl: string;
//   price: string;
//   icon: React.ReactNode;
//   establishment: {
//     name: string;
//     imageUrl: string;
//     description: string;
//     address: string;
//     phone: string;
//   };
//   onBookmarkClick?: () => void;
//   onButtonClick?: () => void;
// }

export type Establishment = {
  name: string;
  imageUrl: string;
  description?: string;
  categories?: string;
  address: string;
  phone: string;
}

export type CardProps<T extends Establishment> = {
  data: T[];
  icon: JSX.Element;
  onSelect: (item: T) => void;
  getTitle: (item: T) => string;
  getImageUrl: (item: T) => string;
}