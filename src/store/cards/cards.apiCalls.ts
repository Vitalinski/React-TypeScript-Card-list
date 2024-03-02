import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Card, CurrentCard } from '@/store/cards/cards.types';

export const cardsAPI = createApi({
  reducerPath: 'cardsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://167.172.185.32:8089/cards/',
  }),
  tagTypes: ['Card'],
  endpoints: (builder) => ({
    getCards: builder.query<Card[], string>({
      query: (email) => email,
      providesTags: () => ['Card'],
    }),
    addCard: builder.mutation<Card, Card>({
      query: (card) => ({
        url: '',
        method: 'POST',
        body: card,
      }),
      invalidatesTags: ['Card'],
    }),
    deleteCard: builder.mutation<Card, number>({
      query: (id) => ({
        url: `${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Card'],
    }),
    changeCard: builder.mutation<Card, CurrentCard>({
      query: (card) => ({
        url: `${card.id}`,
        method: 'PUT',
        body: {
          title: card.title,
          description: card.description,
        },
      }),
      invalidatesTags: ['Card'],
    }),
  }),
});

export const {
  useGetCardsQuery,
  useAddCardMutation,
  useChangeCardMutation,
  useDeleteCardMutation,
} = cardsAPI;
