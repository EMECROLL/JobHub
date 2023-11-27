import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { BsWhatsapp } from 'react-icons/bs';

function Información() {
  const { id } = useParams();
  const [objectData, setObjectData] = useState({});
  const [map, setMap] = useState(null);
 

  useEffect(() => {
    axios.get(`http://localhost:3001/api/ofertas-laborales/${id}`)
      .then((response) => {
        setObjectData(response.data);
        // Llamamos a initializeMap solo después de recibir los datos
        initializeMap(response.data.empresa);
      })
      .catch((error) => {
        console.error('Error al obtener los detalles del objeto:', error);
      });
  }, [id]);

  useEffect(() => {
    // Limpia la instancia del mapa cuando el componente se desmonta
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [map]);

  const initializeMap = (companyName) => {
    try {
      mapboxgl.accessToken = 'pk.eyJ1IjoicnZpbGxlZ2FzcyIsImEiOiJjbG9yYmJic3UwbzF5MmtsYTJka2c1eXB3In0.SV9Agi8TCgERUtXpUUNf_A';

      // Crea una nueva instancia del mapa
      const newMap = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v8',
        zoom: 3,
        attributionControl: false, 
      });

      setMap(newMap);

      // Utiliza el nombre de la empresa para buscar la ubicación y centrar el mapa
      axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${companyName}.json?access_token=${mapboxgl.accessToken}`)
        .then((response) => {
          if (response.data.features && response.data.features.length > 0) {
            const coordinates = response.data.features[0].geometry.coordinates;
            newMap.setCenter(coordinates);
            newMap.setZoom(12);

            

            // Agrega el geocodificador de Mapbox
            
          } else {
            console.error('No se encontraron datos de ubicación para la empresa.');
          }
        })
        .catch((error) => {
          console.error('Error al obtener la ubicación de la empresa:', error);
        });
    } catch (error) {
      console.error('Error en la inicialización del mapa:', error);
    }
  };

  const num_telefonico = objectData.num_telefonico;
  let numeroSinPrefijo = '';
  if (num_telefonico) {
    const longitudPrefijo = 3;
    numeroSinPrefijo = num_telefonico.slice(longitudPrefijo);
    console.log(numeroSinPrefijo);
  } else {
    console.log('El número telefónico es undefined o null.');
  }

  return (
    <>
      <Header />
      <div className='flex items-center justify-center m-4'>
        <img src={objectData.logo_url} alt={objectData.empresa} className="flex items-center " />
      </div>
      <div className="flex flex-wrap items-center gap-8 p-2 m-12">
        <img src={objectData.imagen_url} alt={objectData.empresa} className="max-w-md" />

        <div>
          <h1 className="text-3xl font-bold">{objectData.empresa}</h1>
          <h2 className="text-xl font-semibold">{objectData.titulo}</h2>
          <p className="text-gray-600 text-lg">{objectData.descripcion}</p>
          <Link to={`https://api.whatsapp.com/send?phone=52${numeroSinPrefijo}&text=Me%20gustaría%20obtener%20más%20información%20sobre%20las%20ofertas%20laborales%20de%20la%20empresa:%20${objectData.empresa}`}>
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full flex items-center">
              <BsWhatsapp className="mr-2" />
              {numeroSinPrefijo}
            </button>
          </Link>
        </div>

        </div>
        {/* Mapa */}
        <div className=' flex justify-center my-4'>
        <div className="w-full max-w-5xl overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div id="map" className="w-full h-56"></div>
        <div className="py-5 text-center">
          <p className="block text-xl font-bold text-gray-800 dark:text-white" tabIndex="0" role="link">{objectData.empresa}</p>
          <span className="text-sm text-gray-700 dark:text-gray-200">Ubicación de la empresa</span>
        </div>
      </div>
      </div>
      
      <Footer />
    </>
  );
}

export default Información;
