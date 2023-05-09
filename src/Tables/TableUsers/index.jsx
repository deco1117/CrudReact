import React, { useState, useContext } from 'react';
import { context } from '../../context/context';
import { Link } from 'react-router-dom';

const index = ({ setMode, setLang }) => {

    const {mode, LANG, lang } = useContext(context);


    const t = LANG[lang.toLowerCase()];


    const theme = mode? 'off' : 'on';

    const headerStyle={
        backgroundColor: mode ==='off' ? 'white' : 'black',
    }

  

    let status = true;

    return (
        <>
            <div className="">
                <table class="table table-striped mt-20">
                    <thead>
                        <tr>
                            <th scope="col" className='table-head'>{t.name}</th>
                            <th scope="col" className='table-head'>{t.sname}</th>
                            <th scope="col" className='table-head'>{t.phone}</th>
                            <th scope="col" className='table-head'>{t.status}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='items-center'>
                            <th scope="row" className='table-body'></th>
                            <td className='table-body'></td>
                            <td className='table-body'></td>
                            <td className='table-body'>
                                {status ? <button className='btn btn-danger'>{t.deactivate}</button> : <button to='' className='btn btn-success '>{t.actived}</button>} 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default index;