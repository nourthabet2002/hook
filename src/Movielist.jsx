import React from 'react'
import MovieCard from './MovieCard'
const Movielist = ({movie,search}) => {
  return (
    <div className='cards'>
      {movie.filter(el=>el.title.toUpperCase().includes(search.toUpperCase())).map(el=><MovieCard el={el}  />)}
    </div>
  )
}
export default Movielist