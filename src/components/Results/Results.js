import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import swAlert from '@sweetalert/with-react';
import styles from './Results.module.css';
import ListItem from '../ListItem/ListItem';

const Results = () => {
  const { resultsContainer } = styles;

  let query = new URLSearchParams(window.location.search);
  let keyword = query.get('word');

  const [movieResults, setMovieResults] = useState([]);

  useEffect(() => {
    const endPointSearch = `https://api.themoviedb.org/3/search/movie?api_key=11ddf91bee4fd208bc21a652190a2bca&language=es-ES&query=${keyword}`;
    axios
      .get(endPointSearch)
      .then((resp) => {
        const apiResults = resp.data.results;
        setMovieResults(apiResults);
      })
      .catch((error) => {
        swAlert(<h5>No pudimos conectar, intenta más tarde</h5>);
      });
  }, [movieResults, keyword]);

  return (
    <div className={resultsContainer}>
      {movieResults.length === 0 ? (
        <h3>No hay resultados para tu búsqueda</h3>
      ) : (
        <h3>Tu búsqueda: {keyword}</h3>
      )}
      <ListItem movieList={movieResults} />
    </div>
  );
};

export default Results;
