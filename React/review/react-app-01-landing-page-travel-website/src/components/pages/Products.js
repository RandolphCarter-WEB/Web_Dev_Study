import React, { useEffect } from 'react';
import '../../App.css';

const Products = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <h1 className="products">OUR PRODUCTS</h1>
    );

}

export default Products;