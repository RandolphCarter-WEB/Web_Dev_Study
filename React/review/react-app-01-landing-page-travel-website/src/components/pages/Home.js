import React, { useEffect } from 'react'
import '../../App.css';
import ShowCase from '../../components/ShowCase';
import Cards from '../Cards';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <ShowCase />
            <Cards />
        </>
    )
}

export default Home;