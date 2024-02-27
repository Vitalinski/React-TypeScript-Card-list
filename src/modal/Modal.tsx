import React from "react";
import Button from "../Button";
import { useState, useEffect } from "react";
import {  useSelector } from "react-redux";
import { RootState, useStoreDispatch } from "../store/store";
import {clearNotification, closeModal, addCard, changeCard, changeNotification } from "../store/cardsSlice";
import Container from "./Container";
import Input from "./Input";



const Modal = () => {

  const buttonStyle={
    padding: "18px 30px",
    borderRadius: "15px",
    margin: "12px 0 0 15px "

}

  const dispatch = useStoreDispatch()
  const isModalOpen = useSelector((state:RootState)=> state.cardAction.isModalOpen)
  const currentCard = useSelector((state:RootState)=> state.cardAction.currentCard)
const [title, setTitle]= useState("")
const [description, setDescription]= useState(currentCard.description|| '')
const [isTitleValid, setIsTitleValid ] = useState(true)
const [isDescriptionValid, setIsDescriptionValid ] = useState(true)
const isEdit= !!currentCard.title
useEffect(() => {
  setTitle(currentCard.title !== undefined ? currentCard.title : '');
  setDescription(currentCard.description !== undefined ? currentCard.description : '');

}, [currentCard]);
useEffect(() => {
  if (isModalOpen) {
    document.body.style.overflow = 'hidden'; 
  } else {
    document.body.style.overflow = 'auto';
  }
}, [isModalOpen]);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape'&& isModalOpen) {
    cleaneAndClose(); 
  }
});


function addNewCard(){
  const newCard = {
    author:'example.email@gmail.com',
    id:Math.random(),
    title:title,
    description:description,
  }
  dispatch(addCard(newCard))
  cleaneAndClose()
 dispatch(changeNotification('Card has been created'))
 setTimeout(() => {
  dispatch(clearNotification())}, 1000);
}
function editCard(){

  dispatch(changeCard({id:currentCard.id, title:title, description:description} ))
  cleaneAndClose()
  dispatch(changeNotification('Card has been edited'))
  setTimeout(() => {
   dispatch(clearNotification())}, 1000);

}
function validation(){
 
   if(title.length===0){
setIsTitleValid(false)
  }
  else if(description.length===0){
    setIsDescriptionValid(false)
  }
  else isEdit?editCard():addNewCard()

}
function cleaneAndClose(){

  dispatch(closeModal())
  setIsDescriptionValid(true)
  setIsTitleValid(true)
  setDescription('');
  setTitle('')
}



const modalTitle= isEdit?'EDIT CARD':" CREATE CARD"
const modalSubmitText= isEdit?'Save':" Create"

  return (
<>
   {isModalOpen ? (
    <div className="modal" onClick={cleaneAndClose}>
    <Container 
    closeBtn={true}
    title={modalTitle}
    onClick={cleaneAndClose}
    >
      <Input 
              isValid={isTitleValid}

        type="text"
        title="Title"
        value={title}
        onChange={(e)=>{setTitle(e.target.value.trim())
        setIsTitleValid(true)
        }
        }/>
        <Input 
        isValid={isDescriptionValid}
        type="text"
        title="Description"
        value={description}
        onChange={(e)=>{setDescription(e.target.value.trim())
        setIsDescriptionValid(true)
        }
        }/>

          <div className="modal-content-btns">
            <Button 
          disabled={false}
            onClick={cleaneAndClose}
            class="white"
            text="Close"
            style={buttonStyle}
            />
             <Button
                       disabled={false}
             onClick={validation}
             class="yellow"
            text={modalSubmitText}
            style={buttonStyle}
            />
          </div>
          </Container>
    </div>
    ):null}
    </>
  );
};

export default Modal;
