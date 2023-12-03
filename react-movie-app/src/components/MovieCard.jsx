import React from 'react';
import './MovieCard.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function MovieCard({ Title, Year, imdbID, Type, Poster }) {

  
  const handleAdd = (event, Title, Year, imdbID, Type, Poster) => {
    event.preventDefault();
    event.stopPropagation();

    let fList = JSON.parse(localStorage.getItem('fList')) || [];
    let flag = false;

    fList.forEach((item) => {
      if (item.imdbID === imdbID) {
        flag = true;
      }
    });

    if (flag) {
      alert('Product is already present in Favorite');
    } else {
      const obj = { Title, Year, imdbID, Type, Poster };
      fList.push(obj);
      localStorage.setItem('fList', JSON.stringify(fList));
      alert('Product is added to favorite');
    }
  };

  return (
    <div className="movie-card">
      <Link to={`/${imdbID}`}>
        <div className="image-container">
          <img src={Poster} alt={`${Title} Poster`} className="movie-poster" />
        </div>

        <div className="movie-details">
          <h2 className="movie-title">{Title}</h2>
          <p className="movie-year">{Year}</p>
          <p className="movie-type">{Type}</p>
        </div>

        <div className="favorite-overlay"></div>
      </Link>

      <div className="favorite-icon" onClick={(event) => handleAdd(event, Title, Year, imdbID, Type, Poster)}>
        <AiOutlineHeart />{' '}
      </div>
    </div>
  );
}

export default MovieCard;
