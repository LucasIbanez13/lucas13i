import React from 'react';

const Posteo = () => {
  const titulo = "Título del Post";
  const imagen = "https://via.placeholder.com/600x400"; // URL fija de una imagen de ejemplo
  const descripcion = "Esta es una descripción de ejemplo para el post.";

  return (
    <div className="max-w-xl mx-auto my-4 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      {/* Header del post */}
      <div className="px-4 py-2 flex items-center">
        <img
          className="w-10 h-10 rounded-full mr-3"
          src={`https://i.pravatar.cc/150?u=12345`}
          alt="Avatar"
        />
        <div>
          <h3 className="text-lg font-semibold">{titulo}</h3>
        </div>
      </div>

      {/* Imagen del post */}
      {imagen && (
        <img className="w-full h-64 object-cover" src={imagen} alt={titulo} />
      )}

      {/* Descripción del post */}
      <div className="px-4 py-2">
        <p className="text-gray-700">{descripcion}</p>
      </div>

      {/* Footer del post */}
      <div className="px-4 py-2 border-t border-gray-200 flex items-center">
        <button className="text-blue-500 font-semibold">Like</button>
      </div>
    </div>
  );
};

export default Posteo;
