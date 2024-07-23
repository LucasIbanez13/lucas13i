import React, { useState } from 'react';
import './App.css';
import Header from './componets/header/Header';
import HeaderF from './componets/header/HeaderF';
import Body from './componets/body/Body';

function App() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div>
      <Header setActiveSection={setActiveSection} />
      {activeSection === '' && <HeaderF />} {/* Mostrar HeaderF solo si no hay sección activa */}
      <Body activeSection={activeSection} />
    </div>
  );
}

export default App;
