import React from 'react';
import "./MovieCard.css"
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function FavCard({ Title, Year, imdbID, Type, Poster }) {

  const handleDelete = (event, imdbID) => {
    event.preventDefault();
    event.stopPropagation();

    let fList = JSON.parse(localStorage.getItem('fList')) || [];

    // Filter out the card with the matching imdbID
    let updatedList = fList.filter(item => item.imdbID !== imdbID);

    // Display a confirmation message
    const isConfirmed = window.confirm("Are you sure you want to delete this card?");
    if (isConfirmed) {
      // Update localStorage with the filtered list
      localStorage.setItem('fList', JSON.stringify(updatedList));
      window.location.reload();
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

      <div className="favorite-icon" onClick={(event) => handleDelete(event, imdbID)}>
        <AiOutlineDelete />{' '}
      </div>
    </div>
  );
}

export default FavCard;
