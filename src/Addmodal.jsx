import React, { useState } from 'react'

const Addmodal = ({setaddmodal,setopenmodal,movie,setmovie}) => {
  const [newmovie, setnewmovie] = useState({
    title: "",
    posterurl : "",
    descripition: "",
    ratting: ""
  })
  const addmovie=()=>{setmovie([...movie,newmovie])}
  return (
    <div className='modal'>
      <div className="box_modal">
        <label >title</label>
        <input type="text" onChange={(e)=>setnewmovie({...newmovie,title:e.target.value})}  />
        <label >description</label>
        <input type="text" onChange={(e)=>setnewmovie({...newmovie,descripition:e.target.value})} />
        <label >image URL</label>
        <input type="text" onChange={(e)=>setnewmovie({...newmovie,posterurl:e.target.value})} />
        <label >rating</label>
        <input type="text" onChange={(e)=>setnewmovie({...newmovie,ratting:e.target.value})} />
        <div onClick={()=>setopenmodal(false)}>
        <button onClick={()=>{addmovie()}} >apply</button>
        </div>
      </div>
    </div>
  )
}

export default Addmodal