import React, { useState } from 'react'
import Movielist from"./Movielist";
import './App.css';
import MovieCard from './MovieCard'
import Navbar from './Navbar';
const App = () => {
  const [movie, setmovie] = useState([{
    title: "titanic",
    posterurl : "https://services.meteored.com/img/article/titanic-10-curiosidades-sobre-el-naufragio-mas-famoso-de-la-historia-1681429632845_1280.jpg",
    descripition: "drama",
    ratting: "17/20"
  },
  {
    title:"the good doctor",
    posterurl : "https://m.media-amazon.com/images/I/61f5uQXQbcL._AC_UF894,1000_QL80_.jpg",
    descripition:"drama",
    ratting: "15/20",
  },
   {
    title: "home alone",
    posterurl : "https://www.usmagazine.com/wp-content/uploads/2020/11/Home-Alone-Where-Are-They-Now.jpg?quality=40&strip=all",
    descripitiion:"horror",
    ratting: "20/20",
  }, 
  {
    title: "3096days",
    posterurl :"https://static.ffx.io/images/$width_368%2C$height_552/t_crop_fill/q_86%2Cf_auto/28ee5f9a8a17bb3bde7bbaf7b1605c0e8e11557a",
    descripition:"biography",
    ratting:"18/20",
  }])
    
    const [openmodal, setopenmodal] = useState(false)
    const [search, setsearch] = useState("")
  return (
    <div className='App'>
      <Navbar setsearch={setsearch} setmovie={setmovie} movie={movie} openmodal={openmodal} setopenmodal={setopenmodal} />
      <Movielist movie={movie} search={search}  />
      
      
    </div>
  )
}


export default App

