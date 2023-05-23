import React, { useState, useContext, useEffect } from 'react';
import { context } from '../../context/context';
import { Link } from 'react-router-dom';
import API from '../../api/API';
import Loader from '../../UI/Loader'

const index = ({ setMode, setLang }) => {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        API.getRepair().then((res) => {
            if (res.status == 200) {
                setData(res.data.data);
            }
        });
        
    }, []);


    const { mode, LANG, lang } = useContext(context);


    const t = LANG[lang.toLowerCase()];


    const theme = mode ? 'off' : 'on';

    const headerStyle = {
        backgroundColor: mode === 'off' ? 'white' : 'black',
        color: mode === 'off' ? 'black' : 'white'
    }

    const [post, setPost] = useState([])
    const [load, setLoad] = useState(false);

 const fetchPost = async()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const result = await response.json()
        if(response.status === 200){
            setPost(result);
            setLoad(true);
        }
    }catch(err){
        console.log(err);
    }
 }

    useEffect(()=>{
        fetchPost();
    },[])

    if(!load){
        return <Loader />
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
                   {
                    post?.map((post) =>{
                        return(
                            <tbody>
                            <tr className='items-center'>
                                <th scope="row" className='table-body'>НМШ-0,3/90</th>
                                <td className='table-body'>{post.id}</td>
                                <td className='table-body'>{post.title}</td>
                                <td className='table-body'>{post.body}</td>
                                <td className='table-body'><Link to='/addList' className='btn bg-[#FEAF00;] studentlist__header--end-button'>
                                    {t.returnBase}
                                </Link></td>
                            </tr>
                        </tbody>
                        )
                    })
                   }
                </table>
            </div>
        </div>
    );
};

export default index;