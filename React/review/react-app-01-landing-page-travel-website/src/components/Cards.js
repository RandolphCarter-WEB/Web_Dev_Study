import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

import imagen1 from '../images/image-amazonas.jpg';
import imagen2 from '../images/image-desert.jpg';
import imagen3 from '../images/image-antarctica.jpg';
import imagen4 from '../images/image-norway.jpg';
import imagen5 from '../images/image-aurora.jpg';
import imagen6 from '../images/image-newzeland.jpg';

function Cards() {
    return (
        <div className='cards'>
            <h1>The Best Adventures and Experiences!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={imagen1}
                            text='Explore the Amazonas and be ready for the adventure!'
                            label='Amazonas'
                            path='/services'
                        />
                        <CardItem
                            src={imagen2}
                            text='Walk through the most exotic deserts!'
                            label='Sahara'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={imagen3}
                            text='Feel the exciting cold of Antarctica!'
                            label='Antarctica'
                            path='/services'
                        />
                        <CardItem
                            src={imagen4}
                            text='Get to know the beautiful landscapes of Norway!'
                            label='Norway'
                            path='/products'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={imagen5}
                            text='Marvel at the beautiful Aurora Borealis!'
                            label='Northern Lights'
                            path='/services'
                        />
                        <CardItem
                            src={imagen6}
                            text='Enjoy the wonderful New Zealand weather!'
                            label='New Zealand'
                            path='/products'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
