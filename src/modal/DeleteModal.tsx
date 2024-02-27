import React from "react";
import Button from "../Button";
import { useEffect } from "react";
import {  useSelector } from "react-redux";
import { RootState, useStoreDispatch } from "../store/store";
import {changeNotification, clearNotification, deleteCard, closeDelete } from "../store/cardsSlice";
import Container from "./Container";



const DeleteModal = () => {


  const dispatch = useStoreDispatch()
  const isDeleteOpen = useSelector((state:RootState)=> state.cardAction.isDeleteOpen)
  const buttonStyle={
    padding: "18px 30px",
    borderRadius: "15px",
    margin: "12px 0 0 15px "

}
const title = useSelector((state:RootState)=> state.cardAction.currentCard.title)

useEffect(() => {
  if (isDeleteOpen) {
    document.body.style.overflow = 'hidden'; 
  } else {
    document.body.style.overflow = 'auto';
  }
}, [isDeleteOpen]);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape'&& isDeleteOpen) {
    cleaneAndClose(); 
  }
});




function cleaneAndClose(){

  dispatch(closeDelete())
 
}
function toDelete(){
    dispatch(deleteCard())
    cleaneAndClose()
    dispatch(changeNotification('Card has been delited'))
    setTimeout(() => {
     dispatch(clearNotification())}, 1000);
}
  return (
<>
   {isDeleteOpen ? (
    <div className="modal" onClick={cleaneAndClose}>
    <Container 
    closeBtn={true}
    title=" DELETE CARD"
    onClick={cleaneAndClose}
    >
  
<p className="modal-delete-info">Are you sure you want to delete card “{title}”?</p>
          <div className="modal-content-deleateBtns ">
            <Button 
          disabled={false}
            onClick={cleaneAndClose}
            class="white"
            text="Close"
            style={buttonStyle}
            />
             <Button
                       disabled={false}
             onClick={toDelete}
             class="yellow"
            text="Delete"
            style={buttonStyle}
            />
          </div>
          </Container>
    </div>
    ):null}
    </>
  );
};

export default DeleteModal;
