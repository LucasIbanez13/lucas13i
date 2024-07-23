import React from 'react';
import Nav from './nav/Nav';

const Header = ({ setActiveSection }) => {
  return (
    <header className="w-full bg-white shadow-md z-50">
      <div className="relative container mx-auto px-4 py-2 flex justify-between items-center">
        <div
          className="text-xl font-bold text-purple-600 fixed top-0 left-0 px-4 py-2 cursor-pointer z-10" // Agregado z-index
          style={{ transform: 'translateY(-10%)' }} // Mueve el texto hacia arriba
          onClick={() => setActiveSection('')}
        >
          lucas13i
        </div>
        <div className="ml-32 flex flex-grow justify-end">
          <Nav setActiveSection={setActiveSection} />
        </div>
      </div>
    </header>
  );
}

export default Header;
