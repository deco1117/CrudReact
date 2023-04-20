import React, { useState, useContext } from 'react';
import { context } from '../../context/context';
import { Link } from 'react-router-dom';

const AddList = () => {

    const {mode, LANG, lang } = useContext(context);


    const t = LANG[lang.toLowerCase()];


    const theme = mode? 'off' : 'on';

    const headerStyle={
        backgroundColor: mode ==='off' ? 'white' : 'black',
        color: mode==='off' ? 'black' : 'white'
    }

    return (
        <div>
            <div className="wrapper w-[1088px] px-[43px] py-[15px] rounded-[20px] ml-[30px] bg-[#EEEEEE] drop-shadow-md" >
                <form className='w-100'>
                                    <div className=''>
                                        <label className=''>{t.typeRele}</label>
                                        <input className='form-control' type='text' placeholder={t.typeRele} />
                                    </div>
                                    <div className='mt-3'>
                                        <label className='login__card--form--group-label'>ID</label>
                                        <input className='form-control' type='number' placeholder='ID'/>
                                    </div>
                                    <div className='mt-3'>
                                        <label className='login__card--form--group-label'>{t.manufacturedDate}</label>
                                        <input className='form-control' type='date'/>
                                    </div>
                                    <div className='mb-4 mt-3'>
                                        <label className='login__card--form--group-label'>{t.term}</label>
                                        <input className='form-control' type='number' placeholder='oy'/>
                                    </div>
                                    <div className=''>
                                        <Link to='/base'  className='btn w-100 btn-primary bg-[#FEAF00] '>{t.addrele}</Link>
                                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddList;