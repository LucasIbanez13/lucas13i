import React from 'react';
import FormContact from '../../../body/form/FormContact';

const Contacto = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contacto</h1>
      <p className="text-lg text-gray-700 mb-6">
        Si quieres hablar conmigo, completa el formulario a continuación. También puedes encontrarme en las redes sociales o contactarme directamente a través de los siguientes canales.
      </p>
      <FormContact />
      <div className="mt-8 flex flex-col items-center space-y-4">
        <p className="text-lg text-gray-700">Contacto directo:</p>
        <p className="text-lg text-gray-700">Número de teléfono: +123 456 7890</p>
        <p className="text-lg text-gray-700">Correo electrónico: lucas@example.com</p>
        <div className="flex space-x-4">
          <a href="https://wa.me/3812018090" target="_blank" rel="noopener noreferrer">
            <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-8 h-8" />
          </a>
          <a href="https://www.facebook.com/lucas.ibanez" target="_blank" rel="noopener noreferrer">
            <img src="/icons/facebook.svg" alt="Facebook" className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/lucas13i" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram.svg" alt="Instagram" className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/lucasibanez" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
