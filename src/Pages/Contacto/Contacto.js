import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';


function Contacto() {
    
    const hover = "hover: p-2 rounded-lg";
    return (
        <>
            <Header />
                <div id="contenedor principal" className='container mx-auto'>
                    <p className='text-center text-6xl p-4'>Contáctanos</p>
                    <div id="contenedor_form" className='mx-auto text-center bg-indigo-200 rounded-lg overflow-hidden p-4 mb-10 w-1/2'>
                        <p className='font-semibold'>¿Cómo podemos ayudarte?</p>
                        <form className='mt-4' id="formulario_contacto" method="POST">
                            <div className='mb-4'>
                                <p className='mr-80 font-semibold'>Nombre:</p>
                                <input type="text" name="nombre" id="formulario_nombre" placeholder="Nombre" className={`${hover} w-96`} />
                            </div>
                            <p className='mr-80 font-semibold'>Mensaje:</p>
                            <div className='mb-4'>
                                <textarea
                                    name="mensaje"
                                    id="formulario_mensaje"
                                    placeholder="Mensaje"
                                    className={`${hover} h-32 w-96`}
                                />
                            </div>
                            <div className='mb-4'>
                                <p className='mr-60 font-semibold'>Número telefónico:</p>
                                <input type="text" name="telefono" id="formulario_telefono" placeholder="Numero de teléfono" className={`${hover} w-96`} />
                            </div>
                            <div className='mb-4'>
                                <p className='mr-60 font-semibold'>Correo electrónico:</p>
                                <input type="text" name="correo" id="formulario_correo" placeholder="Correo electrónico" className={`${hover} w-96`} />
                            </div>
                            <div>
                                <button type="button" id="formulario_enviar" className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded'>Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            <Footer />
        </>
    );
}
// http://localhost:3001/verformulario
// http://localhost:3001/enviarformulario
document.addEventListener("DOMContentLoaded", function () {
    const enviarFormularioBtn = document.getElementById("formulario_enviar");
    

    enviarFormularioBtn.addEventListener("click", function () {

        const nombre = document.getElementById("formulario_nombre").value;
        const mensaje = document.getElementById("formulario_mensaje").value;
        const numero = document.getElementById("formulario_telefono").value;
        const correo = document.getElementById("formulario_correo").value;

        const data = {
            FormNombre: nombre,
            FormMensaje: mensaje,
            FormNumero: numero,
            FormCorreo: correo
        };
          console.log(document.getElementById("formulario_enviar"));
        fetch('http://localhost:3001/anadirformulario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(result => {
                console.log('funciona esta cosa, se envio a la base de datos', result);
            })
            .catch(error => console.log('Error al enviar formulario', error));
    });
});



export default Contacto;
