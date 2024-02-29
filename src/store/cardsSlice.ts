import { createSlice } from '@reduxjs/toolkit';
import { Card, CurrentCard, RootState } from './interfaces';
import { ChangeCard, AddCard, ChangeCurrentCard, DeleteCard, InitialiseUser } from './cardActions';
import {
  ChangeNotification,
  ClearNotification,
  CloseDelete,
  CloseModal,
  OpenDelete,
  OpenModal,
} from './modalActions';

const initialCards: Card[] = [
  {
    id: 1,
    title: 'Title',
    description: 'Description',
    author: 'ppp@gmail.com',
  },
  {
    id: 2,
    title: 'Title2',
    description:
      'Description2  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut architecto corrupti delectus impedit distinctio labore, perspiciatis nisi doloribus qui obcaecati rem, ipsum illo debitis doloremque, quia nam quibusdam sint tempora eveniet? Facere sint quod ea at expedita eos, veritatis mollitia aspernatur facilis. Earum, mollitia at. At dolor dolore ducimus itaque neque, repellat eius doloremque praesentium blanditiis ipsum enim architecto perspiciatis, aliquam laboriosam porro distinctio quam optio cum? Eos necessitatibus error dolore laborum commodi sed iure neque? Atque, minus? Doloremque, quos tempora sapiente esse neque est laudantium repudiandae eos voluptas maxime!',
    author: 'ppp@gmail.com',
  },
  {
    id: 3,
    title: 'Title3',
    description: 'Description3',
    author: 'ppp@gmail.com',
  },
  {
    id: 4,
    title: 'Title4',
    description: 'Description4',
    author: 'ppp@gmail.com',
  },
];

const currentCard: CurrentCard = {};

const initialState: RootState = {
  initialCards,
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
    addCard(state, card) {
      AddCard(state, card);
    },
    changeCard(state, info) {
      ChangeCard(state, info);
    },
    deleteCard(state) {
      DeleteCard(state);
    },
  },
});

export const {
  clearNotification,
  changeNotification,
  openDelete,
  changeCurrentCard,
  changeCard,
  closeDelete,
  toClearState,
  initialiseUser,
  openModal,
  closeModal,
  addCard,
  deleteCard,
} = cardsSlice.actions;

export default cardsSlice.reducer;
