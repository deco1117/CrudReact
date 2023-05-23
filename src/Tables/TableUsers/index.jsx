import React, { useState, useContext, useEffect } from 'react';
import { context } from '../../context/context';
import { Link } from 'react-router-dom';
import Loader from '../../UI/Loader';
import postcss from 'postcss';

const index = ({ setMode, setLang }) => {

    const {mode, LANG, lang } = useContext(context);


    const t = LANG[lang.toLowerCase()];


    const theme = mode? 'off' : 'on';

    const headerStyle={
        backgroundColor: mode ==='off' ? 'white' : 'black',
    }
    let status = true;

   const [data, setData] = useState([]);
   const [load, setLoad] = useState(false);

   const fetchData = async() => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await response.json()
        if(response.status === 200){
            setData(result);
            setLoad(true);
        }
    }catch(err){
        console.log(err);
    }
 }

 useEffect(()=>{
    fetchData();
 },[])

 if(!load){
    return<Loader/>
 }

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
                   {data?.map((data) =>{
                            return<tbody>
                                <tr className='items-center'>
                                    <th scope="row" className='table-body'>{data.username}</th>
                                    <td className='table-body'>{data.name}</td>
                                    <td className='table-body'>{data.phone}</td>
                                    <td className='table-body'>
                                        {status ? <button className='btn btn-danger'>{t.deactivate}</button> : <button to='' className='btn btn-success '>{t.actived}</button>} 
                                    </td>
                                </tr>
                            </tbody>
                            
                        })
                   }
                </table>
            </div>
        </>
    );
};

export default index;