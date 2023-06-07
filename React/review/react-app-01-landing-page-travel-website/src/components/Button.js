import React from 'react'
import './Button.css';
import { Link } from 'react-router-dom'

// Declaramos un array de clases de estilos para el botón:
const STYLES = ['btn--primary', 'btn--outline'];
// Declaramos de la misma forma un arreglo para los posibles tamaños del botón.
const SIZES = ['btn--medium', 'btn--large'];


const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {

    /*
        Seleccionamos el estilo del botón, si el estilo pasado en las propiedades está en el array,
        entonces ese estilo lo manejamos, de no ser así el estilo del botón es el primary (posición 0).
        La misma lógia se utiliza en checkButtonSize.
    */

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    );
}

export default Button;