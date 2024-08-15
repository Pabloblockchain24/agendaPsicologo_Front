import React from 'react'

/*import dependencies*/
import { NavLink } from "react-router-dom"

/*import styles*/
import './navbar.css'

function Navbar() {
    return (

        <>
        <div className='topBanner'>
            Horario De Atención: 9:00 am - 7:00 pm / Sábados 9:00 - 13:00
        </div>
            <header className='navbarContainer'>
                <NavLink to='/'> <img src="../../src/assets/logoClinica.jpg" alt="Logo" className="navbarLogo" /> </NavLink>
                <nav className='navbarLinks'>
                    <ul className="navbarList">
                        <li><NavLink to="/Nosotros" className="navbarListItem"> NOSOTROS </NavLink> </li>
                        <li><NavLink to="/Contacto" className="navbarListItem"> CONTACTO </NavLink> </li>
                        <li><NavLink to="/Contacto" className="navbarListItem"> PROFESIONALES </NavLink> </li>
                        <li><NavLink to="/Contacto" className="navbarListItemReserva"> RESERVA TU HORA </NavLink> </li>

                    </ul>
                </nav>
            </header>
        </>

    )
}

export default Navbar