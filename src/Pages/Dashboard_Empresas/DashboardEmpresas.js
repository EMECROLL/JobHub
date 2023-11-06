import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import HeaderDash from "../../Components/HeaderDash/HeaderDash";

function DashboardEmpresas() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <HeaderDash></HeaderDash>
          <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Gestionar Empresas</h1>
            <div className="bg-white p-4 rounded-lg shadow-md">
              Dashboard Empresas
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardEmpresas;