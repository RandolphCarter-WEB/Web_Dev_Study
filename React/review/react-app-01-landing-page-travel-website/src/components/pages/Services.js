import React, { useEffect } from 'react';
import '../../App.css';

const Services = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <h1 className="services">
            SERVICES
        </h1>
    );

}

export default Services;