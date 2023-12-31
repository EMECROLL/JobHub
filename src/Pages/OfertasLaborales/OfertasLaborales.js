import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Vcatalgo from '../catalogo/Vcatalgo';
import { Link } from "react-router-dom";

function OfertasLaborales() {
  // Reemplaza "URL_DEL_CATALOGO" con la URL 
  const catalogUrl = "/Vcatalgo"; // Ruta al catálogo

  return (
    <>
    <Header/>
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full">
  <ul>
    {/* Sector de Tecnologías de la Información */}
    <Link to='/Vcatalgo/División de Tecnología' className="m-8 w-auto md:w-4/5 lg:w-3/4 xl:w-auto bg-[#0A3857] rounded-3xl shadow-md flex flex-col md:flex-row items-center">
      <div className="w-full md:w-2/3 p-8 text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mt-0 mb-8">Sector de Tecnologías de la Información (TI)</h1>
        <p className="text-lg md:text-xl text-white text-center mb-4">
          En esta sección, descubrirás una abundancia de emocionantes oportunidades laborales en el campo de Tecnologías de la Información (TI). Explora nuestro catálogo de ofertas laborales y da un paso más cerca hacia una carrera en el mundo de la tecnología.
        </p>
      </div>
      <div className="w-full md:w-1/3 p-8 text-center">
        <img
          src="https://www.pwc.com/bo/es/assets/image/aseguramiento%20de%20calidad.png"
          alt="Imagen de la división"
          className="w-full md:w-4/5 lg:w-3/4 xl:w-full rounded-3xl"
        />
      </div>
    </Link>


        {/* Sector de Finanzas */}
        <Link to='/Vcatalgo/División de Finanzas' className="m-8 w-auto md:w-4/5 lg:w-3/4 xl:w-auto bg-[#0A3857] rounded-3xl shadow-md flex flex-col md:flex-row-reverse items-center">
              <div className="w-2/3 p-8 text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-white mt-0 mb-8">Sector de Finanzas</h1>
                <p className="text-3xl text-white text-center mb-4">
                  Explora esta sección para acceder a una amplia gama de oportunidades laborales en el sector financiero. Desde banca y inversión hasta contabilidad y análisis financiero, aquí encontrarás el camino hacia una carrera sólida en finanzas.
                </p>
              </div>
              <div className="w-full md:w-1/3 p-8 text-center">
                <img
                  src="https://blog.kriter.net/images/images/blog/finanzas_kriter.jpg"
                  alt="Imagen de la división"
                  className="w-full md:w-4/5 lg:w-3/4 xl:w-full rounded-3xl"
                />
              </div>
            </Link>
    
        {/* Sector de Medios y entretenimiento */}
        <Link to='/Vcatalgo/División de Medios' className="m-8 w-auto md:w-4/5 lg:w-3/4 xl:w-auto bg-[#0A3857] rounded-3xl shadow-md flex flex-col md:flex-row items-center">
          <div className="w-2/3 p-8 text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-white mt-0 mb-8">Sector de Medios y entretenimiento</h1>
            <p className="text-3xl text-white text-center mb-4">
            Adéntrate en el emocionante mundo de los medios y el entretenimiento a través de esta sección. Descubre ofertas laborales en la industria del cine, la televisión, la música, la publicidad y mucho más. Tu próximo gran avance en la creatividad te espera aquí.
            </p>
          </div>
           <div className="w-full md:w-1/3 p-8 text-center">
            <img
              src="https://media.istockphoto.com/id/930055472/es/foto/c%C3%A1mara-de-televisi%C3%B3n-en-una-conferencia-de-prensa.jpg?s=612x612&w=0&k=20&c=G2QlV2Aqd5_Ha0dsgwPx2jdI25J_RCk_wTpPuzPDHUs="
              alt="Imagen de la división"
              className="w-full md:w-4/5 lg:w-3/4 xl:w-full rounded-3xl"
            />
          </div>
        </Link>
    
        {/* Sector de Turismo y Hospitalidad */}
        <Link to='/Vcatalgo/División de Turismo' className="m-8 w-auto md:w-4/5 lg:w-3/4 xl:w-auto bg-[#0A3857] rounded-3xl shadow-md flex flex-col md:flex-row-reverse items-center">
              <div className="w-2/3 p-8 text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-center text-white mt-0 mb-8">Sector de Turismo y Hospitalidad</h1>
            <p className="text-3xl text-white text-center mb-4">
            En esta sección, te presentamos un abanico de oportunidades en el sector de la hotelería y el hospedaje. Desde hoteles de lujo hasta complejos turísticos, explora ofertas laborales que te permitirán brindar experiencias excepcionales a los viajeros y huéspedes de todo el mundo.
            </p>
              </div>
              <div className="w-full md:w-1/3 p-8 text-center">
              <img
              src="https://blogs.unitec.mx/hubfs/287524/Imported_Blog_Media/la-nueva-hospitalidad-turismo-tras-covid-4-Dec-17-2022-07-02-59-9571-PM.jpg"
              alt="Imagen de la división"
              className="w-full md:w-4/5 lg:w-3/4 xl:w-full rounded-3xl"
            />
              </div>
            </Link>
      </ul>
    </div>
    </div>
    
    <Footer/>
    </>
  );
}

export default OfertasLaborales;
