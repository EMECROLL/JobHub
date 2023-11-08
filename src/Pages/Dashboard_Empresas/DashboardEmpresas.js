import React, { useState, useEffect } from "react";
import Axios from "axios";
import Sidebar from "../../Components/Sidebar/Sidebar";
import HeaderDash from "../../Components/HeaderDash/HeaderDash";
import { FaEdit, FaTrash, FaUserPlus } from "react-icons/fa";

function DashboardEmpresas() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/users/")
      .then((response) => {
        const usuariosOrdenados = response.data.sort((a, b) => a.tipo_usuario - b.tipo_usuario);
        setUsuarios(usuariosOrdenados);
      })
      .catch((error) => {
        console.error("Error al obtener los usuarios:", error);
      });
  }, []);

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <HeaderDash></HeaderDash>
          <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Gestionar Empresas</h1>
            <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="mb-4">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  // onClick={() => agregarUsuario()}
                >
                  <FaUserPlus className="inline-block mr-1" />
                  Agregar Usuario
                </button>
              </div>

              <h2 className="text-2xl mb-4">Empresas registradas:</h2>
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Nombre</th>
                    <th className="px-4 py-2">Correo Electrónico</th>
                    <th className="px-4 py-2">Tipo de Usuario</th>
                    <th className="px-4 py-2">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {usuarios.map((usuario, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2">{usuario.nombre}</td>
                      <td className="px-4 py-2">{usuario.correo}</td>
                      <td className="px-4 py-2">{usuario.tipo_usuario === 1 ? 'Administrador' : 'Usuario Registrado'}</td>
                      <td className="px-4 py-2">
                      <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                          // onClick={() => actualizarUsuario(usuario.id)}
                        >
                          <FaEdit className="inline-block mr-1" />
                          Actualizar
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                          // onClick={() => eliminarUsuario(usuario.id)}
                        >
                          <FaTrash className="inline-block mr-1" />
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardEmpresas;
