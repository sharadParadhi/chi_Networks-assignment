import React,{useState} from 'react'
import "./MovieCard.css"
import { AiOutlineHeart  } from "react-icons/ai";
import { Link } from 'react-router-dom';

function MovieCard({Title,Year,imdbID,Type,Poster}) {
    const [isFavorite, setIsFavorite] = useState(false);
    
  
    let favoritList=JSON.parse(localStorage.getItem('favoritesList')) || []

    const handleAdd=(Title,Year,Type,Poster)=>{
      const obj={Title,Year,Type,Poster}
      favoritList=[...favoritList,obj]
      alert("product is added to favorite")
      localStorage.setItem('favoritesList', JSON.stringify(favoritList))
    }


  return (

    <div className="movie-card"  >
      <Link to={`/${imdbID}`}>
      
        <div className="image-container">
        <img src={Poster} alt={`${Title} Poster`} className="movie-poster" />
        {isFavorite && <div className="favorite-icon" onClick={()=>handleAdd(Title,Year,Type,Poster)}><AiOutlineHeart/> </div>}
        </div>

        <div className="movie-details">
        <h2 className="movie-title">{Title}</h2>
        <p className="movie-year">{Year}</p>
        <p className="movie-type">{Type}</p>
        </div>

        <div
        className="favorite-overlay"
        onMouseEnter={() => setIsFavorite(true)}
        onMouseLeave={() => setIsFavorite(false)}
        
        >
        </div>
        </Link>
        
  </div>

  )
}

export default MovieCard
