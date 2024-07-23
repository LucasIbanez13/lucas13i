import React from 'react';
import Nav from './nav/Nav';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold text-purple-600">lucas13i</div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
