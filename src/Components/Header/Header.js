import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logotipov2.png";

const hover = "hover:bg-gray-800 p-2 rounded-lg";
const texto = "text-white text-2xl";

function Header() {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between ">
      <Link to="/" className={hover}>
        <div>
          <img src={Logo} className="mr-2" width={80} />
        </div>
        </Link>
        <Link to="/" className={hover}>
          <h1 className={texto}>Inicio</h1>
        </Link>
        <Link to="/OfertasLaborales" className={hover}>
          <h1 className={texto}>Ofertas Laborales</h1>
        </Link>
        <Link to="/Nosotros" className={hover}>
          <h1 className={texto}>Nosotros</h1>
        </Link>
        <Link to="/Contacto" className={hover}>
          <h1 className={texto}>Contacto</h1>
        </Link>
        <Link to="/Login" className={hover}>
          <h1 className={texto}>Ingresar</h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
