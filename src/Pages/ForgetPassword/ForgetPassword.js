import React, { useState } from 'react';
import Axios from 'axios';

function ForgetPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3001/forgot-password', { email });
    alert('Se ha enviado un correo de recuperación a su correo electrónico.');
    console.log('Enviar correo de recuperación para:', email);
  };

  return (
    <>
      <div className='flex justify-center items-center h-screen w-700 h-500 flex-shrink-0 rounded-2xl bg-white mix-blend-hard-light bg-gradient-to-t from-blue-300 via-transparent to-blue-100'>
        <div className='bg-white rounded-lg shadow-md  p-8'>
          <h1 className='text-2xl font-semibold mb-6'>Recuperar Contraseña</h1>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-sm font-medium text-gray-600'>
                Correo Electrónico:
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='mt-2 form-input focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 rounded-md px-3 py-2 text-gray-800'
                placeholder='correo@ejemplo.com'
                required
              />
            </div>
            <button
              type='submit'
              className='bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600'
            >
              Enviar Correo de Recuperación
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;
