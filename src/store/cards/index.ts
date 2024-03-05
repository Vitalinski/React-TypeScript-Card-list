import { createSlice } from '@reduxjs/toolkit';
import { CurrentCard, RootState } from '@/store/cards/cards.types';
import {
  ChangeCurrentCard,
  InitialiseUser,
  ChangeWaitingMode,
  ChangeNotification,
  ClearNotification,
  CloseModal,
  CloseDelete,
  OpenDelete,
  OpenModal,
} from './cards.reducers';

const currentCard: CurrentCard = {};

const initialState: RootState = {
  waitingMode: false,
  isModalOpen: false,
  userEmail: '',
  notification: '',
  currentCard,
  isDeleteOpen: false,
};

export const cardsSlice = createSlice({
  name: 'cardsSlice',
  initialState,
  reducers: {
    changeWaitingMode(state, boolean) {
      ChangeWaitingMode(state, boolean);
    },
    changeNotification(state, info) {
      ChangeNotification(state, info);
    },
    clearNotification(state) {
      ClearNotification(state);
    },
    toClearState() {
      localStorage.clear();
    },

    openModal(state) {
      OpenModal(state);
    },
    closeModal(state) {
      CloseModal(state);
    },

    openDelete(state) {
      OpenDelete(state);
    },
    closeDelete(state) {
      CloseDelete(state);
    },
    
    initialiseUser(state, email) {
      InitialiseUser(state, email);
    },
    changeCurrentCard(state, info) {
      ChangeCurrentCard(state, info);
    },
  },
});

export const {
  clearNotification,
  changeNotification,
  openDelete,
  changeCurrentCard,
  toClearState,
  initialiseUser,
  openModal,
  closeModal,
  closeDelete,
  changeWaitingMode,
} = cardsSlice.actions;

export default cardsSlice.reducer;
