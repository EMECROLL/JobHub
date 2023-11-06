import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import HeaderDash from "../../Components/HeaderDash/HeaderDash";

function DashboardHome() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <HeaderDash></HeaderDash>
          <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <div className="bg-white p-4 rounded-lg shadow-md">
              Contenido de la página de inicio.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardHome;
