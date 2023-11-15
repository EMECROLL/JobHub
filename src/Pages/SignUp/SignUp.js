import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import LOGO from './logo.png'
import IMAGEN_SIGNUP from './pexels-cottonbro-studio-4069288.jpg'
import { Link } from 'react-router-dom';
import {gapi} from 'gapi-script';
import GoogleLogin from 'react-google-login';

function SignUp() {

  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [correo, setCorreo] = useState("")
  const [contrasenia, setContrasenia] = useState("")
  const [confirmContrasenia, setConfirmContrasenia] = useState("")

  

  const registro = () => {

    //! Validaciones
    if (!nombre || !apellido || !correo || !contrasenia || !confirmContrasenia) {
      console.log('Por favor, complete todos los campos');
      return; //* Detener la función si faltan campos
    }

    if (contrasenia !== confirmContrasenia) {
        setConfirmContrasenia("");
        console.log('Las contraseñas no coinciden');
        return; //* Detener la función si las contraseñas no coinciden
    }
    Axios.post("http://localhost:3001/users", {
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      contrasenia: contrasenia,
    }).then((respuesta) => {
      console.log(respuesta);
      window.location.href = "/login";
    })
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
  
  //* Enviar los datos del usuario a la API para que se registre en la base de datos
  const UsuarioGoogle = res.profileObj;
  Axios.post("http://localhost:3001/users", {
    nombre: UsuarioGoogle.givenName,
    apellido: UsuarioGoogle.familyName,
    correo: UsuarioGoogle.email,
    contrasenia: UsuarioGoogle.googleId,
  })
  .then((respuesta) => {
    console.log(respuesta);
    window.location.href = "/login";
  })
}

const respuestaGoogleError = () => {
  console.log("Ha ocurrido un error");
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
          <div className="mt-2">
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-600">
              Nombre(s):
            </label>
            <input
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
              type="text"
              id="nombre"
              name="nombre"
              className="mt-2 form-input focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 rounded-md px-3 py-2 text-gray-800"
              placeholder="Maynor"
              required
            />
          </div>
          <div className="">
            <label htmlFor="apellido" className="block text-sm font-medium text-gray-600">
              Apellido(s):
            </label>
            <input
              onChange={(e) => setApellido(e.target.value)}
              value={apellido}
              type="text"
              id="apellido"
              name="apellido"
              className="mt-2 form-input focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 rounded-md px-3 py-2 text-gray-800"
              placeholder="Bermón"
              required
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
          <div className="">
            <label htmlFor="correo" className="block text-sm font-medium text-gray-600">
              Correo:
            </label>
            <input
              onChange={(e) => setCorreo(e.target.value)}
              value={correo}
              type="correo"
              id="correo"
              name="correo"
              className="mt-2 form-input focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 rounded-md px-3 py-2 text-gray-800"
              placeholder="correo@ejemplo.com"
              required
            />
          </div>
          <div className="">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Contraseña:
            </label>
            <input
              onChange={(e) => setContrasenia(e.target.value)}
              value={contrasenia}
              type="password"
              id="password"
              name="password"
              className="mt-2 form-input focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 rounded-md px-3 py-2 text-gray-800"
              placeholder="Escribe tu contraseña"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Confirmar contraseña:
            </label>
            <input
              onChange={(e) => setConfirmContrasenia(e.target.value)}
              value={confirmContrasenia}
              type="password"
              id="password"
              name="password"
              className="mt-2 form-input focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 rounded-md px-3 py-2 text-gray-800"
              placeholder="Confirma tu contraseña"
              required
            />
          </div>
            <button onClick={registro} className="mx-16 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">
              Registrarse
            </button>
        </form>
        </div>
        <hr className="my-4 border-t border-gray-300" />
        <div>
        <Link to='/login'>
          <h1 className='mb-4 text-center'>¿Ya tienes cuenta? Inicia sesión</h1>
        </Link>
        </div>
        <div className="mx-14 space-x-4">
        <GoogleLogin
          clientId={clientID}
          buttonText="Registrarse"
          onSuccess={respuestaGoogleOk}
          onFailure={respuestaGoogleError}
          cookiePolicy={'single_host_origin'}
        />
        </div>
      </div>
    </div>
  );
}

export default SignUp;

