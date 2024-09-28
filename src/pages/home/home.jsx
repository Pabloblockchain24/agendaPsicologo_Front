/*import dependencies*/
import { NavLink } from "react-router-dom"

/*import styles*/
import './home.css'
import { FaArrowDown } from "react-icons/fa";

/*Import components*/
import MainInfo from '../../components/mainInfo/mainInfo'
import MainTestimonios from '../../components/mainTestimonios/mainTestimonios'

function Home() {

  const scrollToInfo = () => {
    const infoSection = document.getElementById('info');
    if (infoSection) {
      infoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <section>
        <article className='BannerContainer' style={{ backgroundImage: `url(../../banner1.jpg)` }} >
          <NavLink to="/reservarHora" className="BannerButton"> RESERVA TU HORA </NavLink>
        </article>

        <button className='arrowDown parpadear' onClick={scrollToInfo}> 
          <FaArrowDown />
        </button>
      </section>

      <MainInfo />
      <MainTestimonios />

    </main>
  )
}

export default Home