import React, { useState } from 'react';
import Axios from 'axios';
import {BiLogoFacebook, BiLogoGmail} from 'react-icons/bi'
import LOGO from './logo.png'
import IMAGEN_SIGNUP from './pexels-cottonbro-studio-4069288.jpg'
import { Link } from 'react-router-dom';

function SignUp() {

  const [nombreReg, setNombreReg] = useState("")
  const [apellidoReg, setApellidoReg] = useState("")
  const [correoReg, setCorreoReg] = useState("")
  const [contraseniaReg, setContraseniaReg] = useState("")

  const registro = () => {
    Axios.post("http://localhost:3001/registro", {
      nombre: nombreReg,
      apellido: apellidoReg,
      correo: correoReg,
      contrasenia: contraseniaReg,
    }).then((respuesta) => {
      console.log(respuesta);
    })
  }

  return (
    <div className="flex justify-center items-center h-screen w-700 h-500 flex-shrink-0 rounded-2xl bg-white mix-blend-hard-light bg-gradient-to-t from-blue-300 via-transparent to-blue-100">
      <div className="m-4">
      <div className="w-96 h-500">
        <img src={IMAGEN_SIGNUP} className="w-full h-full rounded-lg shadow-md" alt="Imagen" />
      </div>
      </div>
      <div className="px-6 py-8 bg-white rounded-lg shadow-md">
        <img src={LOGO} className='w-60 h-16'></img>
        <div className='h-500'>
        <form>
          <div className="mb-4 mt-4">
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-600">
              Nombre(s):
            </label>
            <input
              onChange={(e) => setNombreReg(e.target.value)}
              type="text"
              id="nombre"
              name="nombre"
              className="mt-2 form-input focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 rounded-md px-3 py-2 text-gray-800"
              placeholder="Maynor"
            />
          </div>
          <div className="mb-4 mt-4">
            <label htmlFor="apellido" className="block text-sm font-medium text-gray-600">
              Apellido(s):
            </label>
            <input
              onChange={(e) => setApellidoReg(e.target.value)}
              type="text"
              id="apellido"
              name="apellido"
              className="mt-2 form-input focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 rounded-md px-3 py-2 text-gray-800"
              placeholder="Bermón"
            />
          </div>
          {/* <div className="mb-4">
            <label htmlFor="rfc" className="block text-sm font-medium text-gray-600">
              RFC:
            </label>
            <input
              type="text"
              id="rfc"
              name="rfc"
              className="form-input"
              placeholder="Ejemplo: ABCD123456EFG"
            />
          </div> */}
          <div className="mb-4 mt-4">
            <label htmlFor="correo" className="block text-sm font-medium text-gray-600">
              Correo:
            </label>
            <input
              onChange={(e) => setCorreoReg(e.target.value)}
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
              onChange={(e) => setContraseniaReg(e.target.value)}
              type="password"
              id="password"
              name="password"
              className="mt-2 form-input focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 rounded-md px-3 py-2 text-gray-800"
              placeholder="Escribe tu contraseña"
            />
          </div>
          <Link to="/Login">
            <button onClick={registro} className="mx-16 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">
              Registrarse
            </button>
          </Link>
        </form>
        </div>
        <hr className="my-4 border-t border-gray-300" />
        <div>
        <Link to='/login'>
          <h1 className='mb-4 text-center'>¿Ya tienes cuenta? Inicia sesión</h1>
        </Link>
        </div>
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
  );
}

export default SignUp;

