import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../assets/Magda_Logo.png';
import Magda from '../assets/Magda_landing.png';

function Navbar () {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      

      <Link to="/landing" onClick={() => setIsOpen(false)}>
        <img className="logo" src={Logo} alt="Logo" />
      </Link>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        
        <li><Link to="/landing" onClick={() => setIsOpen(false)}>Inicio</Link></li>
        <li><Link to="/Galeria" onClick={() => setIsOpen(false)}>Galería</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contacto</Link></li>
      </div>

      <div className="burger" onClick={() => setIsOpen(!isOpen)}>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
      </div>


    </nav>

  );
}

export default Navbar;