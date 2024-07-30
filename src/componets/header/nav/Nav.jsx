import React from 'react';

const Nav = ({ setActiveSection }) => {
  return (
    <nav className="flex space-x-4">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setActiveSection(''); // Cambia a la sección de inicio
        }}
        className="text-gray-700 hover:text-purple-600"
      >
        Inicio
      </a>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setActiveSection('sobreMi');
        }}
        className="text-gray-700 hover:text-purple-600"
      >
        Sobre mí
      </a>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setActiveSection('contacto');
        }}
        className="text-gray-700 hover:text-purple-600"
      >
        Contacto
      </a>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setActiveSection('posteo');
        }}
        className="text-gray-700 hover:text-purple-600"
      >
        Posteo
      </a>
    </nav>
  );
}

export default Nav;
