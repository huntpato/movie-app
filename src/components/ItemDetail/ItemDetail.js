import React from 'react';
import styles from './ItemDetail.module.css';

const ItemDetail = ({ movieData }) => {
  const { container, container_img, container_description } = styles;

  return (
    <div className={container}>
      <div className={container_img}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
          alt="movie poster"
        />
      </div>
      <div className={container_description}>
        <h4>Fecha de estreno: {movieData.release_date}</h4>
        <h4>Reseña:</h4>
        <p>{movieData.overview}</p>
        <h4>Rating: {movieData.vote_average}</h4>
        <h4>Géneros:</h4>
        <ul>
          {movieData.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItemDetail;
