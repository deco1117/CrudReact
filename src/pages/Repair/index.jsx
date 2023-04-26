import React, { useState, useContext } from 'react';
import { context } from '../../context/context';
import TableRepair from '../../Tables/TableRepair'

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
            <div className='bg-[#F8F8F8] px-[30px] h-[100vh]'>
                <div className=' '>
                    <div className='border-b-2 py-3'>
                        <h1 className=' text-xl font-medium'>
                            {t.repair}
                        </h1>
                    </div>
                    <form className='mt-[17px]' action="#">
                        <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 ' name="typeRele" id="">
                            <option selected disabled>{t.selectRele}</option>
                            <option></option>
                            <option></option>
                        </select>
                    </form>
                </div>
                <TableRepair />
            </div>
        </>
    );
};

export default index;