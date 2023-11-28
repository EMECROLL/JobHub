import React, { useState, useEffect } from "react";
import Axios from "axios";
import Sidebar from "../../Components/Sidebar/Sidebar";
import HeaderDash from "../../Components/HeaderDash/HeaderDash";
import { FaEdit, FaTrash, FaUserPlus } from "react-icons/fa";
import { ImEyeBlocked } from "react-icons/im";
import { ImEye } from "react-icons/im";

function DashboardUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("1");
  const idUsuario = localStorage.getItem("idUsuario")
  const [currentPage, setCurrentPage] = useState(1); // Estado para mantener el número de página actual
  const [itemsPerPage] = useState(5); // Cantidad de elementos por página, puedes ajustar esto según tu necesidad

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = usuarios.slice(indexOfFirstItem, indexOfLastItem);

  // Nueva función para cambiar de página
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  //* Mensajes de advertencia
  const [correoExistente, setCorreoExistente] = useState(false)
  const [camposVacios, setCamposVacios] = useState(false)
  const [usuarioRegistradoOk, setUsuarioRegistradoOk] = useState(false)
  const [contraseniaInvalida, setContraseniaInvalida] = useState(false)

  //* Mostrar las contraseñas
  const [mostrarContrasenia, setMostrarContrasenia] = useState(false);

  const verContrasenia = () => {
    setMostrarContrasenia(!mostrarContrasenia);
  };

  useEffect(() => {
    mostrarUsuarios();
  }, [currentPage]); // Actualiza la lista de usuarios cada vez que cambia la página actual
  

  const abrirModalAgregar = () => {
    setMostrarModal(true);
    setUsuarioSeleccionado(null);
    limpiarFormulario();
  };

  const abrirModalActualizar = (usuario) => {
    setMostrarModal(true);
    setCorreoExistente(false)
    setUsuarioSeleccionado(usuario);
    setNombre(usuario.nombre);
    setApellido(usuario.apellido);
    setCorreo(usuario.correo);
    setTipoUsuario(String(usuario.tipo_usuario));
  };

  const limpiarFormulario = () => {
    setUsuarioRegistradoOk(false)
    setContraseniaInvalida(false)
    setCamposVacios(false)
    setCorreoExistente(false)
    setNombre("");
    setApellido("");
    setCorreo("");
    setContrasenia("");
    setTipoUsuario("1");
  };

  const enviar = async (e) => {
    e.preventDefault();

    //! Validar no enviar espacios en blanco
    if (!nombre.trim() || !apellido.trim() || !correo.trim() || !contrasenia.trim()) {
      setCamposVacios(true);
      return; //* Detener la función si faltan campos
    }
    
    //! Validar que los campos no estén vacíos
    if (!nombre || !apellido || !correo || !contrasenia) {
      setCamposVacios(true);
      return; //* Detener la función si faltan campos
    }

    //! Validar longitud mínima, mayúscula y símbolo en la contraseña
    const validacionContrasenia = /^(?=.*[A-Z])(?=.*[!@#$%^&?*])(.{8,})$/;

    if (!validacionContrasenia.test(contrasenia)) {
        setContraseniaInvalida(true)
        setCamposVacios(false);
        return;
    }

    try {
        const respuesta = await Axios.post("http://localhost:3001/users", {
            nombre: nombre,
            apellido: apellido,
            correo: correo.toLowerCase(),
            contrasenia: contrasenia,
            tipo_usuario: tipoUsuario,
        });
        console.log(respuesta);
        setCorreoExistente(false);
        setCamposVacios(false);
        setUsuarioRegistradoOk(true);

        setMostrarModal(false);
        limpiarFormulario();
        mostrarUsuarios();
    } catch (error) {
        if (error.response && error.response.status === 409) {
            setCorreoExistente(true);
        } else {
            console.error("Error al agregar usuario:", error);
        }
    }
};


const actualizarUsuario = async (e) => {
  e.preventDefault();

    //! Validar no enviar espacios en blanco
    if (!nombre.trim() || !apellido.trim() || !correo.trim()) {
      setCamposVacios(true);
      return; //* Detener la función si faltan campos
    }
    
    //! Validar que los campos no estén vacíos
    if (!nombre || !apellido || !correo) {
      setCamposVacios(true);
      return; //* Detener la función si faltan campos
    }

    // //! Validar longitud mínima, mayúscula y símbolo en la contraseña
    // const validacionContrasenia = /^(?=.*[A-Z])(?=.*[!@#$%^&?*])(.{8,})$/;

    // if (!validacionContrasenia.test(contrasenia)) {
    //     setContraseniaInvalida(true)
    //     setCamposVacios(false);
    //     return;
    // }
    try {
      const respuesta = await Axios.put(`http://localhost:3001/users/${usuarioSeleccionado.id_usuario}`, {
          nombre: nombre,
          apellido: apellido,
          correo: correo.toLowerCase(),
          contrasenia: contrasenia,
          tipo_usuario: tipoUsuario,
      });

      console.log(respuesta);
      setCorreoExistente(false);
      setCamposVacios(false);
      setUsuarioRegistradoOk(true);

      setMostrarModal(false);
      limpiarFormulario();
      mostrarUsuarios();
  } catch (error) {
      if (error.response && error.response.status === 409) {
          setCorreoExistente(true);
      } else {
          console.error("Error al editar usuario:", error);
      }
  }
};

  const mostrarUsuarios = () => {
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
    try {
      await Axios.delete(`http://localhost:3001/users/${id}`);
      mostrarUsuarios();
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
                <div className="bg-white p-8 rounded-lg shadow-md  w-96">
                  <h2 className="text-2xl mb-4">{usuarioSeleccionado ? "Actualizar Usuario" : "Agregar Usuario"}</h2>
                  <form onSubmit={usuarioSeleccionado ? actualizarUsuario : enviar}>
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
                       <div className="mb-4 flex items-center"> {/* Usa flex para alinear el campo y el botón en la misma fila */}
                       <div className="w-3/4"> {/* Usa w-3/4 para asignar el 75% del ancho para el campo de contraseña */}
                          <label htmlFor="contrasenia" className="block text-sm font-medium text-gray-600">
                            Contraseña
                          </label>
                          <input
                            type={mostrarContrasenia ? 'text' : 'password'}
                            id="contrasenia"
                            name="contrasenia"
                            value={contrasenia}
                            onChange={(e) => setContrasenia(e.target.value)}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            required
                          />
                        </div>
                       <div className="w-1/4"> {/* Usa w-1/4 para asignar el 25% del ancho para el botón */}
                          <button type="button" onClick={verContrasenia} className="mt-2 ml-2 px-3 pt-5 rounded-md">
                            {mostrarContrasenia ? <ImEye /> : <ImEyeBlocked />}
                          </button>
                        </div>
                      </div>
                    )}
                        <div className="w-64">
                          {correoExistente && <p className='text-red-500 text-sm mt-2 py-2'>Correo ya existente</p>}
                          {camposVacios && <p className='text-red-500 text-sm mt-2 py-2'>Todos los campos son obligatorios</p>}
                          {contraseniaInvalida && <p className='text-red-500 text-sm mt-2 py-2'>La contraseña debe tener al menos 8 caracteres, incluir al menos una letra mayúscula y al menos un símbolo</p>}
                          {usuarioRegistradoOk && <p className='text-green-500 text-sm mt-2 py-2'>Usuario registrado correctamente</p>}
                        </div>
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
                {currentItems.map((usuario, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2">{usuario.nombre}</td>
                      <td className="px-4 py-2">{usuario.apellido}</td>
                      <td className="px-4 py-2">{usuario.correo}</td>
                      <td className="px-4 py-2">{usuario.tipo_usuario === 1 ? "Administrador" : usuario.tipo_usuario === 2 ? "Usuario Registrado" : "Usuario de Google"}</td>
                      <td className="px-4 py-2">
                        {
                        (usuario.id_usuario === idUsuario) ? "" : 
                        (usuario.tipo_usuario === 1 && usuario.id_usuario !== idUsuario) ? 
                        <>
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
                        </> : 
                        (usuario.tipo_usuario === 2 && usuario.id_usuario !== idUsuario) ? <>
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
                        </> : <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => eliminarUsuario(usuario.id_usuario)}>
                        <FaTrash className="inline-block mr-1" />
                        Eliminar
                      </button>
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <div className="pagination">
  {usuarios.length > itemsPerPage && (
    <div className="pagination-list flex">
      {Array.from({ length: Math.ceil(usuarios.length / itemsPerPage) }, (_, index) => (
        <div key={index} className="pagination-item">
          <button
            onClick={() => paginate(index + 1)}
            className={`pagination-link items-center px-4 py-2 mx-1 rounded-md ${
              currentPage === index + 1 ? 'bg-gray-500 text-white' : 'text-gray-500 bg-white cursor-pointer'
            }`}
          >
            {index + 1}
          </button>
        </div>
      ))}
    </div>
  )}
</div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardUsuarios;
