import React from 'react'
import Addmodal from './Addmodal'

const Navbar = ({openmodal,setopenmodal,movie , setsearch,setmovie}) => {
  return (
    <div className='navbar'>
      {(openmodal)?<Addmodal openmodal={openmodal} setmovie={setmovie} setopenmodal={setopenmodal} movie={movie} />:null}
      <ol>
        <li><input type="text" name="add" id="add" onChange={(e)=>setsearch(e.target.value)} /></li>
        <li><button onClick={()=>setopenmodal(true)} >add</button></li>
        <li>about</li>
      </ol>
    </div>
  )
}

export default Navbar

