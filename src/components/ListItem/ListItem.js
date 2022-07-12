import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ListItem.module.css';

const ListItem = ({ movieList, addRemoveFavs }) => {
  const { listItem, listItem_img, listItem_description, listItem_button } =
    styles;
    

  return (
    <>
      {movieList.map((movie) => {
        return (
          <div className={listItem} key={movie.id}>
            <div className={listItem_img}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="movie poster"
              />
              <button
                className={listItem_button}
                onClick={addRemoveFavs}
                data-movieid={movie.id}
              >
                🖤
              </button>
            </div>
            <div className={listItem_description}>
              <h4>{movie.title.substring(0, 30)}...</h4>
              <p>{movie.overview}</p>
              <Link to={`/detail?movieID=${movie.id}`}>
                <button>Ver más</button>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ListItem;
