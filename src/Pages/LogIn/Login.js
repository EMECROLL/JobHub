import React from 'react'

export default function Login() {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100 border border-gray-300'>
      <div className=''>
        Imagen
      </div>
      <div className=''>
        Iniciar Sesión
        <form>
          <label>Correo:</label>
          <input type='email'></input>
          <label>Contraseña:</label>
          <input type='password'></input>
        </form>
        <button>Iniciar Sesión</button>
        <hr></hr>
        {/* Registrarse con Facebook y Gmail*/}
        <button>Facebook</button>
        <button>Gmail</button>
      </div>
    </div>
  )
}
