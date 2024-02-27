import React from "react"
import Button from "../Button"
import Card from "./Card";
import {  useSelector } from "react-redux";
import { RootState, useStoreDispatch } from "../store/store";
import { openModal } from "../store/cardsSlice";
const Board:React.FC = () => {
  const dispatch = useStoreDispatch()
  const cards = useSelector((state:RootState)=> state.cardAction.initialCards)
    const buttonStyles = {
        borderRadius: '15px',
        width: '202px',
        height: '61px',
        margin: '30px 0'
      };
function openAdd(){
dispatch(openModal())
}

  return (
    <div className="board">
    <Button 
    disabled={false}
    onClick={openAdd}
    text='Create card'
    style={buttonStyles}
    class="yellow"/>
    <div className="board-cards">
    {cards.map((card)=>{
    return  <Card key={card.id} id={card.id} description={card.description} title={card.title} />
    })}
    </div>
</div>
  )
}

export default Board