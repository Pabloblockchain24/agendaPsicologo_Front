import React, { useState } from 'react';
import './contacto.css'; // Archivo CSS para los estilos

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Maneja los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validación simple del formulario
  const validate = () => {
    const newErrors = {};
    if (!formData.nombre) newErrors.nombre = 'El nombre es requerido.';
    if (!formData.correo) {
      newErrors.correo = 'El correo es requerido.';
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      newErrors.correo = 'El correo no es válido.';
    }
    if (!formData.asunto) newErrors.asunto = 'El asunto es requerido.';
    if (!formData.mensaje) newErrors.mensaje = 'El mensaje es requerido.';
    
    return newErrors;
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      // Aquí podrías hacer el envío de los datos del formulario a un servidor
      console.log('Formulario enviado:', formData);
      // Resetear formulario si lo deseas
      setFormData({
        nombre: '',
        correo: '',
        asunto: '',
        mensaje: ''
      });
    }
  };

  return (
    <div className="contactoContainer">

      <div className="contactoBox"> 


      <h1 className="contactoTitle">Contáctanos</h1>
      <p className="contactoSubtitle">
        Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo lo antes posible.
      </p>
      {submitted && <p className="contactoSuccess">¡Mensaje enviado con éxito!</p>}
      <form className="contactoForm" onSubmit={handleSubmit}>
        <div className="contactoField">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          {errors.nombre && <span className="errorText">{errors.nombre}</span>}
        </div>
        <div className="contactoField">
          <label htmlFor="correo">Correo Electrónico</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
          />
          {errors.correo && <span className="errorText">{errors.correo}</span>}
        </div>
        <div className="contactoField">
          <label htmlFor="asunto">Asunto</label>
          <input
            type="text"
            id="asunto"
            name="asunto"
            value={formData.asunto}
            onChange={handleChange}
          />
          {errors.asunto && <span className="errorText">{errors.asunto}</span>}
        </div>
        <div className="contactoField">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
          />
          {errors.mensaje && <span className="errorText">{errors.mensaje}</span>}
        </div>
        <button type="submit" className="contactoButton">ENVIAR</button>
      </form>
      </div>

    </div>
  );
}

export default Contacto;
