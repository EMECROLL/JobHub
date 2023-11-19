import React, { useState, useEffect } from "react";
import Axios from "axios";
import Sidebar from "../../Components/Sidebar/Sidebar";
import HeaderDash from "../../Components/HeaderDash/HeaderDash";
import { FaEdit, FaTrash, FaUserPlus } from "react-icons/fa";

function DashboardUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("1");

  useEffect(() => {
    actualizarUsuarios();
  }, []);

  const abrirModalAgregar = () => {
    setMostrarModal(true);
    setUsuarioSeleccionado(null);
    limpiarFormulario();
  };

  const abrirModalActualizar = (usuario) => {
    setMostrarModal(true);
    setUsuarioSeleccionado(usuario);
    setNombre(usuario.nombre);
    setApellido(usuario.apellido);
    setCorreo(usuario.correo);
    setTipoUsuario(String(usuario.tipo_usuario));
  };

  const limpiarFormulario = () => {
    setNombre("");
    setApellido("");
    setCorreo("");
    setContrasenia("");
    setTipoUsuario("1");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await Axios.post("http://localhost:3001/users", {
        nombre: nombre,
        apellido: apellido,
        correo: correo.toLowerCase(),
        contrasenia: contrasenia,
        tipo_usuario: tipoUsuario,
      });

      setMostrarModal(false);
      limpiarFormulario();
      actualizarUsuarios();
    } catch (error) {
      console.error("Error al agregar usuario:", error);
    }
  };

  const handleActualizarUsuario = async () => {
    try {
      await Axios.put(`http://localhost:3001/users/${usuarioSeleccionado.id_usuario}`, {
        nombre: nombre,
        apellido: apellido,
        correo: correo.toLowerCase(),
        contrasenia: contrasenia,
        tipo_usuario: tipoUsuario,
      });

      setMostrarModal(false);
      limpiarFormulario();
      actualizarUsuarios();
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
    }
  };

  const actualizarUsuarios = () => {
    Axios.get("http://localhost:3001/users/")
      .then((response) => {
        const usuariosOrdenados = response.data.sort((a, b) => a.tipo_usuario - b.tipo_usuario);
        setUsuarios(usuariosOrdenados);
      })
      .catch((error) => {
        console.error("Error al obtener los usuarios:", error);
      });
  };

  const eliminarUsuario = async (id) => {
    try {// Añade esta línea para depuración
      await Axios.delete(`http://localhost:3001/users/${id}`);
      actualizarUsuarios();
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  };

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <HeaderDash />
          <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Gestionar Usuarios Registrados</h1>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="mb-4">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={abrirModalAgregar}
                >
                  <FaUserPlus className="inline-block mr-1" />
                  Agregar Usuario
                </button>
              </div>

              {/* Modal */}
              {mostrarModal && (
              <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl mb-4">{usuarioSeleccionado ? "Actualizar Usuario" : "Agregar Usuario"}</h2>
                  <form onSubmit={usuarioSeleccionado ? handleActualizarUsuario : handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="tipoUsuario" className="block text-sm font-medium text-gray-600">
                        Tipo de Usuario
                      </label>
                      <select
                        id="tipoUsuario"
                        name="tipoUsuario"
                        value={tipoUsuario}
                        onChange={(e) => setTipoUsuario(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                      >
                        <option value="1">Administrador</option>
                        <option value="2">Usuario Registrado</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-600">
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="apellido" className="block text-sm font-medium text-gray-600">
                        Apellido
                      </label>
                      <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="correo" className="block text-sm font-medium text-gray-600">
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                      />
                    </div>
                    {tipoUsuario === "1" && ( // Mostrar el campo de contraseña solo si el usuario es administrador
                      <div className="mb-4">
                        <label htmlFor="contrasenia" className="block text-sm font-medium text-gray-600">
                          Contraseña
                        </label>
                        <input
                          type="password"
                          id="contrasenia"
                          name="contrasenia"
                          value={contrasenia}
                          onChange={(e) => setContrasenia(e.target.value)}
                          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                          required
                        />
                      </div>
                    )}
                        <div className="flex justify-end">
                        <button
                          type="button"
                          className="mr-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => {
                            setMostrarModal(false);
                            limpiarFormulario();
                          }}
                        >
                          Cancelar
                        </button>
                        <button
                          type="submit"
                          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        >
                          {usuarioSeleccionado ? "Actualizar" : "Agregar"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              <h2 className="text-2xl mb-4">Usuarios registrados:</h2>
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Nombre</th>
                    <th className="px-4 py-2">Apellido</th>
                    <th className="px-4 py-2">Correo Electrónico</th>
                    <th className="px-4 py-2">Tipo de Usuario</th>
                    <th className="px-4 py-2">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {usuarios.map((usuario, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2">{usuario.nombre}</td>
                      <td className="px-4 py-2">{usuario.apellido}</td>
                      <td className="px-4 py-2">{usuario.correo}</td>
                      <td className="px-4 py-2">{usuario.tipo_usuario === 1 ? "Administrador" : "Usuario Registrado"}</td>
                      <td className="px-4 py-2">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                          onClick={() => abrirModalActualizar(usuario)}
                        >
                          <FaEdit className="inline-block mr-1" />
                          Actualizar
                        </button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => eliminarUsuario(usuario.id_usuario)}>
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

export default DashboardUsuarios;
