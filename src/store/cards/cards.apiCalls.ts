import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const getCardsAPI = () =>
  createApi({
    reducerPath: 'cardsAPI',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://167.172.185.32:8089/cards/',
    }),
    tagTypes: ['Card'],
    endpoints: () => ({}),
  });

export const cardsAPI = getCardsAPI();
