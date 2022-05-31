import React from 'react'
import axios from 'axios'
import styles from './login.module.css'

const Login = () => {

const {login,formlogin,formlogin_button} = styles

const handleSubmit = (e) =>{
    e.preventDefault();
    
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    if(email === '' || password === ''){
        console.log('Los campos no pueden estar vacíos');
        return;
    }
    if(email !== '' && !regexEmail.test(email)){
        console.log('El correo electrónico no es válido');
        return;
    }
    if(email !== 'challenge@alkemy.org' || password !== 'react'){
        console.log('Credenciales inválidas');
        return
    }

    console.log('ok para enviar')
    axios
        .post('http://challenge-react.alkemy.org', { email, password })
        .then( resp => {
            console.log(resp.data)
        }) 

}

  return (
    <div className={login}>
        <h2>Log in</h2>
        <form className={formlogin} onSubmit={handleSubmit}>
            <label>
                <span>Correo electrónico</span>
                <input type='email' name='email'/>
            </label>
            <label>
                <span>Contraseña</span>
                <input type='password' name='password' />
            </label>
            <button type='submit' className={formlogin_button}> Ingresar </button>
        </form>
    </div>

  )
}

export default Login