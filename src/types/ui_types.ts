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