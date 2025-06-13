import { useState, useEffect } from 'react'
import { animate } from 'animejs'
import './App.css'
import './styles/responsive.css'
import Programacion from './components/Programacion';
import DiseñoWeb from './components/diseñoWeb';
import Sistemas from './components/Sistemas';
import Soporte from './components/Soporte';
import Ofimatica from './components/ofimatica';
import './btn.js'
function App() {
  const [count, setCount] = useState(0)
  const [active, setActive] = useState('Programacion');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showButton, setShowButton] = useState(window.innerWidth <= 700);

  useEffect(() => { 
    animate('.nav-list', {
      left :0,
      opacity: [0, 1],
      duration: 900,
      ease:'outExpo'
    });
    // Escuchar cambios de tamaño de pantalla
    const handleResize = () => {
      setShowButton(window.innerWidth <= 700);
      if (window.innerWidth > 700) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (section) => {
    setActive(section);
    setMenuOpen(false);
  };

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
      {showButton && (
        <button onClick={() => setMenuOpen(!menuOpen)} className="menu-btn" aria-label="Abrir menú">
          {menuOpen ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
        </button>
      )}
      <nav className={`nav-list${menuOpen && showButton ? ' show' : ''}`}>
        <ul className="nav-list nav-ins">
          <a href="#" className="linkNav" onClick={() => handleNavClick('Programacion')}>Programacion</a>
          <a href="#" className="linkNav" onClick={() => handleNavClick('Diseño Web')}>Diseño Web</a>
          <a href="#" className="linkNav" onClick={() => handleNavClick('Sistemas Operativos')}>Sistemas Operativos</a>
          <a href="#" className="linkNav" onClick={() => handleNavClick('Soporte Tecnico')}>Soporte Tecnico</a>
          <a href="#" className="linkNav" onClick={() => handleNavClick('Ofimatica')}>Ofimatica</a>
        </ul>
      </nav>
      <section className="containInf">
        {renderComponent()}
      </section>
    </>
  )
}

export default App
