import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function GraficoProductos() {
  const productos = ProductosAlmacenados;

  const data = {
    labels: productos.map(p => p.nombre), // nombres
    datasets: [
      {
        label: "Precio de cada producto",
        data: productos.map(p => p.precio), // precio de productos
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: { legend: { position: "top" } }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Gráfico de precios</h2>
      <Bar data={data} options={options} />
    </div>
  );
}
