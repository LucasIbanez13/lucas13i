import React from 'react';

const Nav = ({ setActiveSection }) => {
  return (
    <nav className="flex space-x-4">
      <a href="#about" onClick={() => setActiveSection('sobreMi')} className="text-gray-700 hover:text-purple-600">Sobre mí</a>
      <a href="#contact" onClick={() => setActiveSection('contacto')} className="text-gray-700 hover:text-purple-600">Contacto</a>
      <a href="#posts" onClick={() => setActiveSection('posts')} className="text-gray-700 hover:text-purple-600">Posteo</a>
    </nav>
  );
}

export default Nav;
