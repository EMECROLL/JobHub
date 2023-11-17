import React, { useState, useEffect } from "react";
import Axios from "axios";
import Sidebar from "../../Components/Sidebar/Sidebar";
import HeaderDash from "../../Components/HeaderDash/HeaderDash";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

function DashboardOfertasLaborales() {
  const [ofertasLaborales, setOfertasLaborales] = useState([]);
  const [ofertaLaboralEdit, setOfertaLaboralEdit] = useState(null);
  const [nuevaOfertaLaboral, setNuevaOfertaLaboral] = useState({
    empresa: "",
    descripcion: "",
    logo_url: "",
    imagen_url: "",
    tipoVacante: "",
    num_telefonico: "",
  });

  useEffect(() => {
    // Obtener todas las ofertas laborales al cargar el componente
    const idUsuario = localStorage.getItem('idUsuario');

    Axios.get(`http://localhost:3001/api/ofertas-laborales-usuario/${idUsuario}`)
      .then((response) => {
        setOfertasLaborales(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las ofertas laborales del usuario:", error);
      });
  }, []);

  const eliminarOfertaLaboral = (id) => {
    Axios.delete(`http://localhost:3001/api/ofertas-laborales/${id}`)
      .then((response) => {
        console.log(response.data);
        const updatedOfertasLaborales = ofertasLaborales.filter((oferta) => oferta.id !== id);
        setOfertasLaborales(updatedOfertasLaborales);
      })
      .catch((error) => {
        console.error("Error al eliminar la oferta laboral:", error);
      });
  };

  const cargarDetallesOfertaLaboral = (id) => {
    Axios.get(`http://localhost:3001/api/ofertas-laborales/${id}`)
      .then((response) => {
        setOfertaLaboralEdit(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los detalles de la oferta laboral:", error);
      });
  };

  const actualizarOfertaLaboral = () => {
    const { id, empresa, descripcion, logo_url, imagen_url, tipoVacante, num_telefonico } = ofertaLaboralEdit;

    Axios.put(`http://localhost:3001/api/ofertas-laborales/${id}`, {
      empresa,
      descripcion,
      logo_url,
      imagen_url,
      tipoVacante,
      num_telefonico,
    })
      .then((response) => {
        console.log(response.data);
        setOfertaLaboralEdit(null);
        const updatedOfertasLaborales = ofertasLaborales.map((oferta) => (oferta.id === id ? response.data : oferta));
        setOfertasLaborales(updatedOfertasLaborales);
      })
      .catch((error) => {
        console.error("Error al actualizar la oferta laboral:", error);
      });
  };

  const agregarOfertaLaboral = () => {
    const { empresa, descripcion, logo_url, imagen_url, tipoVacante, num_telefonico } = nuevaOfertaLaboral;
  
    const data = {
      empresa,
      descripcion, // Asegúrate de que estas propiedades estén incluidas en la solicitud
      logoUrl: logo_url,
      imagenUrl: imagen_url,
      tipoVacante,
      num_telefonico, // Asegúrate de incluir num_telefonico en la solicitud
    };
  
    Axios.post('http://localhost:3001/api/ofertas-laborales', data)
      .then((response) => {
        console.log('Oferta laboral agregada:', response.data);
        setOfertasLaborales([...ofertasLaborales, response.data]);
        setNuevaOfertaLaboral({
          empresa: "",
          descripcion: "",
          logo_url: "",
          imagen_url: "",
          tipoVacante: "",
          num_telefonico: "",
        });
      })
      .catch((error) => {
        console.error('Error al agregar la oferta laboral:', error);
      });
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevaOfertaLaboral({ ...nuevaOfertaLaboral, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarOfertaLaboral();
  };
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <HeaderDash></HeaderDash>
          <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Gestionar Ofertas Laborales</h1>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="mb-4">
                {/* Botón para agregar una nueva oferta laboral */}
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={agregarOfertaLaboral}
                >
                  <FaPlus className="inline-block mr-1" />
                  Agregar Oferta Laboral
                </button>
              </div>
  
              <h2 className="text-2xl mb-4">Ofertas laborales registradas:</h2>
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
                  {ofertasLaborales.map((ofertaLaboral, index) => (
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
                          onClick={() => cargarDetallesOfertaLaboral(ofertaLaboral.id)}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
}

export default DashboardOfertasLaborales;
