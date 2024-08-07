import React from 'react';

const HeaderF = () => {
  return (
    <div className="w-4/5 mx-auto flex justify-between items-center mt-40 h-[350px] "> {/* Aumenta la altura a 500px */}
      <div className="w-1/2 p-4">
        <h1 className="text-4xl font-bold text-gray-700 mt-40 h-[350px]">
          Transformando mi pasión por la programación en una mejor versión de mí mismo
        </h1>
      </div>
      <div className="w-1/2 h-full bg-teal-700" style={{ backgroundImage: 'url(/bannerFondo.jpg)' }}></div> 
    </div>
  );
}

export default HeaderF;
