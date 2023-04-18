import React, { useState, useContext } from 'react';
import { context } from '../../context/context';
import Back from '../../assets/images/back.svg'
import Bell from '../../assets/images/ball.svg'
import Sun from '../../assets/images/sun.svg'
import Moon from '../../assets/images/moon.svg'
import './index.scss'

const index = ({setMode,setLang}) => {
    const {mode, LANG, lang } = useContext(context);


    const t = LANG[lang.toLowerCase()];


    const theme = mode? 'off' : 'on';

    const headerStyle={
        backgroundColor: mode ==='off' ? 'white' : 'black',
        color: mode==='off' ? 'black' : 'white'
    }


    return (
        <>
            <header>
                <div className='header' style={headerStyle}> 
                    <img src={Back} className='header__back cursor-pointer'></img>
                    <div className='header__search flex align-items-center'>
                        <input type="text" class="form-control header__search--form w-[300px] rounded-[20px] " placeholder={t.search}/>
                        <img src={Bell} className='header__search--bell' />

                    <select className={' rounded-[20px] ml-20 border-2 border-orange-400  ' + (mode === 'off'? 'bg-white' : 'bg-black')} onChange={(e)=>{
                            setLang(e.target.value)
                            localStorage.setItem('language', e.target.value)
                        }} name="" id="">
                            <option disabled selected  >Lang</option>
                            <option value="uz">UZ</option>
                            <option value="eng">ENG</option>
                        </select>


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