import React, { useState, useContext } from 'react';
import { context } from '../../context/context';
import Back from '../../assets/images/back.svg'
import Bell from '../../assets/images/ball.svg'
import Sun from '../../assets/images/sun.svg'
import Moon from '../../assets/images/moon.svg'
import './index.scss'

const index = ({setMode,setLang}) => {
    const {mode} = useContext(context);

    const theme = mode? 'off' : 'on';

    const headerStyle={
        backgroundColor: mode ==='off' ? 'white' : 'black',
        color: mode==='off' ? 'black' : 'white'
    }




console.log(headerStyle)

    return (
        <>
            <header>
                <div className='header' style={headerStyle}> 
                    <img src={Back} className='header__back cursor-pointer'></img>
                    <div className='header__search flex align-items-center'>
                        <input type="text" class="form-control header__search--form w-[300px] rounded-[20px] " placeholder="Search"/>
                        <img src={Bell} className='header__search--bell' />

                        <input type="checkbox" id='darkmode-toggle' className=' toggle ml-5'  
                        onClick={(e)=>{
                            if(mode){
                                setMode('on');
                                localStorage.setItem('theme', 'on');
                            }else{
                                setMode('off');
                                localStorage.setItem('theme', 'off');
                                
                            }
                        }}/>
                        <label htmlFor="darkmode-toggle">
                            <img src={Sun} className='sun'/>
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