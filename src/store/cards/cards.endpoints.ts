import { cardsAPI } from './cards.apiCalls';
import { Card, CurrentCard } from './cards.types';

const cardsAP = cardsAPI;
export const cardsEndpoints = cardsAP.injectEndpoints({
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
} = cardsEndpoints;
