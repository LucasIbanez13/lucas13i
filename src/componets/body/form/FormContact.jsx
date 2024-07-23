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
    <div className="max-w-lg mx-auto p-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">¡Hablemos!</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-medium">Nombre</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mt-1 border border-gray-200 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Tu nombre"
            required
          />
        </div>
        <div>
          <label htmlFor="surname" className="block text-lg font-medium">Apellido</label>
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="w-full p-3 mt-1 border border-gray-200 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Tu apellido"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mt-1 border border-gray-200 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Tu email"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500">
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}

export default FormContact;
