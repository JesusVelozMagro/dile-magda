import './Contact.css';
import { useState } from 'react';
import Entrevista from '../assets/Entrevista_Radio_Pudahuel.mp4';

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(''); // Para mostrar feedback al usuario

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://contact-api-magdalena.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('✅ Mensaje enviado correctamente');
        setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
      } else {
        setStatus('❌ Hubo un error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setStatus('❌ Error de conexión');
    }
  };

  return(
    
    <div className="contact-wrapper"> 

      <video className="contact-video-background" src={Entrevista} autoPlay loop muted playsInline></video>
    
      <div className="contact-overlay"></div> 
    
    
      <div className="contact-container">
        
        <div className='Title-container'>
          <p className='Title'>Contáctame <p className='Title-highlight'>!!!</p>🤗❤️</p>
        </div>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Tu nombre 👀"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu Correo electrónico 📧"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
          />
          <textarea
            name="message"
            placeholder="Tu mensaje 💬"
            value={formData.message}
            onChange={handleChange}
            required
            className="textarea-field"
          />
          <button type="submit"> 💕 Enviar! 📨 </button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </div>
 
  );
}
export default Contact;