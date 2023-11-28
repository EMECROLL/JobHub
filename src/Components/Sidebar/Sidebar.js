import React from "react";
import Logo from "../Sidebar/Logotipov2.png";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
  <div className="bg-[#1C2345] h-screen w-1/6 p-4">
    <Link to="/">
      <img className="max-w-[45%] mx-auto" src={Logo} alt="Logo" />
    </Link>
    <div className="pt-28">
      <ul>
        {localStorage.getItem('tipoUsuario') === "1" ? (
          <>
            <li className="mb-2 ">
              <a href="/dashboardHome" className="block text-white bg-slate-500 hover:bg-blue-500 py-2 px-4 rounded-lg">
                Dashboard Home
              </a>
            </li>
            <li className="mb-2 mt-6">
              <a href="/dashboardUsuarios" className="block text-white bg-slate-500 hover:bg-blue-500 py-2 px-4 rounded-lg">
                Usuarios
              </a>
            </li>
            <li className="mb-2 mt-6">
              <a href="dashboardEmpresas" className="block text-white bg-slate-500 hover:bg-blue-500 py-2 px-4 rounded-lg">
                Empresas
              </a>
            </li>
          </>
        ) : (
          <>
            <li className="mb-2 ">
              <a href="/dashboardHome" className="block text-white bg-slate-500 hover:bg-blue-500 py-2 px-4 rounded-lg">
                Dashboard Home
              </a>
            </li>
            <li className="mb-2 mt-6">
              <a href="/dashboardOfertas" className="block text-white bg-slate-500 hover:bg-blue-500 py-2 px-4 rounded-lg">
                Ofertas Laborales
              </a>
            </li>
          </>
        )}
      </ul>
    </div>
  </div>
</>

  );
}

export default Sidebar;
