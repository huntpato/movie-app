import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import swAlert from '@sweetalert/with-react';
import styles from './ItemDetailContainer.module.css';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const { detailContainer } = styles;

  let token = sessionStorage.getItem('token');

  let query = new URLSearchParams(window.location.search);
  let movieID = query.get('movieID');

  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const endPointDetail = `https://api.themoviedb.org/3/movie/${movieID}?api_key=11ddf91bee4fd208bc21a652190a2bca&language=es-ES`;
    axios
      .get(endPointDetail)
      .then((resp) => {
        const apiData = resp.data;
        setMovieData(apiData);
      })
      .catch((error) => {
        swAlert(<h5>No pudimos conectar, intenta más tarde</h5>);
      });
  }, [movieID]);

  return (
    <>
      {!token ? (
        <Navigate replace to="/" />
      ) : (
        movieData && (
          <div className={detailContainer}>
            <h3>{movieData.title}</h3>
            <ItemDetail movieData={movieData} />
          </div>
        )
      )}
    </>
  );
};

export default ItemDetailContainer;
