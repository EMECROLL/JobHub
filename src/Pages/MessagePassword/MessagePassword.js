import React from "react";

function MessagePassword () {
    return (
        <>
            <div className='flex justify-center items-center h-screen w-700 h-500 flex-shrink-0 rounded-2xl bg-white mix-blend-hard-light bg-gradient-to-t from-blue-300 via-transparent to-blue-100'>
                <div className='bg-white rounded-lg shadow-md  p-8'>
                    <h1>Te hemos enviado un correo con las instrucciones para restablecer tu contraseña. Por favor, revisa tu bandeja de entrada y spam</h1>
                </div>
            </div>
        </>
    )
}

export default MessagePassword;