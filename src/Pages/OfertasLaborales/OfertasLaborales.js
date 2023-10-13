import React from 'react';

function OfertasLaborales() {
  // Reemplaza "URL_DEL_CATALOGO" con la URL 
  const catalogUrl = "URL_DEL_CATALOGO";
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ul><a href={catalogUrl} className=" m-8 w-90% bg-[#0A3857] rounded-3xl shadow-md flex flex-row items-center">
        <div className="w-2/3 p-8 text-left">
          <h1 className="text-4xl font-bold text-center mb-16 text-white mt-0">Sector de Tecnologías de la Información (TI)</h1>
          <p className="text-3xl text-white text-center mb-4">
            Información relevante sobre la División de Ingeniería. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="w-1/3 p-8 text-right flex items-center justify-center">
          <img
            src="https://www.pwc.com/bo/es/assets/image/aseguramiento%20de%20calidad.png"
            alt="Imagen de la división"
            className="w-150 h-60 rounded-3xl"
          />
        </div>
      </a>

      <a href={catalogUrl} className=" m-8 w-90% bg-[#0A3857] rounded-3xl shadow-md flex flex-row items-center">
        <div className="w-2/3 p-8 text-left">
          <h1 className="text-4xl font-bold text-center mb-16 text-white mt-0">Sector de Finanzas</h1>
          <p className="text-3xl text-white text-center mb-4">
            Información relevante sobre la División de Finanzas. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="w-1/3 p-8 text-right flex items-center justify-center">
          <img
            src="https://blog.kriter.net/images/images/blog/finanzas_kriter.jpg"
            alt="Imagen de la división"
            className="w-150 h-60 rounded-3xl"
          />
        </div>
      </a>

      <a href={catalogUrl} className="m-8 w-90% bg-[#0A3857] rounded-3xl shadow-md flex flex-row items-center">
        <div className="w-2/3 p-8 text-left">
          <h1 className="text-4xl font-bold text-center mb-16 text-white mt-0">Sector de Medios y entretenimiento</h1>
          <p className="text-3xl text-white text-center mb-4">
            Información relevante sobre la División de Medios y entretenimiento. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="w-1/3 p-8 text-right flex items-center justify-center">
          <img
            src="https://media.istockphoto.com/id/930055472/es/foto/c%C3%A1mara-de-televisi%C3%B3n-en-una-conferencia-de-prensa.jpg?s=612x612&w=0&k=20&c=G2QlV2Aqd5_Ha0dsgwPx2jdI25J_RCk_wTpPuzPDHUs="
            alt="Imagen de la división"
            className="w-150 h-60 rounded-3xl"
          />
        </div>
      </a>

      <a href={catalogUrl} className="m-8 w-90% bg-[#0A3857] rounded-3xl shadow-md flex flex-row items-center">
        <div className="w-2/3 p-8 text-left">
          <h1 className="text-4xl font-bold text-center mb-16 text-white mt-0">Sector de Turismo y Hospitalidad</h1>
          <p className="text-3xl text-white text-center mb-4">
            Información relevante sobre la División de Turismo y Hospitalidad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="w-1/3 p-8 text-right flex items-center justify-center">
          <img
            src="https://blogs.unitec.mx/hubfs/287524/Imported_Blog_Media/la-nueva-hospitalidad-turismo-tras-covid-4-Dec-17-2022-07-02-59-9571-PM.jpg"
            alt="Imagen de la división"
            className="w-150 h-60 rounded-3xl"
          />
        </div>
      </a>
      </ul>
    </div>

    
  );
}

export default OfertasLaborales;
