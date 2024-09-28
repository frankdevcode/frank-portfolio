import { useState } from 'react';
import '../style-sheet/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className='main-container-contact'>
      <div className='container-main-title-contact'>
        <h1 className='main-title-contact'>Contacto</h1>
      </div>
      <div className='contact-paragraph-container'>
        <p className='contact-paragraph'>
          ¡Gracias por tu interés en conectarte! Estoy emocionado por la posibilidad de colaborar contigo o responder a cualquier pregunta que puedas tener. Aquí tienes varias formas de ponerte en contacto conmigo:
        </p>
      </div>

      <div className='container-title-contact'>
        <h3 className='title-contact'>Información de contacto</h3>
      </div>
      <div className='contact-paragraph-container'>
        <p className='contact-paragraph'>
          <span className='bullet-point'>•</span> Correo Electrónico: franciscoperlazza@gmail.com
        </p>
      </div>

      <div className='contact-form-main-container'>
        <div className='container-column-two-form'>
          <form onSubmit={handleSubmit} className='contact-form-content'>
            <label className='form-tag-titles' htmlFor="name">Nombre:</label>
            <input className='form-input-field'
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Ingrese su nombre"
            />

            <label className='form-tag-titles' htmlFor="email">Correo Electrónico:</label>
            <input className='form-input-field'
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Ingrese su correo electrónico"
            />

            <label className='form-tag-titles' htmlFor="subject">Asunto:</label>
            <input className='form-input-field'
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Ingrese el asunto"
            />

            <label className='form-tag-titles' htmlFor="message">Mensaje:</label>
            <textarea className='form-input-field'
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Escriba su mensaje aquí"
            ></textarea>

            <button className='submit-form-button' type="submit">Enviar</button>
          </form>
        </div>

        <div className='container-column-two-form'>
          <div className='container-title-column-two'>
            <h3 className='title-column-two'>Horario de disponibilidad</h3>
          </div>
          <div className='container-title-column-two'>
            <p className='paragraph-column-two'>
              Mi compromiso es responder a tus consultas en el menor tiempo posible. Sin embargo, ten en cuenta que mi horario de disponibilidad puede variar debido a compromisos profesionales. Generalmente, puedes esperar una respuesta dentro de las 24 horas hábiles.
            </p>
          </div>
        </div>
      </div>

      <div className=''>
        <div className=''>
          <h3 className='title-column-two'>Oportunidades profesionales</h3>
        </div>
        <div className=''>
          <p className='paragraph-column-two'>
            Si estás interesado en explorar oportunidades de colaboración, contratación o proyectos conjuntos, estaré encantado de discutir cómo puedo contribuir a tus objetivos. Por favor, proporciona detalles adicionales en tu mensaje para que pueda entender mejor tus necesidades.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
