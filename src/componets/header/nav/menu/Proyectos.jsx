import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const Proyectos = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    const csvUrl =
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQk_qgqRWBx0pPMkQKWqLqjdmvRXfw3VhIUUtxwWCzLIjWl-FVv_mD-NTKgvzqz-9ZL4ciPgDFXZD7d/pub?output=csv';

    // Cargar datos desde Google Sheets
    Papa.parse(csvUrl, {
      download: true,
      header: true,
      complete: (result) => {
        setProyectos(result.data);
      },
      error: (error) => {
        console.error('Error al cargar datos:', error);
      },
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {proyectos.map((proyecto, index) => (
        <div
          key={index}
          className="border rounded-lg shadow-md overflow-hidden bg-white"
        >
          <img
            src={proyecto.imagen}
            alt={proyecto.titulo}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{proyecto.titulo}</h3>
            <p className="text-gray-600 mb-4">{proyecto.descripcion}</p>
            <a
              href={proyecto.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Ver más
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Proyectos;
