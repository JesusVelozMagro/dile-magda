import './App.css';
import Landing from './Landing.jsx';
import Contact from './Contact.jsx';
import Navbar from '../components/Navbar.jsx'
import Galeria from './Galeria.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/landing" element={      <Landing />} />
        <Route path="/Galeria" element={      <Galeria />} />
      </Routes>
    
    </Router>
  );
}

export default App;
