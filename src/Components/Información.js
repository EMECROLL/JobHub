import React, { useState, useEffect } from 'react';
import { useParams, Link} from 'react-router-dom';
import axios from 'axios';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { BsWhatsapp } from 'react-icons/bs'; 

function Información() {
  const { id } = useParams();
  const [objectData, setObjectData] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/api/ofertas-laborales/${id}`)
      .then((response) => {
        console.log(response.data);
        setObjectData(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los detalles del objeto:', error);
      });
  }, [id]);

  return (
    <>
      <Header />
      <div className="flex flex-wrap items-center gap-8 pt-16 mb-64 ml-16">
  <img src={objectData.imagen_url} alt={objectData.empresa} className="max-w-md" />

  <div>
    <h1 className="text-3xl font-bold">{objectData.empresa}</h1>
    <h2 className="text-xl font-semibold">{objectData.titulo}</h2>
    <p className="text-gray-600 text-lg">{objectData.descripcion}</p>

    <Link to={`https://api.whatsapp.com/send?phone=52${objectData.num_telefonico}&text=Me%20gustaría%20obtener%20más%20información%20sobre%20las%20ofertas%20laborales%20de%20la%20empresa:%20${objectData.empresa}`}>
      <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full flex items-center">
        <BsWhatsapp className="mr-2" />
        {objectData.num_telefonico}
      </button>
    </Link>
  </div>
</div>
      <Footer />
    </>
  );
}

export default Información;
