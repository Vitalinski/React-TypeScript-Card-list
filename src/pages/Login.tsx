import { useState } from "react"
import Container from "../modal/Container"
import Input from "../modal/Input"
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import {  useStoreDispatch } from "../store/store";
import { initialiseUser } from "../store/cardsSlice";
function Login() {
 const [email, setEmail] = useState('')
const [isValid, setIsValid ] = useState(true)
 const buttonStyles = {
  borderRadius: '15px',
  width: '234px',
  height: '61px',
  
};
const dispatch = useStoreDispatch()
const navigate = useNavigate()
function login(){
   const isValidEmail = /\S+@\S+\.\S+/.test(email);
   if(isValidEmail){
    dispatch(initialiseUser(email))
     navigate('/dashboard')
   }
    setIsValid(isValidEmail);
}
  return (
    <>
   <Container 
   closeBtn={false}
   title="LOGIN FORM"

   >
    <Input
    isValid={isValid}
    title="Email"
    type="email"
    value={email}
    onChange={(e)=>{
      setEmail(e.target.value.trim())
      setIsValid(true)
    }}
    />

<Button
disabled={email.length===0}
class="yellow"
style={buttonStyles}
onClick={login}
text="Submit"

/>
   </Container>
    </>
  )
}

export default Login
