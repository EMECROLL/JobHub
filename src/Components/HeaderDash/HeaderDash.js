import React from 'react'
import { ImExit } from 'react-icons/im'
import { Link } from 'react-router-dom'

function HeaderDash () {

    const cerrarSesion = () => {
    
        //? Borra los datos del usuario al presionar el botón de la puerta
        localStorage.clear();
    
        //? Ir a la página principal
        window.location.href="/";
    };
    return (
        <>
            <header className="bg-blue-500 p-4 flex justify-end">
                <button onClick={cerrarSesion} className='text-white px-4 py-2 rounded-lg text-4xl font-extrabold'><ImExit></ImExit></button>
            </header>
        </>
    )
}

export default HeaderDash;
