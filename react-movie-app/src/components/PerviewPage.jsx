import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './PerviewPage.css';

function PerviewPage() {
  const [perView, setPerView] = useState({});
  const { id } = useParams();

  const getData = async (url) => {
    try {
      const response = await axios.get(url);
      const movieData = response.data.Search || [];
      
      // Find the movie with the matching imdbID
      const newD = movieData.find(({ imdbID }) => imdbID === id);
      setPerView(newD);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData(`http://www.omdbapi.com/?apikey=a269a908&s=movies`);
  }, [id]);

  console.log('perview', perView);

  // Render only when perView has data
  if (!perView || Object.keys(perView).length === 0) {
    return null;
  }

  return (
    <>
    <div className='perview'>
      <div className="image-container">
        <img src={perView.Poster} alt={`${perView.Title} Poster`} className="movie-poster" />
      </div>

      <div className="movie-details">
        <h2 className="movie-title">{perView.Title}</h2>
        <p className="movie-year">{perView.Year}</p>
        <p className="movie-type">{perView.Type}</p>
        
      </div>

      
    </div>
    <Link to="/" className='see'>See All Movies</Link>
    </>


  );
}

export default PerviewPage;
