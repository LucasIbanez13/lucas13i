import React from 'react';
import Banner from './banner/Banner';
import FormContact from './form/FormContact';
import Contacto from '../header/nav/menu/Contacto';
import SobreMi from '../header/nav/menu/SobreMi';

const Body = ({ activeSection }) => {
  return (
    <div>
      {/* Renderizar Banner solo si no hay sección activa */}
      {activeSection === '' && <Banner />}
      
      {/* Renderizar contenido basado en la sección activa */}
      {activeSection === 'sobreMi' && <SobreMi />}
      {activeSection === 'contacto' && <Contacto />}
      {activeSection === 'posts' && <div> {/* Aquí puedes agregar el contenido de "Posteo" */} </div>}
      
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
            <div className="w-1/2 h-80 bg-red-500"></div>
          </div>
          
          {/* Segunda sección */}
          <div className="flex items-center mb-5">
            <div className="w-1/2 h-80 bg-red-500"></div>
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
            <div className="w-1/2 h-80 bg-red-500"></div>
          </div>
        </div>
      )}

      {/* El formulario de contacto se muestra siempre al final si no está activa la sección de contacto */}
      {activeSection === '' && <FormContact />}
    </div>
  );
}

export default Body;
