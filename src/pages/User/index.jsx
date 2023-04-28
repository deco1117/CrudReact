import React, { useState, useContext } from 'react';
import { context } from '../../context/context';
import TableRepair from '../../Tables/TableRepair'
import { Link } from 'react-router-dom';
const index = ({ setMode, setLang }) => {


    const { mode, LANG, lang } = useContext(context);


    const t = LANG[lang.toLowerCase()];


    const theme = mode ? 'off' : 'on';

    const headerStyle = {
        backgroundColor: mode === 'off' ? 'white' : 'black',
        color: mode === 'off' ? 'black' : 'white'
    }

    return (
        <>
            <div className='bg-[#F8F8F8] h-[100vh]'>
                <div className='pl-[30px] '>
                    <div className='border-b-2 py-3'>
                        <h1 className=' text-xl font-medium'>
                            {t.user}
                        </h1>
                    </div>
                    
                </div>
                <div className='flex flex-col mt-10 w-[530px] ml-[30px] gap-3'>
                    <div className='flex w-[530px] justify-between'>
                        <h4 className='text-[#FEAF00]'>{t.name}:</h4>
                        <h4>Davronbek</h4>
                    </div>
                    <div className='flex w-[530px] justify-between'>
                        <h4 className='text-[#FEAF00]'>{t.sname}</h4>
                        <h4>Matvaliyev</h4>
                    </div>
                    <div className='flex w-[530px] justify-between'>
                        <h4 className='text-[#FEAF00]'>{t.patronymic}</h4>
                        <h4>Abdulhoshim o'g'li</h4>
                    </div>
                    <div className='flex w-[530px] justify-between'>
                        <h4 className='text-[#FEAF00]'>{t.station}</h4>
                        <h4>Chuqursoy</h4>
                    </div>
                    <div className='flex w-[530px] justify-between'>
                        <h4 className='text-[#FEAF00]'>{t.position}</h4>
                        <h4>Elektromexanik</h4>
                    </div>
                    <div className='flex w-[530px] justify-between'>
                        <h4 className='text-[#FEAF00]'>{t.phone}</h4>
                        <h4>+998903591117</h4>
                    </div>
                    <div className='flex w-[530px] justify-between'>
                        <h4 className='text-[#FEAF00]'>{t.password}</h4>
                        <h4>*******</h4>
                    </div>
                    <Link to='/editUser' className='btn bg-[#FEAF00;] studentlist__header--end-button'>
                            {t.edit}
                    </Link>
                </div>
            </div>
        </>
    );
};

export default index;