import React from 'react';
import { Navigate } from 'react-router-dom';
import styles from './ItemDetail.module.css';

const ItemDetail = () => {
  const { detailContainer } = styles;

  let token = sessionStorage.getItem('token');

  return (
    <>
      {!token ? (
        <Navigate replace to="/" />
      ) : (
        <div className={detailContainer}>
            <h3>Películas disponibles</h3>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
