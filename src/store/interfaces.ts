interface Card {
  id: number;
  title: string;
  description: string;
  author: string;
}
interface CurrentCard {
  id?: number;
  title?: string;
  description?: string;
}

interface InputProps {
  title: string;
  type: string;
  value: string;
  isValid: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
interface ContainerProps {
  title: string;
  closeBtn: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

interface ButtonProps {
  text: string;
  style: string;
  class: string;
  onClick: () => void;
  disabled: boolean;
}
interface CardProps {
  title: string;
  description: string;
  id: number;
}
interface RootState {
  initialCards: Card[];
  isModalOpen: boolean;
  userEmail: string;
  notification: string;
  currentCard: CurrentCard;
  isDeleteOpen: boolean;
}

export type { RootState, CardProps, ButtonProps, ContainerProps, CurrentCard, InputProps, Card };
