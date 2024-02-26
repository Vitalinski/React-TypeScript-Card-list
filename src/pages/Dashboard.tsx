import Board from "../board/Board" 
import Header from "../header/Header"
import DeleteModal from "../modal/DeleteModal"
import Modal from "../modal/Modal"


function Dashboard() {
 
  return (
    <>
    <Header/>
     <Board/>
     <Modal/>
     <DeleteModal/>
    </>
  )
}

export default Dashboard
