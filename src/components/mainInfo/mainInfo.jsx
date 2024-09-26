import React from 'react';
import './mainInfo.css';

function MainInfo() {
  return (
    <section className='mainInfoContainer' id="info"> 
      <h2 className="mainInfoTitle">¿Por qué elegir SanarMental?</h2>

      <section className="mainInfo">
        <article className="mainInfoCard">
          <img src="/iconProfesional.jpg" alt="Icono Profesionales" className="mainInfoIcon" />
          <div>
            <h3>Equipo Profesional Joven</h3>
            <p>Nuestro equipo está formado por jóvenes profesionales capacitados en las mejores universidades del país, y con experiencia en salud publica, cesfam, colegios, etc.  brindando una atención moderna y empática.</p>
          </div>
        </article>

        <article className="mainInfoCard">
          <img src="/iconAtencionOnline.jpg" alt="Icono Atención" className="mainInfoIcon" />
          <div>
            <h3>Atención Online y Presencial</h3>
            <p>Ofrecemos consultas online desde la comodidad de tu hogar o presencial según tus necesidades ¡Tú eliges!</p>
          </div>
        </article>

        <article className="mainInfoCard">
          <img src="/iconEspecialidades.jpg" alt="Icono Especialidades" className="mainInfoIcon" />
          <div>
            <h3>Variedad de Especialidades</h3>
            <p>Contamos con especialistas en diversas áreas de la psicología clínica adulta, infanto juvenil, infantil, entre otras, para atender tus necesidades de manera personalizada y profesional.</p>
          </div>
        </article>
      </section>
    </section>
  );
}

export default MainInfo;
