export type CardRunSTRoseProps = {
  onMapHover: (index: number) => void;
  highlightedItem: number | null;
}

export type ModalProps = {
  establishment: {
    name: string;
    imageUrl: string;
    description?: string;
    categories?: string;
    address: string;
    phone: string;
  };
  onClose: () => void;
}