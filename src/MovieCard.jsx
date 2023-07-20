import React from 'react'
import Modal from './Modal'
import Addmodal from './Addmodal'
import { useState } from "react"

const Card = ({el}) => {
  const [showModal, setshowModal] = useState(false)
  const [addmodal, setaddmoadal]  =useState(false)
  return (
    <div className='card'>
      {showModal?<Modal el={el} setshowModal={setshowModal} />:null}
       {addmodal ?<Addmodal el={el} addmodal={addmodal}   />:null}
      <h1>{el.title}</h1>
      <h1>{el.descripition}</h1>
      <h1><img src={el.imgsrc} alt={el.title} /></h1>
      <button onClick={()=>setshowModal(true)} >show me</button>
    </div>
  )
}

export default Card