import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import LOGO from './logo.png'
import { Link } from 'react-router-dom';
import {gapi} from 'gapi-script';
import GoogleLogin from 'react-google-login';

export default function Login() {

  const [datos, setDatos] = useState({
    correo: '',
    contrasenia: '',
    autenticado: false
});

const URL = "http://localhost:3001/login";

const iniciarSesion = async (e) => {
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
//* ID de cliente de Google Developers
const clientID = "570667986663-rejfonej86qnv1gov31v1rfvohka5ndk.apps.googleusercontent.com"

useEffect(() => {
    //* Inicializar Google API
    const iniciar = () => {
      gapi.auth2.init({
        clientId: clientID,
      })
    }
    gapi.load("client:auth2", iniciar)
}, [])

const respuestaGoogleOk = (res) => {
  console.log(res);

  Axios.post(URL, { correo: res.profileObj.email, contrasenia: res.profileObj.googleId })
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
}

const respuestaGoogleError = () => {
  console.log("Ha ocurrido un error");
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
        <div className="mx-20 space-x-4">
        <GoogleLogin
          clientId={clientID}
          buttonText="Iniciar Sesión"
          onSuccess={respuestaGoogleOk}
          onFailure={respuestaGoogleError}
          cookiePolicy={'single_host_origin'}
        />
        </div>
      </div>
    </div>
  )
}
