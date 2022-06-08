import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import swAlert from '@sweetalert/with-react';
import ListItem from '../ListItem/ListItem';
import styles from './ListContainer.module.css';

const ListContainer = () => {

  const { listContainer } = styles;

  const  [movieList, setMovieList ] = useState([]);
  
  useEffect(() => {
    const endPoint =
    'https://api.themoviedb.org/3/discover/movie?api_key=11ddf91bee4fd208bc21a652190a2bca&language=es-ES&page=1';
    axios
    .get(endPoint)
    .then((resp) => {
      const apiData = resp.data;
      setMovieList(apiData.results);
    })
    .catch(error => {
      swAlert(<h5>No pudimos conectar, intenta más tarde</h5>)
    })
  }, [setMovieList]);

  let token = localStorage.getItem('token');

  return (
    <>
      {!token ? (
        <Navigate replace to="/" />
      ) : (
        <div className={listContainer}>
          <h3>Películas disponibles</h3>
          <ListItem movieList = {movieList}/>
        </div>
      )}
    </>
  );
};

export default ListContainer;
