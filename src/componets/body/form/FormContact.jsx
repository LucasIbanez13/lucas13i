import React, { useState } from 'react';

const FormContact = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar los datos del formulario a WhatsApp
    const message = `Hola, mi nombre es ${name} ${surname}. Mi email es ${email} y me encantaría hablar contigo sobre algo interesante.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/3812018090?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">¡Hablemos!</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-normal text-gray-700">Nombre</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mt-1 border-b border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tu nombre"
            required
          />
        </div>
        <div>
          <label htmlFor="surname" className="block text-sm font-normal text-gray-700">Apellido</label>
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="w-full p-3 mt-1 border-b border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tu apellido"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-normal text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mt-1 border-b border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tu email"
            required
          />
        </div>
        <button type="submit" className="w-full bg-gray-500 hover:bg-gray-600 text-white p-3 rounded-lg text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-gray-500 mb-8">
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}

export default FormContact;
