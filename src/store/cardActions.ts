import { Card, CurrentCard, RootState } from './interfaces';

const ChangeCard = (state: RootState, info: { payload: Card }) => {
  state.initialCards = state.initialCards.map((card: Card) => {
    if (card.id === info.payload.id) {
      card.title = info.payload.title;
      card.description = info.payload.description;
    }
    return card;
  });
};

const AddCard = (state: RootState, card: { payload: Card }) => {
  state.initialCards.push(card.payload);
};

const DeleteCard = (state: RootState) => {
  state.initialCards = state.initialCards.filter(
    (card: CurrentCard) => card.id !== state.currentCard.id,
  );
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
export { ChangeCard, AddCard, ChangeCurrentCard, DeleteCard, InitialiseUser };
