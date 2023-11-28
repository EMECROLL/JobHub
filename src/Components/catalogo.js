import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Catalogo = () => {
  const { categoria } = useParams();
  const [companies, setCompanies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  // Obtener las ofertas laborales filtradas por la categoría
  const filteredCompanies = companies.filter(company => company.tipoVacante === categoria);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCompanies.slice(indexOfFirstItem, indexOfLastItem);

  const loadCompanies = () => {
    axios.get('http://localhost:3001/api/ofertas-laborales')
      .then((response) => {
        setCompanies(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los datos de la API:', error);
      });
  };

  useEffect(() => {
    loadCompanies();
  }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-4 mt-8 mb-64">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {currentItems.map((company, index) => (
          <Link to={`/informacion/${company.id}`} key={company.id}>
            <div className="p-4 bg-blue-100 text-center rounded-lg shadow-md">
              <img src={company.imagen_url} alt={company.empresa} className="mx-auto max-h-48" />
              <p className="text-blue-600 font-semibold mt-2">{company.empresa}</p>
              <p className="text-gray-600 mt-2">{company.titulo}</p>
            </div>
          </Link>
        ))}
        <div className="pagination">
          {filteredCompanies.length > itemsPerPage && (
            <div className="pagination-list flex">
              {Array.from({ length: Math.ceil(filteredCompanies.length / itemsPerPage) }, (_, index) => (
                <div key={index} className="pagination-item">
                  <button onClick={() => paginate(index + 1)} className="pagination-link items-center px-4 py-2 mx-1 text-gray-500 bg-white rounded-md cursor-pointer">
                    {index + 1}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalogo;
