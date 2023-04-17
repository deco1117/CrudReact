import React, { useState, useContext } from 'react';
import Back from '../../assets/images/back.svg'
import Bell from '../../assets/images/ball.svg'
import Sun from '../../assets/images/sun.svg'
import Moon from '../../assets/images/moon.svg'
import './index.scss'

 const index = () => {
    return (
        <>
            <header>
                <div className='header'>
                    <img src={Back} className='header__back'></img>
                    <div className='header__search'>
                        <input type="text" class="form-control header__search--form" placeholder="Search" />
                        <img src={Bell} className='header__search--bell' />
                        
                        <form action="" className='form border border-radius-5'>
                            <input name='them' onChange={(e)=>{}} type="radio"value='sun' /> <label htmlFor=""><img className='cursor-pointer' src={Sun} /></label>
                            <input name='them' onChange={(e)=>{}} type="radio" value="moon" /><label htmlFor=""><img className='cursor-pointer' src={Moon} /></label>
                        </form>
                    </div>
                </div>

            </header>
        </>
    );
};

export default index;