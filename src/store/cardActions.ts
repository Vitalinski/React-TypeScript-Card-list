import { CurrentCard, RootState } from './interfaces';

const ChangeWaitingMode = (state: RootState, boolean: { payload: boolean }) => {
  state.waitingMode = boolean.payload;
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
export { ChangeWaitingMode, ChangeCurrentCard, InitialiseUser };
