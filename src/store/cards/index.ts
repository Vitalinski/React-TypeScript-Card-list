import { createSlice } from '@reduxjs/toolkit';
import { cardsReducers } from './cards.reducers';
import { cardsInitialState } from './cards.initialState';

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
