import { CurrentCard, RootState } from '@/store/cards/cards.types';

const ChangeWaitingMode = (state: RootState, boolean: { payload: boolean }) => {
  state.waitingMode = boolean.payload;
};
const ChangeCurrentCard = (state: RootState, info: { payload: CurrentCard }) => {
  state.currentCard.id = info.payload.id;
  state.currentCard.title = info.payload.title;
  state.currentCard.description = info.payload.description;
};
const InitialiseUser = (state: RootState, email: { payload: string }) => {
  localStorage.setItem('userEmail', JSON.stringify(email.payload));
  state.userEmail = email.payload;
};
const ChangeNotification = (state: RootState, info: { payload: string }) => {
  state.notification = info.payload;
};
const ClearNotification = (state: RootState) => {
  state.notification = '';
};
const OpenModal = (state: RootState) => {
  state.isModalOpen = true;
};
const CloseModal = (state: RootState) => {
  state.isModalOpen = false;
  state.currentCard = {};
};
const OpenDelete = (state: RootState) => {
  state.isDeleteOpen = true;
};
const CloseDelete = (state: RootState) => {
  state.isDeleteOpen = false;
  state.currentCard = {};
};

export {
  ChangeNotification,
  ClearNotification,
  CloseDelete,
  CloseModal,
  OpenDelete,
  OpenModal,
  ChangeWaitingMode,
  ChangeCurrentCard,
  InitialiseUser,
};
