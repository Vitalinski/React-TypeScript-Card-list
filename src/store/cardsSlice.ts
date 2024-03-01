import { createSlice } from '@reduxjs/toolkit';
import { CurrentCard, RootState } from './interfaces';
import { ChangeCurrentCard, InitialiseUser, ChangeWaitingMode } from './cardActions';
import {
  ChangeNotification,
  ClearNotification,
  CloseDelete,
  CloseModal,
  OpenDelete,
  OpenModal,
} from './modalActions';

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
  closeDelete,
  toClearState,
  initialiseUser,
  openModal,
  closeModal,
  changeWaitingMode,
} = cardsSlice.actions;

export default cardsSlice.reducer;
