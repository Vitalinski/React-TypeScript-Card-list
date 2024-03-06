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
  type: 'email' | 'text';
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
  disabled?: boolean;
  style: string;
  type: 'button-yellow' | 'button-white';
  onClick: () => void;
  children: string;
}
interface OverlayProps {
  onClick: () => void;
  children?: React.ReactNode;
}
interface CardProps {
  title: string;
  description: string;
  id: number;
}
interface RootState {
  waitingMode: boolean;
  isModalOpen: boolean;
  userEmail: string;
  notification: string;
  currentCard: CurrentCard;
  isDeleteOpen: boolean;
}

export type {
  OverlayProps,
  RootState,
  CardProps,
  ButtonProps,
  ContainerProps,
  CurrentCard,
  InputProps,
  Card,
};
