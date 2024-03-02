import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import cardsReducer from '@/store/cards';
import { cardsAPI } from './cards/cards.apiCalls';

export const store = configureStore({
  reducer: {
    cardAction: cardsReducer,
    [cardsAPI.reducerPath]: cardsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsAPI.middleware),
  devTools: true,
});

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
