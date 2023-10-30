'use client'

import React, { useState, useEffect } from "react";
import './signup.css';
import Link from "next/link";
import usuarioApi from "../api_fronted/usuarios.js"
import { useRouter } from 'next/navigation';

const SignUp = () => {

  const [usuarios, setUsuarios] = useState([]);
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
  //const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
 



  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Recupera la lista de usuarios del Local Storage y asegúrate de que sea un arreglo
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    const usersList = Array.isArray(storedUsers) ? storedUsers : [];
  
    if (firstName === "" || lastName === "" || username === "" || password === "" || confirmPassword === "" || email === "") {
      alert("Por favor, complete todos los campos.");
    //} else if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
    //  alert("El nombre y apellido deben contener solo letras y espacios.");
    //} else if (!passwordRegex.test(password) || !passwordRegex.test(confirmPassword)) {
     // alert("La contraseña debe tener al menos 5 caracteres, incluyendo una letra, un dígito y un carácter especial.");
    } else if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      setPassword("");
      setConfirmPassword("");
    } else {
      const userId = usersList.length + 1;
      // Crea un nuevo usuario
      const user = {
        
        nombres: firstName,
        apellidos: lastName,

        username: username,
        contrasenia: password,
        email: email,
         // Agregar un array para almacenar las tarjetas asociadas al usuario
      };
      
      try {
        // Realiza la solicitud POST al backend para registrar el nuevo usuario utilizando la función personasApi
        const response = await usuarioApi.create(user);
    
        // Comprueba el resultado de la solicitud
          if (response && response.status === 200) {
              // Registro exitoso, redirige a la página de inicio de sesión
              alert('Registro exitoso!');
              router.push('/Congrats');
          } else {
              // Manejo de errores en caso de que algo salga mal en el backend
              alert('Error al registrar usuario');
          }
      } catch (error) {
        // Manejo de errores en caso de problemas de conexión o errores en el backend
        alert('Error al registrar usuario');
      }
        

      usersList.push(user); // Agrega el nuevo usuario a la lista existente
  
      // Vuelve a almacenar la lista de usuarios en el Local Storage
      localStorage.setItem("users", JSON.stringify(usersList));
      //console.log("Lista de usuarios actualizada:", usersList);
      // Aquí puedes llamar a tu función registrarUsuario si es necesario
      // registrarUsuario(email, password, firstName, lastName, username);
      //window.location.href = `/Congrats?userId=${userId}`;
    }
  };
  
  useEffect(() => {
    // Aquí puedes realizar una solicitud GET al backend para obtener la lista de usuarios registrados
    const handleOnLoad = async () => {
      try{
          const result = await usuarioApi.findAll();
          setUsuarios(result.data);
      } catch (error) {
          console.error('Error al obtener usuarios:', error);
      }
    
    } 
    handleOnLoad();
    }, []);
  

  
  return (
    <div className="register-container">
      <h1>Sign Up for</h1>
      <img src="https://cdn.discordapp.com/attachments/1025977476096204862/1162442035278659604/logo-name.jpeg?ex=653bf382&is=65297e82&hm=530a33fa80ce87770b863c679e0da9e2cfa806c99cfea4f8bf423de6a7ee639f&" alt="" />

      <input
        className="register-input"
        type="text"
        name="firstName"
        placeholder="First Name"
        value={firstName}
        onChange={(event) => {
          if (nameRegex.test(event.target.value)) {
            setFirstName(event.target.value);
          }
        }}
      />

      <input
        className="register-input"
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={lastName}
        onChange={(event) => {
          if (nameRegex.test(event.target.value)) {
            setLastName(event.target.value);
          }
        }}
      />

      <input
        className="register-input"
        type="text"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <input
        className="register-input"
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />

      <input
        className="register-input"
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <input
        className="register-input"
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(event) => {
          setConfirmPassword(event.target.value);
        }}
      />
      <button className="register-button" onClick={handleSubmit}>
        Create your new Account
      </button>
      <hr></hr>

      <Link href="/Login" className="already-button">
        Already have an account?
      </Link>

      <hr></hr>
      <a className="terms">By selecting Create your new Account, you agree to our <a> </a>
        <Link href="./Terms">
          Terms and Conditions
        </Link>
      </a>
    </div>
  );
};

export default SignUp;
