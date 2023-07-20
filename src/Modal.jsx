import React from 'react'

const Modal = ({el,setshowModal}) => {
  return (
    <div className='modal'>
      <div className="box_modal">
        <button onClick={()=>setshowModal(false)} >X</button>
        <h1>Name: {el.title} </h1>
        <h1>descripition: {el.descripition} </h1>
      </div>
    </div>
  )
}

export default Modal
