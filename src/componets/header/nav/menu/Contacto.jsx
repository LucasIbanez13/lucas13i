import React from 'react';
import FormContact from '../../../body/form/FormContact'; // Ajusta la ruta según tu estructura de carpetas

const Contacto = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl text-gray-800 mb-4">Contacto</h2>
      <div className="flex items-start justify-between mb-4">
        <p className="text-lg text-gray-700">Teléfono: 3812018090</p>
        <div className="flex space-x-9">
          <a href="https://wa.me/3812018090" className="text-blue-500 hover:underline" aria-label="WhatsApp">
            <i className="fab fa-whatsapp fa-lg"></i>
          </a>
          <a href="https://facebook.com/lucas.ibanez" className="text-blue-500 hover:underline" aria-label="Facebook">
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a href="https://instagram.com/lucas13i" className="text-blue-500 hover:underline" aria-label="Instagram">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a href="https://linkedin.com/in/lucas-ibanez" className="text-blue-500 hover:underline" aria-label="LinkedIn">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
        </div>
      </div>
      <FormContact />
    </div>
  );
}

export default Contacto;
