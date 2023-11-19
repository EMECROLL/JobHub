import React, { useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

function ResetPassword({ match }) {
  const [newPassword, setNewPassword] = useState('');
  const { token } = useParams(); // Extracting the token from the URL parameter

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      await Axios.post('http://localhost:3001/reset-password', { token, newPassword });
      alert('Contraseña restablecida exitosamente.');
      console.log('Contraseña restablecida para el token:', token);
    } catch (error) {
      console.error(error);
      alert('Error al restablecer la contraseña.');
    }
  };

  return (
    <>
      <div className='flex justify-center items-center h-screen w-700 h-500 flex-shrink-0 rounded-2xl bg-white mix-blend-hard-light bg-gradient-to-t from-blue-300 via-transparent to-blue-100'>
        <div className='bg-white rounded-lg shadow-md p-8'>
          <h1 className='text-2xl font-semibold mb-6'>Restablecer Contraseña</h1>
          <form onSubmit={handleResetPassword}>
            <div className='mb-4'>
              <label htmlFor='newPassword' className='block text-sm font-medium text-gray-600'>
                Nueva Contraseña:
              </label>
              <input
                type='password'
                id='newPassword'
                name='newPassword'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className='mt-2 form-input focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 rounded-md px-3 py-2 text-gray-800'
                placeholder='Nueva contraseña'
                required
              />
            </div>
            <button
              type='submit'
              className='bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600'
            >
              Restablecer Contraseña
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
