import React from 'react';
import Back from '../../assets/images/back.svg'
import Bell from '../../assets/images/ball.svg'
import './index.scss'

const index = () => {
    return (
        <>
             <header>
                <div className='header'>
                    <img src={Back} className='header__back'></img>
                    <div className='header__search'>
                        <input type="text" class="form-control header__search--form" placeholder="Search" />
                        <img src={Bell} className='header__search--bell'/>
                    </div>
                </div>

             </header>
        </>
    );
};

export default index;