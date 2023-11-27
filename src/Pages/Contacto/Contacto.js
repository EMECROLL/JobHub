import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';


function Contacto() {
    const [nombre, setNombre] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [numero, setNumero] = useState("")
    const [email, setEmail] = useState("")
    const [mensajeEnviado,setMensajeEnviado] = useState(false)
    const [camposVacios, setCamposVacios] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();
    
    //! Validaciones
    //! Validar que los campos no estén vacíos
    if (!nombre || !mensaje || !numero || !email) {
        setCamposVacios(true);
        return; //* Detener la función si faltan campos
    }
    //! Validar no campos en blanco
    if (!nombre.trim() || !mensaje.trim() || !numero.trim() || !email.trim()) {
        setCamposVacios(true);
        return; //* Detener la función si faltan campos
    }
    emailjs.sendForm('service_0urlbdi', 'template_jsyaoue', form.current, '9i9ykY91LhDEEdIY2')
        .then((result) => {
            console.log(result.text);
            setNombre("")
            setMensaje("")
            setNumero("")
            setEmail("")
            setMensajeEnviado(true)
        }, (error) => {
            console.log(error.text);
        });
    };
    
    const hover = "hover: p-2 rounded-lg";
    return (
        <>
            <Header />
                <div  id="contenedor principal" className='container mx-auto'>
                    <p className='text-center text-6xl p-4'>Contáctanos</p>
                    <div id="contenedor_form" className='mx-auto text-center bg-indigo-200 rounded-lg overflow-hidden p-4 mb-10 w-1/2'>
                        <p className='font-semibold'>¿Cómo podemos ayudarte?</p>
                        <form ref={form} onSubmit={sendEmail} className='mt-4' >
                            <div className='mb-4'>
                                <p className='mr-80 font-semibold'>Nombre:</p>
                                <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" name="form_name" placeholder="Nombre" className={`${hover} w-96`} required/>
                            </div>
                            <p className='mr-80 font-semibold'>Mensaje:</p>
                            <div className='mb-4'>
                                <textarea
                                    value={mensaje}
                                    onChange={(e) => setMensaje(e.target.value)}
                                    name="form_message"
                                    placeholder="Mensaje"
                                    className={`${hover} h-32 w-96`}
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <p className='mr-60 font-semibold'>Número telefónico:</p>
                                <input onChange={(e) => setNumero(e.target.value)} value={numero} type="text" name="form_numero" placeholder="Numero de teléfono" className={`${hover} w-96`} required/>
                            </div>
                            <div className='mb-4'>
                                <p className='mr-60 font-semibold'>Correo electrónico:</p>
                                <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" name="form_correo" placeholder="Correo electrónico" className={`${hover} w-96`} required/>
                            </div>
                            <div className='py-4'>
                                {mensajeEnviado && <p className='text-indigo-500'>Mensaje enviado correctamente.<br></br> Por favor, revisa tu bandeja de entrada y spam</p>}
                                {camposVacios && <p className='text-red-500 '>Por favor, complete todos los campos</p>}
                            </div>
                            <div>
                                <button type='submit' className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded'>Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            <Footer />
        </>
    );
}

export default Contacto;
