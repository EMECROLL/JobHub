import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

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
      <div className="">
      <h1>{objectData.empresa}</h1> 
      <h2>{objectData.titulo}</h2>
      <p>{objectData.descripcion}</p>


       
      </div>
      <Footer />
    </>
  );
}

export default Información;
