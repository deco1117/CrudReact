import React, { useContext } from 'react';
import { context } from '../../context/context'
import Avatar from '../../assets/images/avatar.png'
import Logo from '../../assets/images/logo.png'
import LogoDark from '../../assets/images/logo-dark.png'
import Home from '../../assets/images/home.svg'
import HomeDark from '../../assets/images/home-dark.svg'
import Base from '../../assets/images/base.svg'
import BaseDark from '../../assets/images/base-dark.svg'
import Repair from '../../assets/images/repair.svg'
import RepairDark from '../../assets/images/repair-dark.svg'
import Active from '../../assets/images/active.svg'
import ActiveDark from '../../assets/images/active-dark.svg'
import User from '../../assets/images/user.svg'
import UserDark from '../../assets/images/user-dark.svg'
import Logout from '../../assets/images/out.svg'
import LogoutDark from '../../assets/images/out-dark.svg'
import Users from '../../assets/images/users.svg'
import UsersDark from '../../assets/images/users-dark.svg'

import './index.scss'
import { Link, NavLink, useNavigate } from 'react-router-dom';

const index = () => {
        
    const { mode, LANG, lang } = useContext(context);
    const t = LANG[lang.toLowerCase()];

    const sidebarStyle = {
        backgroundColor: mode === 'off' ? '#F2EAE1' : '#2c2926',
        color: mode === 'off' ? 'black' : 'white'
    }

    const user = JSON.parse(localStorage.getItem('user'));
    let admin = user.role === 'SuperAdmin';

    const logout = () => {
        console.log('logout');
            window.localStorage.clear();
            let nav = useNavigate();
            nav('/login');
    };


    return (
        <>
            {admin ? (
                <>
                     <div>
                <div className='sidebar' style={sidebarStyle}>
                    <div className="sidebar__top">
                        <img className='ml-[25px]' src={mode === 'off' ? Logo : LogoDark} alt="Logo" />
                    </div>
                    <div className='sidebar__admin'>
                        <img className='sidebar__admin--img' src={Avatar}></img>
                        <h2 className={' font-medium sidebar__admin--name text-[#937846] ' + (mode === 'off' ? 'text-[#000000]' : 'text-[#fff]')}>O'zbekiston temir yo'llari</h2>
                        <h2 className={' mt-[5px] font-medium sidebar__admin--name text-[#937846] ' + (mode === 'off' ? 'text-[#000000]' : 'text-[#fff]')}>{user.station} stansiyasi</h2>
                        <h2 className={' mt-[10px] font-medium sidebar__admin--name' + (mode === 'off' ? 'text-[#000000]' : 'text-[#fff]')}>{user.firstName} {user.secondName}</h2>
                        <h3 className='sidebar__admin--role'>{t.role}</h3>
                    </div>
                    <div className=' flex flex-column items-center gap-[20px] my-[80px] mb-[124px]'>
                        <NavLink to="/" className={' hover:bg-[#FEAF00] hover:rounded-[4px] grid-cols-2 content-start pl-[30px] pt-[8px] w-[193px] h-[41px] '}>
                            <div className=' flex items-center mx-auto gap-[15px]'>
                                <img className='flex ' src={mode === 'off' ? Home : HomeDark} alt="icon" />
                                <p className={'  ' + (mode === 'off' ? 'text-[#000000]' : 'text-[#fff]')}  >{t.home}</p>
                            </div>
                        </NavLink>
                        <NavLink to="/base" className={' hover:bg-[#FEAF00] hover:rounded-[4px] grid-cols-2 content-start pl-[30px] pt-[8px] w-[193px] h-[41px] items-center text-white '}>
                            <div className='mx-auto flex  gap-[15px] '>
                                <img src={mode === 'off' ? Base : BaseDark} alt="icon" />
                                <p className={'  ' + (mode === 'off' ? 'text-[#000000]' : 'text-[#fff]')}  >{t.base}</p>
                            </div>
                        </NavLink>
                        <NavLink to="/active" className={' hover:bg-[#FEAF00] hover:rounded-[4px] grid-cols-2 content-start pl-[30px] pt-[8px] w-[193px] h-[41px] items-center text-white '}>
                            <div className='mx-auto flex gap-[15px] '>
                                <img src={mode === 'off' ? Active : ActiveDark} alt="icon" />
                                <p className={'  ' + (mode === 'off' ? 'text-[#000000]' : 'text-[#fff]')}  >{t.active}</p>
                            </div>
                        </NavLink>
                        <NavLink to="/pay" className={' hover:bg-[#FEAF00] hover:rounded-[4px] grid-cols-2 content-start pl-[30px] pt-[8px] w-[193px] h-[41px] items-center text-white '}>
                            <div className='mx-auto flex gap-[15px] '>
                                <img src={mode === 'off' ? Repair : RepairDark} alt="icon" />
                                <p className={'  ' + (mode === 'off' ? 'text-[#000000]' : 'text-[#fff]')}  >{t.repair}</p>
                            </div>
                        </NavLink>
                        <NavLink to="/user" className={' hover:bg-[#FEAF00] hover:rounded-[4px] grid-cols-2 content-start pl-[30px] pt-[8px] w-[193px] h-[41px] items-center text-white '}>
                            <div className='mx-auto flex gap-[15px]'>
                                <img src={mode === 'off' ? User : UserDark} alt="icon" />
                                <p className={'  ' + (mode === 'off' ? 'text-[#000000]' : 'text-[#fff]')}  >{t.user}</p>
                            </div>
                        </NavLink>
                        <NavLink to="/users" className={' hover:bg-[#FEAF00] hover:rounded-[4px] grid-cols-2 content-start pl-[30px] pt-[8px] w-[193px] h-[41px] items-center text-white '}>
                            <div className='mx-auto flex gap-[15px]'>
                                <img src={mode === 'off' ? Users : UsersDark} alt="icon" />
                                <p className={'  ' + (mode === 'off' ? 'text-[#000000]' : 'text-[#fff]')}  >{t.users}</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className='flex flex-column items-center gap-[20px] mb-[80px]'>
                        <NavLink onClick={()=> logout() } to="/login"  className='hover:bg-[#FEAF00] hover:rounded-[4px] grid-cols-2 content-start pl-[40px] pt-[8px] w-[193px] h-[41px] items-center text-white'>
                            <div className='mx-auto flex gap-[15px] fill-current '>
                            <p className={'  ' + (mode === 'off' ? 'text-[#000000]' : 'text-[#fff]')}  >{t.logout}</p>
                                <img src={mode === 'off' ? Logout : LogoutDark} alt="icon" />
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
                </>
                ) : (
                <>
                 <div>
                <div className='sidebar' style={sidebarStyle}>
                    <div className="sidebar__top">
                        <img className='ml-[25px]' src={mode === 'off' ? Logo : LogoDark} alt="Logo" />
                    </div>
                    <div className='sidebar__admin'>
                    <img className='sidebar__admin--img' src={Avatar}></img>
                        <h2 className={' font-medium sidebar__admin--name text-[#937846] ' + (mode === 'off' ? 'text-[#000000]' : 'text-[#fff]')}>O'zbekiston temir yo'llari</h2>
                        <h2 className={' mt-[5px] font-medium sidebar__admin--name text-[#937846] ' + (mode === 'off' ? 'text-[#000000]' : 'text-[#fff]')}>{user.station} stansiyasi</h2>
                        <h2 className={' mt-[10px] font-medium sidebar__admin--name' + (mode === 'off' ? 'text-[#000000]' : 'text-[#fff]')}>{user.firstName} {user.secondName}</h2>
                        <h3 className='sidebar__admin--role'>{t.role}</h3>
                    </div>
                    <div className='flex flex-column items-center gap-[20px] my-[80px] mb-[124px]'>
                        <NavLink to="/home" className={' grid-cols-2 content-start pl-[40px] pt-[8px] w-[193px] h-[41px] '}>
                            <div className=' flex items-center mx-auto gap-[15px]'>
                                <img className='flex ' src={mode === 'off' ? Home : HomeDark} alt="icon" />
                                <p className={'  ' + (mode === 'off' ? 'text-[#000000]' : 'text-[#fff]')}  >{t.home}</p>
                            </div>
                        </NavLink>
                        <NavLink to="/base" className={' grid-cols-2 content-start pl-[40px] pt-[8px] w-[193px] h-[41px] items-center text-white '}>
                            <div className='mx-auto flex  gap-[15px] '>
                                <img src={mode === 'off' ? Base : BaseDark} alt="icon" />
                                <p className={'  ' + (mode === 'off' ? 'text-[#000000]' : 'text-[#fff]')}  >{t.base}</p>
                            </div>
                        </NavLink>
                        <NavLink to="/active" className={' grid-cols-2 content-start pl-[40px] pt-[8px] w-[193px] h-[41px] items-center text-white '}>
                            <div className='mx-auto flex gap-[15px] '>
                                <img src={mode === 'off' ? Active : ActiveDark} alt="icon" />
                                <p className={'  ' + (mode === 'off' ? 'text-[#000000]' : 'text-[#fff]')}  >{t.active}</p>
                            </div>
                        </NavLink>
                        <NavLink to="/pay" className={' grid-cols-2 content-start pl-[40px] pt-[8px] w-[193px] h-[41px] items-center text-white '}>
                            <div className='mx-auto flex gap-[15px] '>
                                <img src={mode === 'off' ? Repair : RepairDark} alt="icon" />
                                <p className={'  ' + (mode === 'off' ? 'text-[#000000]' : 'text-[#fff]')}  >{t.repair}</p>
                            </div>
                        </NavLink>
                        <NavLink to="/user" className={' grid-cols-2 content-start pl-[40px] pt-[8px] w-[193px] h-[41px] items-center text-white '}>
                            <div className='mx-auto flex gap-[15px]'>
                                <img src={mode === 'off' ? User : UserDark} alt="icon" />
                                <p className={'  ' + (mode === 'off' ? 'text-[#000000]' : 'text-[#fff]')}  >{t.user}</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className='flex flex-column items-center gap-[20px] mb-[80px]'>
                        <button onClick={()=> logout() } className=' grid-cols-2 content-start pl-[40px] pt-[8px] w-[193px] h-[41px] items-center text-white '>
                            <div  className='mx-auto flex gap-[15px] fill-current '>
                            <p className={'  ' + (mode === 'off' ? 'text-[#000000]' : 'text-[#fff]')}  >{t.logout}</p>
                                <img src={mode === 'off' ? Logout : LogoutDark} alt="icon" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
                </> 
                )}
           
        </>
    );
};

export default index;