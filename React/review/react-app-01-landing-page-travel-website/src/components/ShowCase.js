import React from 'react'
import Button from './Button';
import '../App.css';
import './ShowCase.css';

const ShowCase = () => {
    return (
        <div className="showcase-container">
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>TRIP TIME</h1>
            <p>How long have you waited to start your journey?</p>
            <div className="showcase-btns">
                <Button className='btn'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>GET STARTED</Button>
                <Button className='btn'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>WATCH DEMO <i className="far fa-play-circle" /></Button>
            </div>
        </div>
    )
}

export default ShowCase;