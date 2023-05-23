import React, { useContext, useEffect, useState } from 'react';
import { context } from '../../context/context'
import Base from '../../assets/images/home-base.svg'
import Active from '../../assets/images/home-active.svg'
import Repair from '../../assets/images/home-repair.svg'
import Bell from '../../assets/images/home-bell.svg'
import './index.scss'
import Loader from '../../UI/Loader'
import { Link } from 'react-router-dom';
import API from '../../api/API';

const index = () => {

    const { mode, LANG, lang } = useContext(context);

    const t = LANG[lang.toLowerCase()];
    const [post, setPost] = useState([]);
    const [load, setLoad] = useState(false);

    const [data, setData] = useState([]);
    
    useEffect(() => {
        API.getStore().then((res) => {
            if (res.status == 200) {
                setData(res.data.data);
            }
        });
        
    }, []);


    const fetchPost = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const result = await response.json()
            if (response.status === 200) {
                setPost(result);
                setLoad(true);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchPost();

    }, [])

    if (!load) {
        return <Loader />
    }

    return (
        <div>
            <div className='home'>
                <div className='home__wrapper'>
                    <Link to='/base' className='home__wrapper--stud'>
                        <img className='home__wrapper--stud-img' src={Base} />
                        <p className='home__wrapper--stud-title'>{t.base}</p>
                        <p className='home__wrapper--stud-text'>{data.length}</p>
                    </Link>
                    <Link to='active' className='home__wrapper--course'>
                        <img className='home__wrapper--course-img' src={Active} />
                        <p className='home__wrapper--course-title'>{t.active}</p>
                        <p className='home__wrapper--course-text'>13 </p>
                    </Link>
                    <Link to='/pay' className='home__wrapper--pay'>
                        <img className='home__wrapper--pay-img' src={Repair} />
                        <p className='home__wrapper--pay-title'>{t.repair}</p>
                        <p className='home__wrapper--pay-text'>{post.length}</p>
                    </Link>
                    <div className='home__wrapper--user'>
                        <img className='home__wrapper--user-img' src={Bell} />
                        <p className='home__wrapper--user-title'>{t.warning}</p>
                        <p className='home__wrapper--user-text'>3</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;