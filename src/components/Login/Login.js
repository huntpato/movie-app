import React from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import swAlert from '@sweetalert/with-react';
import styles from './login.module.css';

const Login = () => {
  const { login, formlogin, formlogin_button } = styles;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === '' || password === '') {
      swAlert(<h5>Los campos no pueden estar vacíos</h5>);
      return;
    }
    if (email !== '' && !regexEmail.test(email)) {
      swAlert(<h5>El correo electrónico no es válido</h5>);
      return;
    }
    if (email !== 'challenge@alkemy.org' || password !== 'react') {
      swAlert(<h5>Credenciales inválidas</h5>);
      return;
    }

    axios
      .post('http://challenge-react.alkemy.org', { email, password })
      .then((resp) => {
        swAlert(<h4>Bienvenido</h4>);
        const token = resp.data.token;
        localStorage.setItem('token', token);
        navigate('/list');
      });
  };

  let token = localStorage.getItem('token');

  return (
    <>
      {token ? (
        <Navigate to="/list" />
      ) : (
        <div className={login}>
          <h2>Log in</h2>
          <form className={formlogin} onSubmit={handleSubmit}>
            <label>
              <span>Correo electrónico</span>
              <input type="email" name="email" />
            </label>
            <label>
              <span>Contraseña</span>
              <input type="password" name="password" />
            </label>
            <button type="submit" className={formlogin_button}>
              Ingresar
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
