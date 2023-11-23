import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

function Nosotros() {
    return (
        <>
            <Header />
            <body className="container mx-auto my-8">
                <div className="mb-8">
                    <p className='text-6xl p-4 font-semibold'>¿Quienes Somos?</p>
                    <p>En Jobhub, nos definimos por nuestra dedicación a la excelencia y nuestra búsqueda constante de soluciones que marquen la diferencia. Somos una firma que fusiona la creatividad con la última tecnología para ofrecer productos que no solo cumplen, sino que superan las expectativas.</p>
                </div>
                <div className="flex flex-wrap gap-8">
                    <div className="md:w-1/2 bg-gray-100 p-6 rounded-md mb-4">
                        <p className='text-6xl font-semibold mb-4'>Misión</p>
                        <p>En JobHub, nuestra misión es impulsar el potencial de cada negocio y estudiante a través de soluciones tecnológicas innovadoras.
                            Nos dedicamos a proporcionar aplicaciones web de vanguardia que no solo cumplen, sino que superan las expectativas, contribuyendo así al crecimiento y éxito continuo de nuestros clientes y usuarios. Nos esforzamos por ser líderes en la transformación digital, facilitando conexiones significativas y eficientes en el mundo en constante evolución.</p>
                    </div>

                    <div className="md:w-5/12 bg-gray-100 p-6 rounded-md mb-4">
                        <p className='text-6xl font-semibold mb-4'>Visión</p>
                        <p>Nuestra visión en JonHub es ser la principal fuerza impulsora detrás de la revolución digital, transformando la manera en que las empresas y estudiantes interactúan con la tecnología. Nos visualizamos como un centro de innovación, donde cada aplicación que creamos es un catalizador para el progreso y la excelencia. Buscamos inspirar y liderar el camino hacia un futuro digital inclusivo, donde las oportunidades son accesibles para todos, y donde cada usuario experimenta el poder transformador de nuestras soluciones</p>
                    </div>
                </div>
            </body>
            <Footer />
        </>
    );
}

export default Nosotros;