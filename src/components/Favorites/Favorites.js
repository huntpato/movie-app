import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import styles from './Favorites.module.css';

const Favorites = ({ favorites, addRemoveFavs }) => {
  const {
    favsContainer,
    movieContainer,
    movieContainer_img,
    movieContainer_description,
  } = styles;

  let token = sessionStorage.getItem('token');

  return (
    <>
      {!token ? (
        <Navigate replace to="/" />
      ) : (
        <div className={favsContainer}>
          <h3> Tus favoritos </h3>
          {favorites.map((movie) => {
            return (
              <div className={movieContainer} key={movie.id}>
                <div className={movieContainer_img}>
                  <img src={movie.imgUrl} alt="movie poster" />
                  <button onClick={addRemoveFavs} data-movieid={movie.id}>
                    🖤
                  </button>
                </div>
                <div className={movieContainer_description}>
                  <h4>{movie.title.substring(0, 30)}...</h4>
                  <p>{movie.description}</p>
                  <Link to={`/detail?movieID=${movie.id}`}>
                    <button>Ver más</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Favorites;
