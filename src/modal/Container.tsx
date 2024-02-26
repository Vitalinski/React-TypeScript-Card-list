import React from 'react'
interface Props {
    title:string,
    closeBtn:boolean,
    onClick?:()=>void;
    children?: React.ReactNode;
    }
  const Container:React.FC<Props> = (props) => {
  return (
    <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
    {props.closeBtn&&<div className="modal-content-close" onClick={props.onClick}></div>}
      <h2 className="modal-content-title">{props.title}</h2>
      {props.children}
</div>
  )
}

export default Container