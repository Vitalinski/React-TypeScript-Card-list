import React from 'react'
import Button from '../Button'
import { useStoreDispatch } from '../store/store'
import { openDelete, openModal, changeCurrentCard } from '../store/cardsSlice'
interface Props {
title:string,
description:string,
id:number,

    }
  const Card:React.FC<Props> = (props) => {
    const dispatch = useStoreDispatch()
    const buttonStyle={
        padding: "18px 30px",
        borderRadius: "5px",
        margin: "15px 15px 15px 0"

    }
    function deleteOpen(){
dispatch(changeCurrentCard({id:props.id, title:props.title}))
dispatch(openDelete())

    }
    function editOpen(){
      dispatch(changeCurrentCard({id:props.id, title:props.title, description:props.description}))
      dispatch(openModal())
      
          }
  return (
    <div className="card">
        <div className='card-content'>
            <h3 className="card-title">{props.title}</h3>
            <p className="card-description">{props.description}</p>
        </div>
        <div className="card-footer">
            <Button disabled={false} onClick={editOpen}  class='yellow' text='Edit'  style={buttonStyle}/>
            <Button disabled={false}  onClick={deleteOpen} class='yellow' text='Delete'  style={buttonStyle}/>

        </div>
    </div>
  )
}

export default Card