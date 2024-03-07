import { createSlice } from '@reduxjs/toolkit';

import { cardsInitialState } from './cards.initialState';
import { cardsReducers } from './cards.reducers';

export const cardsSlice = createSlice({
  name: 'cardsSlice',
  initialState: cardsInitialState,
  reducers: cardsReducers,
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
