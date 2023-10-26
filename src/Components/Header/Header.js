import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logotipov2.png";

const texto = "hover:bg-gray-800 p-2 rounded-lg text-white text-2xl"
const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 flex flex-col md:flex-row items-center justify-between">
      <nav className="text-center md:text-left md:flex-1">
        <div className="md:flex md:justify-center items-center">
          <ul className="flex flex-col md:flex-row items-center">
            <li className="my-2 md:mx-2">
            <Link to="/">
            <img src={Logo} alt="Logotipo" className="h-40 mr-4" />
          </Link>
            </li>
            <li className="my-2 md:mx-2">
              <Link to="/" className={texto}>
                Inicio
              </Link>
            </li>
            <li className="my-2 md:mx-2">
              <Link to="/OfertasLaborales" className={texto}>
                Ofertas Laborales
              </Link>
            </li>
            <li className="my-2 md:mx-2">
              <Link to="/Nosotros" className={texto}>
                Nosotros
              </Link>
            </li>
            <li className="my-2 md:mx-2">
              <Link to="/Contacto" className={texto}>
                Contacto
              </Link>
            </li>
            <li className="my-2 md:mx-2">
              <Link to="/Login" className={texto}>
                Ingresar
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;