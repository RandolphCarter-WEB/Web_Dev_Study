import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {

    // Hooks
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    // Handle functions
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // Configuramos si se muestra el botón en función del tamaño de la ventana:
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    // Ejecutamos una vez la función de showButton.
    useEffect(() => {
        showButton();
    }, []);

    // Ejecutamos la función creada previamente.
    window.addEventListener('resize', showButton);


    return (
        <>
            <div className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        YRN  <i className="fab fa-pied-piper"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {/* Si click es true, poner una clase, si no, poner la otra. */}
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-element'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-element'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-element'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                    </ul>
                    {/* 
                        && es un shorthand, regresa lo que le sigue
                        Notar que estamos mandando como CHILDREN el "SIGN-UP", eso es lo que será
                        renderizado dentro del botón.
                        Ahora sólo debemos mandar todas las propiedades.
                    */}
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </div>
        </>
    );
}

export default Navbar;