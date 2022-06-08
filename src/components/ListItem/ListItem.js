import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ListItem.module.css';

const ListItem = ({ movieList }) => {

  const { listItem, listItem_img, listItem_description } = styles;

  return (
    <>
      {movieList.map((movie, idx) => {
        return (
          <div className={listItem} key={idx}>
            <div className={listItem_img}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='movie poster' />
            </div>
            <div className={listItem_description}>
              <h4>{movie.title.substring(0 ,20)}...</h4>
              <p>{movie.overview}</p>
              <Link to="/">
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
