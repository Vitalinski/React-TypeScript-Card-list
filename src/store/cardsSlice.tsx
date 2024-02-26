import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface Card {
  id?: number;
  title?: string;
  description?: string;
  author?: string;
}

const initialCards: Card[] = [
  {
    id: 1,
    title: "Title",
    description: "Description",
    author: "ppp@gmail.com",
  },
  {
    id: 2,
    title: "Title2",
    description: "Description2  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut architecto corrupti delectus impedit distinctio labore, perspiciatis nisi doloribus qui obcaecati rem, ipsum illo debitis doloremque, quia nam quibusdam sint tempora eveniet? Facere sint quod ea at expedita eos, veritatis mollitia aspernatur facilis. Earum, mollitia at. At dolor dolore ducimus itaque neque, repellat eius doloremque praesentium blanditiis ipsum enim architecto perspiciatis, aliquam laboriosam porro distinctio quam optio cum? Eos necessitatibus error dolore laborum commodi sed iure neque? Atque, minus? Doloremque, quos tempora sapiente esse neque est laudantium repudiandae eos voluptas maxime!",
    author: "ppp@gmail.com",
  },
  {
    id: 3,
    title: "Title3",
    description: "Description3",
    author: "ppp@gmail.com",
  },
  {
    id: 4,
    title: "Title4",
    description: "Description4",
    author: "ppp@gmail.com",
  },
];
const currentCard:Card={}
const initialState = {
  initialCards,
  isModalOpen:false,
  userEmail:'',
  currentCard,
  isDeleteOpen:false
  
}
export const cardsSlice = createSlice({
  name: "cardsSlice",
  initialState,
  reducers: {
    initialiseUser(state, email){
      localStorage.setItem("userEmail", JSON.stringify(email.payload));
      state.userEmail = email.payload

    },
    toClearState(){
      localStorage.clear();
    },
    changeCurrentCard(state, info){
      state.currentCard.id=info.payload.id
      state.currentCard.title=info.payload.title
      state.currentCard.description=info.payload.description

    },

    openModal:(state)=>{
state.isModalOpen=true
;

    },
    closeModal:(state)=>{
      state.isModalOpen=false
      state.currentCard={}

          },
    addCard: (state, card) => {
state.initialCards.push(card.payload)

    },
    openDelete(state){
      state.isDeleteOpen=true
     



    },
    closeDelete(state){
      state.isDeleteOpen=false
      state.currentCard={}


    },

    deleteCard:(state)=>{
state.initialCards = state.initialCards.filter((card)=>card.id!==state.currentCard.id  )
    }
  },
});

export const { openDelete, changeCurrentCard, closeDelete,toClearState,initialiseUser, openModal, closeModal, addCard, deleteCard } = cardsSlice.actions;

export default cardsSlice.reducer;
