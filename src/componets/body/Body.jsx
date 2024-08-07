import React from 'react';
import Banner from './banner/Banner';
import Contacto from '../header/nav/menu/Contacto';
import SobreMi from '../header/nav/menu/SobreMi';
import Posteo from '../header/nav/menu/Posteo';

const Body = ({ activeSection, setActiveSection }) => {
  return (
    <div>
      {/* Renderizar Banner solo si no hay sección activa */}
      {activeSection === '' && <Banner />}
      
      {/* Renderizar contenido basado en la sección activa */}
      {activeSection === 'sobreMi' && <SobreMi />}
      {activeSection === 'contacto' && <Contacto />}
      {activeSection === 'posteo' && <Posteo />}
      
      {/* Renderizar secciones de contenido solo si no hay sección activa */}
      {activeSection === '' && (
        <div className="my-10 px-4">
          {/* Primera sección */}
          <div className="flex items-center mb-5">
            <div className="w-1/2 p-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                Me encanta jugar videojuegos como CSGO, League of Legends, y Red Dead Redemption. Disfruto mucho del mundo de los videojuegos.
              </h2>
            </div>
            <div className="w-1/2 h-80 bg-cover bg-center" style={{ backgroundImage: 'url(/Frame21.png)' }}></div>
          </div>
          
          {/* Segunda sección */}
          <div className="flex items-center mb-5">
          <div className="w-1/2 h-80 bg-cover bg-center" style={{ backgroundImage: 'url(/Frame23.png)' }}></div>
          <div className="w-1/2 p-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                Me gusta toda clase de música, pero me siento más atraído por el hip hop americano. También disfruto viendo películas de varios géneros.
              </h2>
            </div>
          </div>
          
          {/* Tercera sección */}
          <div className="flex items-center mb-5">
            <div className="w-1/2 p-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                Soy un apasionado de la tecnología y me fascina el avance que está ocurriendo en este campo. 
              </h2>
            </div>
            <div className="w-1/2 h-80 bg-cover bg-center" style={{ backgroundImage: 'url(/Frame22.png)' }}></div>
          </div>
        </div>
      )}

      {/* El formulario de contacto se muestra siempre al final si no está activa la sección de contacto */}
      {activeSection === '' && (
        <div className="my-10 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-5">Charla conmigo ahora!</h2>
          <button
            className="bg-blue-500 text-white text-lg px-40 py-5 rounded-lg"
            onClick={() => setActiveSection('contacto')}
          >
            Continuar
          </button>
        </div>
      )}
    </div>
  );
}

export default Body;
