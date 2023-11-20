import React, { useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal';

function ResetPassword() {
    const { token } = useParams();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [error, setError] = useState(null);

    const estilosModal = {
        content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
        },
    };

    const restablecerContra = async (e) => {
        e.preventDefault();

        //! Validaciones
        //! Validar que los campos no estén vacíos
        if (!newPassword || !confirmPassword) {
            setError('Por favor, completa todos los campos.');
        return;
        }

        //! Validar que las contraseñas coincidan
        if (newPassword !== confirmPassword) {
            setConfirmPassword("")
            setError('Las contraseñas no coinciden.');
        return;
        }

        try {
            await Axios.post('http://localhost:3001/reset-password', { token, newPassword });
            setModalIsOpen(true);
            // console.log('Contraseña restablecida para el token:', token);
        } catch (error) {
            console.error(error);
            setModalIsOpen(true);
        }
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setError(null);
        window.location.href = '/login';
    };

  return (
    <>
      <div className='flex justify-center items-center h-screen w-700 h-500 flex-shrink-0 rounded-2xl bg-white mix-blend-hard-light bg-gradient-to-t from-blue-300 via-transparent to-blue-100'>
        <div className='bg-white rounded-lg shadow-md p-8'>
          <h1 className='text-2xl font-semibold mb-6'>Restablecer Contraseña</h1>
          <form onSubmit={restablecerContra}>
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
            <div className='mb-4'>
              <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-600'>
                Confirmar Contraseña:
              </label>
              <input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='mt-2 form-input focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 rounded-md px-3 py-2 text-gray-800'
                placeholder='Confirmar contraseña'
                required
              />
            </div>
            {error && <p className='text-red-500'>{error}</p>}
            <button
              type='submit'
              className='bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600'
            >
              Restablecer Contraseña
            </button>
          </form>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Contraseña Restablecida'
        style={estilosModal}  // Apply the custom styles
      >
        <div className='modal-content p-8 bg-white rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold mb-4'>Contraseña Restablecida Exitosamente</h2>
          <button
            onClick={closeModal}
            className='bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600'
          >
            Cerrar
          </button>
        </div>
      </Modal>
    </>
  );
}

export default ResetPassword;
