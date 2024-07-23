import React, { useState } from 'react';
import './App.css';
import Header from './componets/header/Header'; // Asegúrate de que este es el correcto
import HeaderF from './componets/header/HeaderF'; // Asegúrate de que este es el correcto
import Body from './componets/body/Body';

function App() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div>
      <Header setActiveSection={setActiveSection} />
      <HeaderF />
      <Body activeSection={activeSection} />
    </div>
  );
}

export default App;
