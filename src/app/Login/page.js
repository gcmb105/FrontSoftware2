'use client'

import React, { useState, useEffect } from "react";
import './login.css';
import Link from "next/link";
import UsuariosApi from '../api_fronted/usuarios.js'
import { useRouter } from 'next/navigation';

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usuarios, setUsuarios ] = useState([]);
  const [sesion , setSesion] = useState({});
  /*const ingresarUsuario = (email, password) => {
    // Obtiene la lista de usuarios desde el Local Storage
    const userList = JSON.parse(localStorage.getItem("users")) || [];

    // Busca un usuario con las credenciales ingresadas
    const authenticatedUser = userList.find(user => user.email === email && user.password === password);

    if (authenticatedUser) {
      // Autenticación exitosa
      localStorage.setItem("currentUser", JSON.stringify(authenticatedUser));
      window.location.href = "/";
    } else {
      // Credenciales incorrectas: muestra una notificación
      window.alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
  }*/


  /*const handleSubmit = (event) => {
    event.preventDefault();
    ingresarUsuario(email, password);
  };*/

  const router = useRouter();
  const handleOnLoad = async () => {
    const result = await UsuariosApi.findAll();
    setUsuarios(result.data);
    console.log(usuarios);
  }

  useEffect(() => {
      handleOnLoad();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const sesionU = usuarios.find((e) => e.username == username && e.contrasenia == password );
    if(sesionU){
        localStorage.setItem("userLoggedIn", "true");
        localStorage.setItem('sesion', JSON.stringify(sesionU))
          setSesion(sesionU);
        //localStorage.setItem("userLoggedInID", )
        router.push('/');
        
    }else{
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.")
    }
    
  };

  return (
    <div className="login-container">
      <img src="https://cdn.discordapp.com/attachments/1025977476096204862/1162442034884390962/logo-colored.jpeg?ex=653bf382&is=65297e82&hm=89132243369e55b33a9c51123383eeaa0f1f95e3116481e49d82043faab9a0fc&" alt="" />
      <form onSubmit={handleSubmit}>
        <input className="login-input" type="text" name="email" placeholder="Email" value={username} onChange={(event) => setUsername(event.target.value)} />
        <input className="login-input" type="password" name="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <button className="login-button" type="submit">Sign in</button>
      </form>
      
      <hr></hr>
      <Link href="/ForgotPassword" className="forgotpassword">Forgot password?</Link>
      <hr></hr>
      <button className="create-button">
        <Link href="/Signup" className="create-link">Create a new account</Link>
      </button>
    </div>
  );
};

export default Login;
