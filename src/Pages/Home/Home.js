import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ImagneHome from '../Home/pexels-edmond-dantès-4344860.jpg'
import ImagenContactanos from '../Home/contactanos.jpg'
import ImagenOfertas from '../Home/ofertas.jpg'


function Home() {
  const hover = "hover:bg-gray-800 p-2 rounded-lg";

  return (
    <>
    <Header/>
    <div className="w-full h-[1500px] relative overflow-hidden bg-white">
      <img src={ImagneHome} className="md:w-full xl:w-full absolute hover:shadow-xl active:opacity-75" alt="ImagenHome" />

      <div className="w-full h-[562px] absolute bg-[#0a3857]/[0.47]"/>
    
    <div>
        <div className="w-[869px] h-[208px] absolute left-[550px] top-[332px] rounded-[50px] bg-[#0a3857]/[0.51]" style={{ boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)" }} />
          <p className="w-[453px] h-[66px] absolute left-[760px] top-[340px] text-5xl font-semibold text-center text-white">
            ¿Qué es JobHub?
          </p>
          <p className="w-[830px] h-[92px] absolute left-[580px] top-[408px] text-xl font-bold text-left text-white">
            JobHub es una innovadora plataforma web que conecta a profesionales con emocionantes oportunidades laborales. Nuestra aplicación te brinda acceso a una amplia variedad de ofertas de trabajo en un solo lugar, simplificando tu búsqueda de empleo. 
          </p>
    </div>
      
    <div className="grid grid-cols-1 xl:grid-cols-2  gap-4 xl:gap-10 m-8" style={{ zoom: '100%' }}>
      <div className="text-center relative flex justify-center transition-all  top-[580px]">
            <div className="mx-4">
                <Link to="/Contacto">
                  <img src={ImagenContactanos} className="md:w-[740px] xl:w-[640px] h-[425px] hover:shadow-xl active:opacity-75 rounded-2xl mx-auto" alt="ImagenContactanos" />
                  <h2 className="absolute bottom-2 left-0 right-0 text-white font-bold text-5xl mb-10">
                    Contáctanos
                  </h2>
                  <h3 className="absolute bottom-0 left-0 right-0 text-white text-lg mb-4">
                    ¿Tienes dudas?
                  </h3>
                </Link>
            </div>
      </div>
      <div className="text-center relative flex justify-center transition-all top-[580px]">
            <div className="mx-4">
                <Link to='/OfertasLaborales'>
                  <img src={ImagenOfertas} className='md:w-[740px] xl:w-[640px] h-[425px] hover:shadow-xl active:opacity-75 rounded-2xl mx-auto' alt="Imagen" />
                  <h2 className="absolute bottom-2 left-0 right-0 text-white font-bold text-5xl mb-10">
                    Catálogo
                  </h2>
                  <h3 className="absolute bottom-0 left-0 right-0 text-white text-lg mb-4">
                    Conoce todas las ofertas!
                  </h3>
                </Link>
            </div>
      </div>
    </div>
      
      
      
        <div>
          <p className="w-[auto] h-[66px] absolute left-[408px] top-[1240px] text-5xl font-semibold text-center text-[#0078AB]" >
            ¿Tienes ofertas laborales que ofrecer?
          </p>
          <p className="w-[auto] h-[66px] absolute left-[608px] top-[1319px] text-5xl font-semibold text-center text-black">
            Publicalas en JOBHUB
          </p>
          <Link to="/SignUp" className={hover}>
            <p className="w-[453px] h-[66px] absolute left-[1000px] top-[1335px] text-2xl text-center text-[#2cbcc6]">
              REGISTRAR EMPRESA
            </p>
          </Link>
        </div>
      
      </div>
    
    <Footer/>
    </>
  );
}

export default Home;
