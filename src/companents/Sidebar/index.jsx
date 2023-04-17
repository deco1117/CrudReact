import React from 'react';
import Avatar from '../../assets/images/avatar.png'
import './index.scss'
import { Link } from 'react-router-dom';

const index = () => {
    return (
        <>
            <div>
                <div className='sidebar'>
                    <div className="sidebar__top">
                        <span className='sidebar__top--line'></span>
                        <h1 className='sidebar__top--title'>CRUD OPERATIONS</h1>
                    </div>
                    <div className='sidebar__admin'>
                        <img className='sidebar__admin--img' src={Avatar}></img>
                        <h2 className='sidebar__admin--name'>Karthi Madesh</h2>
                        <h3 className='sidebar__admin--role'>Admin</h3>
                    </div>
                    <ul className='sidebar__nav'>
                            <Link to="/home" className='sidebar__nav--button'>
                            <p className='sidebar__nav--button-home' >Home</p>
                            </Link>
                            <button className='sidebar__nav--button'>
                            <p className='sidebar__nav--button-course' >Course</p>
                            </button>
                            <Link to='/students' className='sidebar__nav--button'>
                            <p className='sidebar__nav--button-students' >Students</p>
                            </Link>
                            <Link to='/pay' className='sidebar__nav--button'>
                            <p className='sidebar__nav--button-payment' >Payment</p>
                            </Link>
                            <button className='sidebar__nav--button'>
                            <p className='sidebar__nav--button-report' >Report</p>
                            </button>
                            <button className='sidebar__nav--button'>
                            <p className='sidebar__nav--button-setting' >Settings</p>
                            </button>
                            
                        
                    </ul>
                    <Link to='/' className='sidebar__footer'>
                            <p className='sidebar__footer--logout' >Logout</p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default index;