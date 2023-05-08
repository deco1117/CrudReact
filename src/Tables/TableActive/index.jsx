import React, { useState, useEffect, useContext } from 'react';
import { context } from '../../context/context';
import { Link } from 'react-router-dom';
import API from "../../api/API";

const index = ({ setMode, setLang }) => {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        API.getActive().then((res) => {
            if (res.status == 200) {
                setData(res.data.data);
            }
        });
    }, []);

    function changeActive(id) {
        API.editRepair(id).then((res) => {
            if (res.status == 200) {
                API.getActive().then((res) => {
                    if (res.status == 200) {
                        setData(res.data.data);
                    }
                });
            }
        });
    }


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
                            <th scope="col" className='table-head'>{t.address}</th>
                            <th scope="col" className='table-head'>{t.dataActivation}</th>
                            <th scope="col" className='table-head'>{t.dataRepair}</th>
                            <th scope="col" className='table-head'>{t.activated}</th>
                            <th scope="col" className='table-head'></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            data.map((item)=> {
                            return  <tr key={item.id} className='items-center'>
                                        <th scope="row" className='table-body'>{item.name}</th>
                                        <td className='table-body'>{item.number}</td>
                                        <td className='table-body'>{item.address}</td>
                                        <td className='table-body'></td>
                                        <td className='table-body'>{item.duration}</td>
                                        <td className='table-body'></td>
                                        <td className='table-body'>
                                            <button onClick={() => changeActive(item.id)} className='btn bg-[#FEAF00;] studentlist__header--end-button'>
                                                {t.repairr}
                                            </button>
                                        </td>
                                    </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default index;