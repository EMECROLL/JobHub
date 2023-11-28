import React from 'react';
import ContadorOfertas from '../../Components/contadorOfetas/contadorOfertas';
import Sidebar from "../../Components/Sidebar/Sidebar";
import HeaderDash from "../../Components/HeaderDash/HeaderDash";

function DashboardHome() {
  
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <HeaderDash></HeaderDash>
          <ContadorOfertas/>
        </div>
      </div>
    </>
  );
}

export default DashboardHome;
