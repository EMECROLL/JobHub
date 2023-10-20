import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';


function Home() {
  const hover = "hover:bg-gray-800 p-2 rounded-lg";

  return (
    <>
    <Header/>
    <div className="w-full h-[1687px] relative overflow-hidden bg-white">
      <img
        src="https://factorial.mx/wp-content/uploads/2023/02/03121201/reuniones-de-trabajo.jpg"
        className="md:w-full xl:w-full h-[640px] absolute hover:shadow-xl active:opacity-75"
        alt="Imagen"
      />
      <div className="w-full h-[640px] absolute bg-[#0a3857]/[0.47]" />

      <div
        className="w-[869px] h-[200px] absolute left-[685px] top-[332px] rounded-[50px] bg-[#0a3857]/[0.51]"
        style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }}
      />
      <p
        className="w-[830px] h-[92px] absolute left-[715px] top-[426px] text-xl font-bold text-left text-white"
      >
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
      </p>
      <p className="w-[453px] h-[66px] absolute left-[904px] top-[340px] text-5xl font-semibold text-center text-white"
      >
        ¿Qué es JOBHUB?
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-2  gap-4 xl:gap-10 m-8" style={{ zoom: '100%' }}>
    <div className="text-center relative flex justify-center transition-all top-[740px]">
              <div className="mx-4">
                <img src="https://apliklo.com/wp-content/uploads/2019/05/Cont%C3%A1ctanos.jpg" className="md:w-[740px] xl:w-[640px] h-[425px] hover:shadow-xl active:opacity-75 rounded-2xl mx-auto" alt="Imagen" />
              </div>
              <h2 className="absolute bottom-2 left-0 right-0 text-white font-bold text-5xl mb-10">
                Contactanos
              </h2>
              <h3 className="absolute bottom-0 left-0 right-0 text-white text-lg mb-4">
                ¿Tienes dudas?
              </h3>
            </div>
    <div className="text-center relative flex justify-center transition-all top-[740px]">
              <div className="mx-4">
                <img src="https://blog.interfell.com/hubfs/como%20crear%20un%20equipo%20de%20trabajo%20fuerte%20y%20estable.jpg" className='md:w-[740px] xl:w-[640px] h-[425px] hover:shadow-xl active:opacity-75 rounded-2xl mx-auto' alt="Imagen" />
              </div>
              <h2 className="absolute bottom-2 left-0 right-0 text-white font-bold text-5xl mb-10">
                Catálogo
              </h2>
              <h3 className="absolute bottom-0 left-0 right-0 text-white text-lg mb-4">
                Conoce todas las ofertas!
              </h3>
            </div>
            </div>
      <p
        className="w-[auto] h-[66px] absolute left-[508px] top-[1340px] text-5xl font-semibold text-center text-[#0078AB]"
      >
        ¿Tienes ofertas laborales que ofrecer?
      </p>
      <p
        className="w-[auto] h-[66px] absolute left-[708px] top-[1419px] text-5xl font-semibold text-center text-black"
      >
        Publicalas en JOBHUB
      </p>
      <Link to="/SignUp" className={hover}>
      <p
        className="w-[453px] h-[66px] absolute left-[1208px] top-[1503px] text-2xl text-center text-[#2cbcc6]"
      >
        REGISTRAR EMPRESA
      </p>
      </Link>
    </div>
    
    <Footer/>
    </>
  );
}

export default Home;
