import React, { useState } from 'react';
import Axios from 'axios';
import {BiLogoFacebook, BiLogoGmail} from 'react-icons/bi'
import LOGO from './logo.png'
import { Link } from 'react-router-dom';

export default function Login() {

  const [datos, setDatos] = useState({
    correo: '',
    contrasenia: '',
    autenticado: false
});

const URL = "http://localhost:3001/login";

const iniciarSesion= async (e) => {
    e.preventDefault();

    //! Validaciones
    if (!datos.correo || !datos.contrasenia) {
        console.log('Por favor, complete todos los campos');
        return; //* Detener la función si faltan campos
    }

    Axios.post(URL, { correo: datos.correo, contrasenia: datos.contrasenia })
        .then(respuesta => {
            if (respuesta.status === 200) {
                
                //* Guardar la información del usuario en el localStorage
                localStorage.setItem('idUsuario', respuesta.data.id_usuario)
                localStorage.setItem('nombreUsuario', respuesta.data.nombre)
                localStorage.setItem('tipoUsuario', respuesta.data.tipo_usuario)
                localStorage.setItem('estadoUsuario', true)

                setDatos({...datos,autenticado:true})
                window.location.href = "/dashboardHome";
            } else {
                console.log("Credenciales incorrectas");
            }
        })
        .catch(error => {
            if (error.response && error.response.data) {
                //! Si la respuesta del servidor tiene un mensaje de error
                if (error.response.data.message === "Credenciales incorrectas") {
                    console.log(error.response.data.message);
                } else if (error.response.data.message === "El correo no existe en la base de datos") {
                    console.log(error.response.data.message);
                } else {
                    console.log(error.response.data.message);
                }
            } else {
                console.log("Error desconocido:", error);
            }
        });
}

  return (
    <div className="flex justify-center items-center h-screen w-700 h-500 flex-shrink-0 rounded-2xl bg-white mix-blend-hard-light bg-gradient-to-t from-blue-300 via-transparent to-blue-100">
      <div className="px-6 py-8 bg-white rounded-lg shadow-md">
        <img src={LOGO} className='w-60 h-16'></img>
        <div className='h-500'>
        <form>
          <div className="mb-4 mt-4">
            <label htmlFor="correo" className="block text-sm font-medium text-gray-600">
              Correo:
            </label>
            <input
              onChange={(e)=>setDatos({...datos,correo:e.target.value})}
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
              onChange={(e)=>setDatos({...datos,contrasenia:e.target.value})}
              type="password"
              id="password"
              name="password"
              className="mt-2 form-input focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 rounded-md px-3 py-2 text-gray-800"
              placeholder="Escribe tu contraseña"
            />
          </div>
            <button onClick={iniciarSesion} className="mx-16 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">
              Iniciar Sesión
            </button>
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
