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

   let users = {
    id: 1,
    fname:'Matvaliyev',
    sname:'Davronbek',
    lname:"Abdulhoshim o'g'i",
    sation:'Elektromexanik',
    position:'Chuqursoy',
    phone: +998903591117,
    staus:false,
   }



    return (
        <div>
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
                            <th scope="row" className='table-body'>{users.fname}</th>
                            <td className='table-body'>{users.sname}</td>
                            <td className='table-body'>{users.phone}</td>
                            <td className='table-body'>
                                {status ? <Link to='' className='btn btn-danger'>{t.deactivate}</Link>:<Link to='' className='btn btn-success '>{t.actived}</Link>} 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default index;