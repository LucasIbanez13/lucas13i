import React from 'react';
import FormContact from '../../../body/form/FormContact'; // Ajusta la ruta según tu estructura de carpetas

const Contacto = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold">Contacto</h2>
      <p className="mt-4">Aquí puedes agregar información sobre cómo contactarte.</p>
      <FormContact />
      <div className="mt-4">
        <h3 className="text-2xl font-semibold">Redes Sociales</h3>
        <ul className="mt-2">
          <li><a href="https://wa.me/3812018090" className="text-blue-500 hover:underline">WhatsApp</a></li>
          <li><a href="https://facebook.com/lucas.ibanez" className="text-blue-500 hover:underline">Facebook</a></li>
          <li><a href="https://instagram.com/lucas13i" className="text-blue-500 hover:underline">Instagram</a></li>
          <li><a href="https://linkedin.com/in/lucas-ibanez" className="text-blue-500 hover:underline">LinkedIn</a></li>
        </ul>
        <p className="mt-2">Teléfono: 3812018090</p>
      </div>
    </div>
  );
}

export default Contacto;
