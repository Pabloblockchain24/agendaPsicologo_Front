import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';
import './mainTestimonios.css';


function MainTestimonios() {
  const testimonios = [
    {
      nombre: "María González",
      testimonio: "La atención fue increíble, el equipo es muy profesional y me sentí apoyada en todo momento.",
      imagen: "/userTestimonio.jpg"
    },
    {
      nombre: "Juan Pérez",
      testimonio: "Gracias a SanarMental, encontré el apoyo emocional que necesitaba. Recomiendo totalmente sus servicios.",
      imagen: "/userTestimonio.jpg"
    },
    {
      nombre: "Ana Torres",
      testimonio: "La posibilidad de tener sesiones online me facilitó mucho el proceso. Excelentes profesionales.",
      imagen: "/userTestimonio.jpg"
    },
    {
      nombre: "Carlos Martínez",
      testimonio: "El mejor servicio que he recibido. Los profesionales me ayudaron en momentos difíciles.",
      imagen: "/userTestimonio.jpg"
    },
    {
      nombre: "Laura Silva",
      testimonio: "Las consultas online fueron muy convenientes y efectivas para mí.",
      imagen: "/userTestimonio.jpg"
    },
    {
      nombre: "Pedro Morales",
      testimonio: "El equipo me hizo sentir muy cómodo. Totalmente recomendable.",
      imagen: "/userTestimonio.jpg"
    }

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, 
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="testimoniosSection">
      <h2 className="testimoniosTitle">Testimonios de nuestros pacientes</h2>

      <Slider {...settings} className="testimonioSlider">
        {testimonios.map((testimonio, index) => (
          <div>
            <div key={index} className="testimonioCard">
              <img src={testimonio.imagen} alt={testimonio.nombre} className="testimonioImagen" />
              <p className="testimonioTexto">"{testimonio.testimonio}"</p>
              <h3 className="testimonioNombre">- {testimonio.nombre}</h3>
            </div>
          </div>

        ))}
      </Slider>
    </section>
  );
}

export default MainTestimonios;
