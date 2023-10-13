import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  const hover = "hover:bg-gray-800 p-2 rounded-lg";
  return (

    
    <div className="w-full h-[1187px] relative overflow-hidden bg-white">
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
      <p
        className="w-[auto] h-[66px] absolute left-[508px] top-[840px] text-5xl font-semibold text-center text-[#0078AB]"
      >
        ¿Tienes ofertas laborales que ofrecer?
      </p>
      <p
        className="w-[auto] h-[66px] absolute left-[708px] top-[919px] text-5xl font-semibold text-center text-black"
      >
        Publicalas en JOBHUB
      </p>
      <Link to="/SignUp" className={hover}>
      <p
        className="w-[453px] h-[66px] absolute left-[1208px] top-[1003px] text-2xl text-center text-[#2cbcc6]"
      >
        REGISTRAR EMPRESA
      </p>
      </Link>
    </div>
  );
}

export default Home;
