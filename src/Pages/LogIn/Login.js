import React, { useState } from 'react';
import Axios from 'axios';
import {BiLogoFacebook, BiLogoGmail} from 'react-icons/bi'
import LOGO from './logo.png'
import { Link } from 'react-router-dom';

export default function Login() {

  const [correoLog, setCorreoLog] = useState("")
  const [contraseniaLog, setContraseniaLog] = useState("")

  const [inicioSesionStatus, setInicioSesionStatus] = useState("")

  // const inicioSesion = () => {
  //   Axios.post("http://localhost:3001/inicioSesion", {
  //     correo: correoLog,
  //     contrasenia: contraseniaLog,
  //   }).then((respuesta) => {
      
  //     if(respuesta.data.message){
  //       setInicioSesionStatus(respuesta.data.message)
  //     } else {
  //       setInicioSesionStatus(respuesta.data[0])
  //     }
  //   })
  // }

  function enviar(evento){
    evento.preventDefault();
    Axios.post("http://localhost:3001/inicioSesion", {correoLog,contraseniaLog})
    .then(respuesta => console.log(respuesta))
    .then(window.location.href = "/")
    .catch(error => console.log(error))
  }

  return (
    <div className="flex justify-center items-center h-screen w-700 h-500 flex-shrink-0 rounded-2xl bg-white mix-blend-hard-light bg-gradient-to-t from-blue-300 via-transparent to-blue-100">
      <div className="px-6 py-8 bg-white rounded-lg shadow-md">
        <img src={LOGO} className='w-60 h-16'></img>
        <div className='h-500'>
        <form onSubmit={enviar}>
          <div className="mb-4 mt-4">
            <label htmlFor="correo" className="block text-sm font-medium text-gray-600">
              Correo:
            </label>
            <input
              onChange ={(e) => setCorreoLog(e.target.value)}
              type="correo"
              id="correo"
              name="correo"
              className="mt-2 form-input focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 rounded-md px-3 py-2 text-gray-800"
              placeholder="correo@ejemplo.com"
            />
          </div>
          <div className="mb-4 mt-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Contraseña:
            </label>
            <input
              onChange={(e) => setContraseniaLog(e.target.value)}
              type="password"
              id="password"
              name="password"
              className="mt-2 form-input focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 rounded-md px-3 py-2 text-gray-800"
              placeholder="Escribe tu contraseña"
            />
          </div>
            <button className="mx-16 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">
              Iniciar Sesión
            </button>
          {/* <Link to='/'>
            
          </Link> */}
          <h1 className='text-center color-red'>{inicioSesionStatus}</h1>
        </form>
        </div>
        <hr className="my-4 border-t border-gray-300" />
        <Link to='/signup'>
          <h1 className='mb-4 text-center'>¿No tienes cuenta? Registrate aquí.</h1>
        </Link>
        <div className="mx-16 space-x-4">
          {/* Ícono de Facebook */}
          <a href='https://www.facebook.com/' className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 inline-flex items-center space-x-2">
            <BiLogoFacebook></BiLogoFacebook> 
          </a>
          {/* Ícono de Gmail */}
          <a href="https://mail.google.com" className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 inline-flex items-center space-x-2">
            <BiLogoGmail></BiLogoGmail> 
          </a>
        </div>
      </div>
    </div>
  )
}
