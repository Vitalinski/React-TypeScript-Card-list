import { CurrentCard, RootState } from './cards.types';

const currentCard: CurrentCard = {};
const userEmail = localStorage.getItem('userEmail') || '';
export const cardsInitialState: RootState = {
  waitingMode: false,
  isModalOpen: false,
  userEmail,
  notification: '',
  currentCard,
  isDeleteOpen: false,
};
