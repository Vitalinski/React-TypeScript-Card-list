import { CurrentCard, RootState } from '@/store/cards/cards.types';

export const cardsReducers = {
  changeWaitingMode(state: RootState, boolean: { payload: boolean }) {
    state.waitingMode = boolean.payload;
  },
  changeCurrentCard(state: RootState, info: { payload: CurrentCard }) {
    state.currentCard.id = info.payload.id;
    state.currentCard.title = info.payload.title;
    state.currentCard.description = info.payload.description;
  },
  initialiseUser(state: RootState, email: { payload: string }) {
    localStorage.setItem('userEmail', JSON.stringify(email.payload));
    state.userEmail = email.payload;
  },
  changeNotification(state: RootState, info: { payload: string }) {
    state.notification = info.payload;
  },
  clearNotification(state: RootState) {
    state.notification = '';
  },
  openModal(state: RootState) {
    state.isModalOpen = true;
  },
  closeModal(state: RootState) {
    state.isModalOpen = false;
    state.currentCard = {};
  },
  openDelete(state: RootState) {
    state.isDeleteOpen = true;
  },
  closeDelete(state: RootState) {
    state.isDeleteOpen = false;
    state.currentCard = {};
  },

  toClearState(state: RootState) {
    localStorage.clear();
    state.userEmail = '';
  },
};
