import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ListContainer = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === null) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div>
      <h2>listado</h2>
    </div>
  );
};

export default ListContainer;
