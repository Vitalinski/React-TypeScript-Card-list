import React from 'react'
interface Props {
    title:string,
    type:string,
    value:string,
    isValid:boolean,
    onChange:(e: React.ChangeEvent<HTMLInputElement>)=>void
    }
  const Input:React.FC<Props> = (props) => {
  return (

   <div>
        <p className={"modal-content-text" + (props.isValid ? " ":" modal-content-text-invalid")}>{props.title}</p>
        <input  type="text" value={props.value} onChange={props.onChange} className={props.isValid?"":'invalid-input'}/> 
   </div> )
}

export default Input