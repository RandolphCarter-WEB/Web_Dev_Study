import React from 'react';
import {inspect} from "util";

interface ButtonProps {
    children: React.ReactNode;
    width: number;
    height: number;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
    const { children, width, height, onClick } = props;
    return (
        <button style={{display: 'flex', width: `${width}px`, height: `${height}px`, justifyContent: 'center', alignItems: 'center'}} onClick={onClick}>{children}</button>
    )
}

export default Button