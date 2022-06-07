import React from 'react';
import { Navigate } from 'react-router-dom';
import ListItem from '../ListItem/ListItem';
import styles from './ListContainer.module.css';

const ListContainer = () => {
  const { listContainer } = styles;

  let token = localStorage.getItem('token');

  return (
    <>
      {!token ? (
        <Navigate replace to="/" />
      ) : (
        <div className={listContainer}>
          <h3>Películas disponibles</h3>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
      )}
    </>
  );
};

export default ListContainer;
