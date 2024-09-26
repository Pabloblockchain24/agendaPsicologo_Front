/*Import dependencies*/
import React from 'react'
import { useState, useEffect } from 'react'

/*import dependencies*/
import { NavLink, useLocation } from "react-router-dom"

/*import styles*/
import './navbar.css'

import { PiListFill } from "react-icons/pi";
import { AiFillCloseSquare } from "react-icons/ai";


function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };


      useEffect(() => {
        setMenuOpen(false);
      }, [location.pathname]);



    return (

        <>
            <div className='topBanner'>
                Horario De Atención: 9:00 am - 7:00 pm / Sábados 9:00 - 13:00
            </div>
           <header className='navbarContainer'>
                <NavLink to='/'> <img src="../../src/assets/logoClinica.jpg" alt="Logo" className="navbarLogo" /> </NavLink>


                <button className="menuMobile" onClick={toggleMenu}> <PiListFill className='buttonAbrir' /> </button>
                <nav className={menuOpen ? 'navbarLinks visible' : 'navbarLinks'}>

                   <ul className="navbarList">
                   <button className="cerrarMenuMobile" onClick={toggleMenu}><AiFillCloseSquare /></button>

                        <li><NavLink to="/Nosotros" className="navbarListItem"> NOSOTROS </NavLink> </li>
                        <li><NavLink to="/Psicologos" className="navbarListItem"> PROFESIONALES </NavLink> </li>

                        <li><NavLink to="/Contacto" className="navbarListItem"> CONTACTO </NavLink> </li>
                        <li><NavLink to="/reservarHora" className="navbarListItemReserva"> RESERVA TU HORA </NavLink> </li>

                    </ul>
                </nav>
            </header>
        </>

    )
}

export default Navbar