import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import Sidebar from "../../Components/Sidebar/Sidebar";
import HeaderDash from "../../Components/HeaderDash/HeaderDash";

function DashboardHome() {
  const [data, setData] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/ofertas-laborales/visitas');
        setData(response.data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchChartData();
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById('myChart');
    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map((item) => item.tipoVacante),
        datasets: [
          {
            label: 'Visitas por Tipo de Vacante',
            data: data.map((item) => item.visitas),
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        // Configuraciones opcionales del gráfico
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data]);
  
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <HeaderDash></HeaderDash>
          <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <div className="bg-white p-4 rounded-lg shadow-md">
            <div>
        <h2>Gráfico de Visitas por Tipo de Vacante</h2>
        <div>
          <canvas id="myChart" />
        </div>
      </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardHome;
