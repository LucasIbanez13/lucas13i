import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const Posteo = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTIWhJP1QKMtFzQlIcDoPY7RteXGNp2h-2YtTqrya8uXQhPGP49S7zm3bpZd8cYnWICLsLDQjK46InI/pub?output=csv');
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value);
      Papa.parse(csv, {
        header: true,
        complete: (results) => {
          setData(results.data);
          setLoading(false);
        },
      });
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-xl mx-auto my-4 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      {data.map((post) => (
        <div key={post.ID} className="my-4 bm-10">
          {/* Header del post */}
          <div className="px-4 py-2 flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-3"
              src="/fotoPerfil1.png"
              alt="Avatar"
            />
            <div>
              <h3 className="text-lg font-semibold">{post.TITULO}</h3>
            </div>
          </div>

          {/* Imagen del post */}
          {post.IMAGEN && (
            <img className="w-full h-64 object-cover" src={post.IMAGEN} alt={post.TITULO} />
          )}

          {/* Descripción del post */}
          <div className="px-4 py-2">
            <p className="text-gray-700">{post.DESCRIPCION}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posteo;
