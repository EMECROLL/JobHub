import React, { useState } from 'react';

const AddCompanyForm = ({ onAddCompany, onCancel }) => {
  const [empresa, setEmpresa] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [imagenUrl, setImagenUrl] = useState('');
  const [tipoVacante, setTipoVacante] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaEmpresa = {
      empresa,
      logoUrl,
      imagenUrl,
      tipoVacante,
    };

    onAddCompany(nuevaEmpresa);

    setEmpresa('');
    setLogoUrl('');
    setImagenUrl('');
    setTipoVacante('');
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl mb-4 font-bold">Agregar Empresa</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="empresa" className="block text-gray-700 font-semibold">Nombre de la empresa</label>
          <input
            type="text"
            id="empresa"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="logoUrl" className="block text-gray-700 font-semibold">URL del logo</label>
          <input
            type="text"
            id="logoUrl"
            value={logoUrl}
            onChange={(e) => setLogoUrl(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="imagenUrl" className="block text-gray-700 font-semibold">URL de la imagen</label>
          <input
            type="text"
            id="imagenUrl"
            value={imagenUrl}
            onChange={(e) => setImagenUrl(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="tipoVacante" className="block text-gray-700 font-semibold">Tipo de Vacante</label>
          <input
            type="text"
            id="tipoVacante"
            value={tipoVacante}
            onChange={(e) => setTipoVacante(e.target.value)}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
          Agregar Empresa
        </button>
        <button type="button" onClick={onCancel} className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-400 ml-2">
  Cancelar
</button>
      </form>
    </div>
  );
};

export default AddCompanyForm;
