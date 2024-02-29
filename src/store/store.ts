import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import cardsReducer from '@/store/cardsSlice';

export const store = configureStore({
  reducer: {
    cardAction: cardsReducer,
  },
  devTools: true,
});

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
