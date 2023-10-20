import React from 'react';
import Catalogo from '../../Components/catalogo';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

function Vcatalgo() {
  return (
    <>
    <Header/>
    <div className="Catalogo">
      <Catalogo />
    </div>
    <Footer/>
    </>
  );
}

export default Vcatalgo;
