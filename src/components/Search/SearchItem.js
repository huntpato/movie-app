import React from 'react';
import swAlert from '@sweetalert/with-react';
import styles from './Search.module.css';
import { useNavigate } from 'react-router-dom';

const SearchItem = () => {
  const { formContainer } = styles;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();

    if (keyword.length === 0) {
      swAlert(<h5>Tienes que escribir una palabra clave</h5>);
    } else if (keyword.length <= 2) {
      swAlert(<h5>Por favor escribe más de 2 caracteres</h5>);
    } else {
      e.currentTarget.keyword.value = '';
      navigate(`/results?word=${keyword}`);
    }
  };

  return (
    <form className={formContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe una palabra clave..."
        name="keyword"
      ></input>
      <button type="submit">buscar</button>
    </form>
  );
};

export default SearchItem;
