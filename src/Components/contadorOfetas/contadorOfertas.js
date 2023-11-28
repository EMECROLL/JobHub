import React, { useState, useEffect } from 'react';
import Trabajo from '../../assets/maletin.png'; // Asegúrate de tener la ruta correcta a tu imagen

const ContadorOfertas = () => {
  const [count, setCount] = useState(0); // Estado para almacenar el contador

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/contador');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setCount(data.total);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="inline-flex bg-white rounded-lg shadow-lg">
        <img className="w-32 h-32 object-cover" src={Trabajo} alt="Imagen de oferta laboral" />
        <div className="flex flex-col justify-center ml-4">
          <h2 className="text-xl font-bold mb-2">Total de Ofertas Laborales:</h2>
          <p className="text-3xl font-semibold">{count}</p>
        </div>
      </div>
    </div>
  );
};

export default ContadorOfertas;
