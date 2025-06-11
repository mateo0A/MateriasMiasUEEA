import { useState, useEffect } from 'react'
import { animate } from 'animejs'
import './App.css'
import Programacion from './components/Programacion';
import DiseñoWeb from './components/diseñoWeb';
import Sistemas from './components/Sistemas';
import Soporte from './components/Soporte';
import Ofimatica from './components/ofimatica';

function App() {
  const [count, setCount] = useState(0)
  const [active, setActive] = useState('Programacion');

  useEffect(() => {
    animate('.nav-list', {
      left :0,
      opacity: [0, 1],
      duration: 900,
      ease:'outExpo'
    });
  }, []);

  const renderComponent = () => {
    switch (active) {
      case 'Programacion':
        return <Programacion />;
      case 'Diseño Web':
        return <DiseñoWeb />;
      case 'Sistemas Operativos':
        return <Sistemas />;
      case 'Soporte Tecnico':
        return <Soporte />;
      case 'Ofimatica':
        return <Ofimatica />;
      default:
        return null;
    }
  };

  return (
    <>
      <nav className="nav-list">
        <ul className="nav-list">
          <a href="#" className="linkNav" onClick={() => setActive('Programacion')}>Programacion</a>
          <a href="#" className="linkNav" onClick={() => setActive('Diseño Web')}>Diseño Web</a>
          <a href="#" className="linkNav" onClick={() => setActive('Sistemas Operativos')}>Sistemas Operativos</a>
          <a href="#" className="linkNav" onClick={() => setActive('Soporte Tecnico')}>Soporte Tecnico</a>
          <a href="#" className="linkNav" onClick={() => setActive('Ofimatica')}>Ofimatica</a>
        </ul>
      </nav>
      <section className="containInf">
        {renderComponent()}
      </section>
    </>
  )
}

export default App
