import { useEffect } from "react"
import Board from "../board/Board" 
import Header from "../header/Header"
import DeleteModal from "../modal/DeleteModal"
import Modal from "../modal/Modal"
import { useNavigate } from "react-router-dom"
import Container from "../modal/Container"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"
function Dashboard() {
const navigate = useNavigate()
useEffect(() => {
  if(!localStorage.getItem('userEmail')){
    navigate('/')
  
  }
}, []);

const notification = useSelector((state:RootState)=> state.cardAction.notification)



  return (
    <>
    <Header/>
     <Board/>
     <Modal/>
     <DeleteModal/>
    {notification && <Container title="Notification" closeBtn={false}><p style={{color:'green', fontWeight:900}}>{notification}</p></Container>} 

    </>
  )
}

export default Dashboard
