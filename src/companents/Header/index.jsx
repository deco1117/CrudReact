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
                    <img src={Back} className='header__back cursor-pointer'></img>
                    <div className='header__search flex align-items-center'>
                        <input type="text" class="form-control header__search--form w-[300px] rounded-[20px] " placeholder="Search" />
                        <img src={Bell} className='header__search--bell' />


                            <input type="checkbox" id='darkmode-toggle' className=' toggle ml-5' />
                                <label htmlFor="darkmode-toggle">
                                    <img src={Sun} className='sun' />
                                    <img src={Moon} className='moon'></img>   
                                </label>
                            <div className="background"></div>
                    </div>
                </div>

            </header>
        </>
    );
};

export default index;