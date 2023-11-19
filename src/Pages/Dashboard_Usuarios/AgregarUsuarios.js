import React from 'react';
import Sidebar from "../../Components/Sidebar/Sidebar";
import HeaderDash from "../../Components/HeaderDash/HeaderDash";

function AgregarUsuarios () {
    return(
        <>
            <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <HeaderDash></HeaderDash>
            <div className='p-4'>
                
            </div>
        </div>
      </div>
        </>
    )
}

export default AgregarUsuarios;