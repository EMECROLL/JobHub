import React, { useState, useEffect } from "react";
import Axios from "axios";
import Sidebar from "../../Components/Sidebar/Sidebar";
import HeaderDash from "../../Components/HeaderDash/HeaderDash";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

function Empresas() {
  const [ofertasLaborales, setOfertasLaborales] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [ofertaLaboralSeleccionada, setOfertaLaboralSeleccionada] = useState(null);
  const [empresa, setEmpresa] = useState("");
  const [descripcionBreve, setDescripcionBreve] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [logo_url, setLogoUrl] = useState("");
  const [imagen_url, setImagenUrl] = useState("");
  const [tipoVacante, setTipoVacante] = useState("");
  const [num_telefonico, setNumTelefonico] = useState("");
  const [numInvalido, setNumInvalido] = useState(false)
  const [camposVacios, setCamposVacios] = useState(false)

  const [currentPage, setCurrentPage] = useState(1); // Estado para mantener el número de página actual
  const [itemsPerPage] = useState(3); // Cantidad de elementos por página, puedes ajustar esto según tu necesidad

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ofertasLaborales.slice(indexOfFirstItem, indexOfLastItem);

  // Nueva función para cambiar de página
  const paginate = pageNumber => setCurrentPage(pageNumber);
  useEffect(() => {
    actualizarOfertasLaborales();
  }, []);

  useEffect(() => {
    actualizarOfertasLaborales();
  }, []);

  const abrirModalAgregar = () => {
    setMostrarModal(true);
    setOfertaLaboralSeleccionada(null);
    limpiarFormulario();
  };

  const validarNumeroTelefonico = async (numero) => {
    const apiKey = 'CMy86c/cPLW1Y+PwvQkMLA==S6yCYBs7QK2W0oKB';
    const url = `https://api.api-ninjas.com/v1/validatephone?number=${numero}`;
  
    try {
      const response = await Axios.get(url, {
        headers: {
          'X-Api-Key': apiKey,
        },
      });
  
      if (response.data.is_valid && response.data.country === 'Mexico') {
        return true;
      } else {
        setNumInvalido(true);
        return false;
      }
    } catch (error) {
      console.error('Error al validar el número telefónico:', error);
      return false;
    }
  };  

  const actualizarOfertasLaborales = () => {
    Axios.get(`http://localhost:3001/api/ofertas-laborales/`)
      .then((response) => {
        // Ordenar las ofertas por tipo de vacante antes de actualizar el estado
        const ofertasOrdenadas = response.data.sort((a, b) => {
          // Puedes ajustar la lógica de comparación según tus necesidades
          return a.tipoVacante.localeCompare(b.tipoVacante);
        });

        setOfertasLaborales(ofertasOrdenadas);
      })
      .catch((error) => {
        console.error("Error al obtener las ofertas laborales:", error);
      });
  };

  const abrirModalActualizar = (ofertaLaboral) => {
    setMostrarModal(true);
    setOfertaLaboralSeleccionada(ofertaLaboral);
    setEmpresa(ofertaLaboral.empresa);
    setDescripcion(ofertaLaboral.descripcion);
    setLogoUrl(ofertaLaboral.logo_url);
    setImagenUrl(ofertaLaboral.imagen_url);
    setTipoVacante(ofertaLaboral.tipoVacante);
    setNumTelefonico(ofertaLaboral.num_telefonico);
  };

  const limpiarFormulario = () => {
    setEmpresa("");
    setDescripcion("");
    setLogoUrl("");
    setImagenUrl("");
    setTipoVacante("");
    setNumTelefonico("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //! Validaciones
    //! Validar que los campos no estén vacíos
    if(!descripcionBreve ||!empresa || !descripcion || !logo_url || !imagen_url || !tipoVacante || !num_telefonico){
      setCamposVacios(true)
      return
    }

    //! Validar que no hay campos en blanco
    if(!descripcionBreve.trim() || !empresa.trim() || !descripcion.trim() || !logo_url.trim() || !imagen_url.trim() || !tipoVacante.trim() || !num_telefonico.trim()){
      setCamposVacios(true)
      return
    }

    //! Validar el número telefónico antes de continuar
    const esNumeroMexicano = await validarNumeroTelefonico(num_telefonico);
  
    if (!esNumeroMexicano) {
      return;
    }
  
    try {
      await Axios.post(`http://localhost:3001/api/ofertas-laborales/`, {
        titulo: descripcionBreve,
        empresa: empresa,
        descripcion: descripcion,
        logoUrl: logo_url,
        imagenUrl: imagen_url,
        tipoVacante: tipoVacante,
        num_telefonico: num_telefonico,
      });
  
      setMostrarModal(false);
      limpiarFormulario();
      actualizarOfertasLaborales();
    } catch (error) {
      console.error("Error al agregar oferta laboral:", error);
    }
  };
  

  const handleActualizarOfertaLaboral = async (e) => {
    e.preventDefault();

    //! Validaciones
    //! Validar que los campos no estén vacíos
    if(!empresa || !descripcion || !logo_url || !imagen_url || !tipoVacante || !num_telefonico){
      setCamposVacios(true)
      return
    }

    //! Validar que no hay campos en blanco
    if(!empresa.trim() || !descripcion.trim() || !logo_url.trim() || !imagen_url.trim() || !tipoVacante.trim() || !num_telefonico.trim()){
      setCamposVacios(true)
      return
    }

    //! Validar el número telefónico antes de continuar
    const esNumeroMexicano = await validarNumeroTelefonico(num_telefonico);
  
    if (!esNumeroMexicano) {
      return;
    }
  
    try {
      await Axios.put(`http://localhost:3001/api/ofertas-laborales/${ofertaLaboralSeleccionada.id}`, {
        titulo: descripcionBreve,
        empresa: empresa,
        descripcion: descripcion,
        logoUrl: logo_url,
        imagenUrl: imagen_url,
        tipoVacante: tipoVacante,
        num_telefonico: num_telefonico,
      });
  
      setMostrarModal(false);
      limpiarFormulario();
      actualizarOfertasLaborales();
    } catch (error) {
      console.error("Error al agregar oferta laboral:", error);
    }
  };
  
  

  const eliminarOfertaLaboral = async (id) => {
    try {
      await Axios.delete(`http://localhost:3001/api/ofertas-laborales/${id}`);
      actualizarOfertasLaborales();
    } catch (error) {
      console.error("Error al eliminar oferta laboral:", error);
    }
  };

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <HeaderDash />
          <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Gestionar Empresas</h1>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="mb-4">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={abrirModalAgregar}
                >
                  <FaPlus className="inline-block mr-1" />
                  Agregar Empresa
                </button>
              </div>
  
              {mostrarModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl mb-4">{ofertaLaboralSeleccionada ? "Actualizar Oferta Laboral" : "Agregar Oferta Laboral"}</h2>
                    <form onSubmit={ofertaLaboralSeleccionada ? handleActualizarOfertaLaboral : handleSubmit}>
                      <div className="mb-4">
                        <label htmlFor="empresa" className="block text-sm font-medium text-gray-600">
                          Empresa
                        </label>
                        <input
                          type="text"
                          id="empresa"
                          name="empresa"
                          value={empresa}
                          onChange={(e) => setEmpresa(e.target.value)}
                          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="descripcion" className="block text-sm font-medium text-gray-600">
                          Ocupación
                        </label>
                        <textarea
                          id="descripcion"
                          name="descripcion"
                          value={descripcionBreve}
                          onChange={(e) => setDescripcionBreve(e.target.value)}
                          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="descripcion" className="block text-sm font-medium text-gray-600">
                          Descripción
                        </label>
                        <textarea
                          id="descripcion"
                          name="descripcion"
                          value={descripcion}
                          onChange={(e) => setDescripcion(e.target.value)}
                          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="logo_url" className="block text-sm font-medium text-gray-600">
                          URL del Logo
                        </label>
                        <input
                          type="text"
                          id="logo_url"
                          name="logo_url"
                          value={logo_url}
                          onChange={(e) => setLogoUrl(e.target.value)}
                          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="imagen_url" className="block text-sm font-medium text-gray-600">
                          URL de la Imagen
                        </label>
                        <input
                          type="text"
                          id="imagen_url"
                          name="imagen_url"
                          value={imagen_url}
                          onChange={(e) => setImagenUrl(e.target.value)}
                          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                          required
                        />
                      </div>
                      <div className="mb-4">
                      <label htmlFor="tipoVacante" className="block text-sm font-medium text-gray-600">
                        Tipo de Vacante
                      </label>
                      <select
                        id="tipoVacante"
                        name="tipoVacante"
                        value={tipoVacante}
                        onChange={(e) => setTipoVacante(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="División de Tecnología">División de Tecnología</option>
                        <option value="División de Turismo">División de Turismo</option>
                        <option value="División de Medios">División de Medios</option>
                        <option value="División de Finanzas">División de Finanzas</option>
                      </select>
                    </div>

                      <div className="mb-4">
                        <label htmlFor="num_telefonico" className="block text-sm font-medium text-gray-600">
                          Número Telefónico
                        </label>
                        <input
                          type="text"
                          id="num_telefonico"
                          name="num_telefonico"
                          value={num_telefonico}
                          onChange={(e) => setNumTelefonico(e.target.value)}
                          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                          required
                        />
                      </div>
                      {/* //* Mensajes de advertencia */}
                        <div className='w-64'>
                          {numInvalido && <p className='text-red-500 text-sm mt-2 py-2'>El número no es de lada mexicana (+52)</p>}
                          {camposVacios && <p className='text-red-500 text-sm mt-2 py-2'>Por favor complete todos los campos</p>}
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
                          {ofertaLaboralSeleccionada ? "Actualizar" : "Agregar"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
  
              <h2 className="text-2xl mb-4">Empresas registradas:</h2>
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Empresa</th>
                    <th className="px-4 py-2">Descripción</th>
                    <th className="px-4 py-2">Logo</th>
                    <th className="px-4 py-2">Imagen</th>
                    <th className="px-4 py-2">Tipo de Vacante</th>
                    <th className="px-4 py-2">Número Telefónico</th>
                    <th className="px-4 py-2">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                {currentItems.map((ofertaLaboral, index)=> (
                    <tr key={index}>
                      <td className="px-4 py-2">{ofertaLaboral.empresa}</td>
                      <td className="px-4 py-2">{ofertaLaboral.descripcion}</td>
                      <td className="px-4 py-2">
                        <img src={ofertaLaboral.logo_url} alt="Logo" className="w-12 h-12" />
                      </td>
                      <td className="px-4 py-2">
                        <img src={ofertaLaboral.imagen_url} alt="Imagen" className="w-12 h-12" />
                      </td>
                      <td className="px-4 py-2">{ofertaLaboral.tipoVacante}</td>
                      <td className="px-4 py-2">{ofertaLaboral.num_telefonico}</td>
                      <td className="px-4 py-2">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                          onClick={() => abrirModalActualizar(ofertaLaboral)}
                        >
                          <FaEdit className="inline-block mr-1" />
                          Actualizar
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => eliminarOfertaLaboral(ofertaLaboral.id)}
                        >
                          <FaTrash className="inline-block mr-1" />
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="pagination">
              
              {ofertasLaborales.length > itemsPerPage && (
                <div className="pagination-list flex">
                  {Array.from({ length: Math.ceil(ofertasLaborales.length / itemsPerPage) }, (_, index) => (
                    <div key={index} className="pagination-item">
                      <button onClick={() => paginate(index + 1)} className="pagination-link items-center px-4 py-2 mx-1 text-gray-500 bg-white rounded-md cursor-not-allowed">
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

export default Empresas;