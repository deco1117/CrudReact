import React, { useContext } from 'react';
import { context } from '../../context/context'
import Avatar from '../../assets/images/avatar.png'
import Logo from '../../assets/images/logo.png'
import LogoDark from '../../assets/images/logo-dark.png'
import Home from '../../assets/images/home.svg'
import HomeDark from '../../assets/images/home-dark.svg'


import './index.scss'
import { Link, NavLink } from 'react-router-dom';

const index = () => {
    const { mode } = useContext(context);

    const sidebarStyle = {
        backgroundColor: mode === 'off' ? '#F2EAE1' : '#2c2926',
        color: mode === 'off' ? 'black' : 'white'
    }

    return (
        <>
            <div>
                <div className='sidebar' style={sidebarStyle}>
                    <div className="sidebar__top">
                        <img src={mode === 'off' ? Logo : LogoDark} alt="Logo" />
                    </div>
                    <div className='sidebar__admin'>
                        <img className='sidebar__admin--img' src={Avatar}></img>
                        <h2 className={' mt-[27px] font-normal text-xl font-medium sidebar__admin--name' + (mode === 'off' ? 'text-[#000000]' : 'text-[#fff]')}>Karthi Madesh</h2>
                        <h3 className='sidebar__admin--role'>Admin</h3>
                    </div>
                    <div className='flex flex-column items-center gap-[20px] my-[80px] mb-[124px]'>
                        <NavLink to="/home" className={' grid-cols-2 content-start pl-[53px] pt-[8px] w-[193px] h-[41px] '}>
                            <div className=' flex items-center mx-auto gap-[15px]'>
                                <img className='flex ' src={mode === 'off' ? Home : HomeDark} alt="icon" />
                                <p className={'  ' + (mode === 'off' ? 'text-[#000000]' : 'text-[#fff]')}  >Home</p>
                            </div>
                        </NavLink>
                        <NavLink to="/course" className={' grid-cols-2 content-start pl-[53px] pt-[8px] w-[193px] h-[41px] items-center text-white '}>
                            <div className='mx-auto flex  gap-[15px] '>
                                <img src={mode === 'off' ? Home : HomeDark} alt="icon" />
                                <p className={'  ' + (mode === 'off' ? 'text-[#000000]' : 'text-[#fff]')}  >Course</p>
                            </div>
                        </NavLink>
                        <NavLink to="/students" className={' grid-cols-2 content-start pl-[53px] pt-[8px] w-[193px] h-[41px] items-center text-white '}>
                            <div className='mx-auto flex gap-[15px] '>
                                <img src={mode === 'off' ? Home : HomeDark} alt="icon" />
                                <p className={'  ' + (mode === 'off' ? 'text-[#000000]' : 'text-[#fff]')}  >Students</p>
                            </div>
                        </NavLink>
                        <NavLink to="/pay" className={' grid-cols-2 content-start pl-[53px] pt-[8px] w-[193px] h-[41px] items-center text-white '}>
                            <div className='mx-auto flex gap-[15px] '>
                                <img src={mode === 'off' ? Home : HomeDark} alt="icon" />
                                <p className={'  ' + (mode === 'off' ? 'text-[#000000]' : 'text-[#fff]')}  >Payment</p>
                            </div>
                        </NavLink>
                        <NavLink to="/report" className={' grid-cols-2 content-start pl-[53px] pt-[8px] w-[193px] h-[41px] items-center text-white '}>
                            <div className='mx-auto flex gap-[15px]'>
                                <img src={mode === 'off' ? Home : HomeDark} alt="icon" />
                                <p className={'  ' + (mode === 'off' ? 'text-[#000000]' : 'text-[#fff]')}  >Report</p>
                            </div>
                        </NavLink>
                        <NavLink to="/setting" className={' grid-cols-2 content-start pl-[53px] pt-[8px] w-[193px] h-[41px] items-center text-white '}>
                            <div className='mx-auto flex gap-[15px] '>
                                <img src={mode === 'off' ? Home : HomeDark} alt="icon" />
                                <p className={'  ' + (mode === 'off' ? 'text-[#000000]' : 'text-[#fff]')}  >Settings</p>
                            </div>
                        </NavLink>


                    </div>
                    <div className='flex flex-column items-center gap-[20px] mb-[80px]'>
                        <NavLink to="/" className={' grid-cols-2 content-start pl-[53px] pt-[8px] w-[193px] h-[41px] items-center text-white '}>
                            <div className='mx-auto flex gap-[15px] fill-current '>
                                <img src={mode === 'off' ? Home : HomeDark} alt="icon" />
                                <p className={'  ' + (mode === 'off' ? 'text-[#000000]' : 'text-[#fff]')}  >Logout</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;