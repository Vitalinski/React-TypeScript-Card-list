import React from 'react'
interface Props {
    text: string;
    style: object; 
    class:string;
    onClick:()=>void;
    disabled:boolean
  }
const Button: React.FC<Props>= (props) => {
  return (
    <button  onClick={props.onClick} className={'button ' + props.class}  style={props.style} disabled={props.disabled}>{props.text}</button>
  )
}

export default Button