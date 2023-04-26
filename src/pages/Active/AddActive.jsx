import React, { useState, useContext } from 'react';
import { context } from '../../context/context';
import { Link } from 'react-router-dom';
import TableActive from '../../Tables/TableActive'

const AddList = () => {

    const {mode, LANG, lang } = useContext(context);


    const t = LANG[lang.toLowerCase()];


    const theme = mode? 'off' : 'on';

    const headerStyle={
        backgroundColor: mode ==='off' ? 'white' : 'black',
        color: mode==='off' ? 'black' : 'white'
    }

    return (
        <>
            <div className='bg-[#F8F8F8] pt-4 h-[100vh]'>
                <div className=" wrapper w-[1088px] px-[43px] py-[15px] rounded-[20px] ml-[30px] bg-[#EEEEEE] drop-shadow-md" >
                    <form className='w-100'>
                                        <label className='login__card--form--group-label'>{t.selectRele}</label>
                                        <select className='form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 ' name="typeRele" id="">
                                            <option selected disabled>{t.selectRele}</option>
                                            <option></option>
                                            <option></option>
                                        </select>
                                        <div className='mb-4 mt-3'>
                                            <label className='login__card--form--group-label'>{t.address}</label>
                                            <input className='form-control' type='text' placeholder=''/>
                                        </div>
                                        <div className=''>
                                            <Link to='/active'  className='btn w-100 btn-primary bg-[#FEAF00] '>{t.actived}</Link>
                                        </div>
                    </form>
                </div>
                <TableActive/>
            </div>
        </>
    );
};

export default AddList;