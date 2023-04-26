import React, { useState, useContext } from 'react';
import { context } from '../../context/context';
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
        <div>
            <div className="">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col" className='table-head'>{t.typeRele}</th>
                            <th scope="col" className='table-head'>ID</th>
                            <th scope="col" className='table-head'>{t.dataRepair}</th>
                            <th scope="col" className='table-head'>{t.sent}</th>
                            <th scope="col" className='table-head'></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='items-center'>
                            <th scope="row" className='table-body'>НМШ-0,3/90</th>
                            <td className='table-body'>00159</td>
                            <td className='table-body'>01.01.2022</td>
                            <td className='table-body'>Davronbek Matvaliyev</td>
                            <td className='table-body'><Link to='/addList' className='btn bg-[#FEAF00;] studentlist__header--end-button'>
                                {t.returnBase}
                            </Link></td>
                        </tr>
                        <tr className='items-center'>
                            <th scope="row" className='table-body'>НМШ-0,3/90</th>
                            <td className='table-body'>00159</td>
                            <td className='table-body'>01.01.2022</td>
                            <td className='table-body'>Davronbek Matvaliyev</td>
                            <td className='table-body'><Link to='/addList' className='btn bg-[#FEAF00;] studentlist__header--end-button'>
                                {t.returnBase}
                            </Link></td>
                        </tr>
                        <tr className='items-center'>
                            <th scope="row" className='table-body'>НМШ-0,3/90</th>
                            <td className='table-body'>00159</td>
                            <td className='table-body'>01.01.2022</td>
                            <td className='table-body'>Davronbek Matvaliyev</td>
                            <td className='table-body'><Link to='/addList' className='btn bg-[#FEAF00;] studentlist__header--end-button'>
                                {t.returnBase}
                            </Link></td>
                        </tr>
                        <tr className='items-center'>
                            <th scope="row" className='table-body'>НМШ-0,3/90</th>
                            <td className='table-body'>00159</td>
                            <td className='table-body'>01.01.2022</td>
                            <td className='table-body'>Davronbek Matvaliyev</td>
                            <td className='table-body'><Link to='/addList' className='btn bg-[#FEAF00;] studentlist__header--end-button'>
                                {t.returnBase}
                            </Link></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default index;