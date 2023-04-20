import React, { useState, useContext } from 'react';
import { context } from '../../context/context';
import { Link } from 'react-router-dom';
import Scrool from '../../assets/images/scrool.svg'

const index = ({setMode,setLang}) => {


    const {mode, LANG, lang } = useContext(context);


    const t = LANG[lang.toLowerCase()];


    const theme = mode? 'off' : 'on';

    const headerStyle={
        backgroundColor: mode ==='off' ? 'white' : 'black',
        color: mode==='off' ? 'black' : 'white'
    }

    return (
        <div>
            <div className='studentlist'>
                <div className='studentlist__header'>
                    <h1 className='studentlist__header--title'>
                        {t.base}
                    </h1>
                    <div className='studentlist__header--end'>
                        <img className='studentlist__header--end-scrool' src={Scrool} />
                        <Link to='/addList' className='studentlist__header--end-button'>
                            {t.addrele}
                        </Link>
                    </div>     
                </div>
                <form className='mt-[17px]' action="#">
                    <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 ' name="typeRele" id="">
                        <option selected disabled>{t.selectRele}</option>
                        <option></option>
                        <option></option>
                    </select>
                </form>
                <table class="table table-striped mt-[20px]">
                <thead>
                    <tr>
                    <th scope="col" className='table-head'>{t.typeRele}</th>
                    <th scope="col" className='table-head'>ID</th>
                    <th scope="col" className='table-head'>{t.manufacturedDate}</th>
                    <th scope="col" className='table-head'>{t.term}</th>
                    <th scope="col" className='table-head'>{t.quotedDate}</th> 
                    <th scope="col" className='table-head'></th> 
                    <th scope="col" className='table-head'></th> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row" className='table-body'>НМШ-0,3/90</th>
                    <td className='table-body'>00159</td>
                    <td className='table-body'>01.01.2020</td>
                    <td className='table-body'>24 oy</td>
                    <td className='table-body'>16.05.2021</td>
                    <td className='table-body'> </td>
                    <td className='table-body'><img className='img' src=''/></td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default index;