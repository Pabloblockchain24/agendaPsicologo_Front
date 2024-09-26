/*Import styles */
import './footer.css';

/*Import icons */
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footerContainer">
      <section className="footerSection">

        <article className="footerAbout">
          <img src="../../src/assets/logoClinica.jpg" alt="Logo Clinica" className="footerLogo" />
          <p>En SanarMental, ofrecemos apoyo y atención psicológica para ayudarte a encontrar el bienestar emocional que necesitas. Nuestro equipo está aquí para escucharte y guiarte en tu camino hacia una vida más saludable y equilibrada.</p>
        </article>

        <article className="footerContact">
          <h3>Contáctanos</h3>
          <div className='footerContactItem'> <FaPhone /> <p>+56 9 1234 5678</p> </div>
          <div className='footerContactItem'> <MdEmail /> <p>contacto@sanarmental.cl</p> </div>
          <div className='footerContactItem'> <FaLocationDot /> <p>San Antonio, Chile</p> </div>
        </article>

        <article className="footerSocial">
          <h3>Síguenos en nuestras redes </h3>
          <div className="footerSocialIcons">
            <a href="https://www.facebook.com"> <FaFacebook /> </a>
            <a href="https://www.instragram.com"> <FaInstagram /> </a>
            <a href="https://www.x.com"> <FaXTwitter /> </a>
            <a href="https://www.linkedin.com">  <FaLinkedin /> </a>
          </div>
        </article>

      </section>

      <aside className="footerBottom">
        <p>&copy; {new Date().getFullYear()} SanarMental | Todos los derechos reservados</p>
      </aside>
    </footer>
  );
}

export default Footer;
