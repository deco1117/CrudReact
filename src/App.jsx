import React, {useState} from 'react';
import Home from './pages/Home'
import Base from './pages/Base'
import Active from './pages/Active'
import Repair from './pages/Repair'
import Login from './pages/Login'
import Header from './companents/Header'
import Sidebar from './companents/Sidebar'
import Error from './pages/Error'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { context } from './context/context';
import LANG from './lang/lang';
import AddList from './pages/Base/AddList';
import AddAcrive from './pages/Active/AddActive';
import User from './pages/User';
import Registr from './pages/Login/Registr';
import EditUser from './pages/User/EditUser';
import Users from './pages/Users'


function App (props) {

  const [lang, setLang] = useState(localStorage.getItem('languages') || 'uz');
  const [mode, setMode] = useState('off' || localStorage.getItem('theme', 'off'));
  const isLoggedIn =  localStorage.getItem('isLoggedIn') == 'true';

  return (
    <div>
 
          <context.Provider value = {{lang, mode, LANG, isLoggedIn}}>
          {/* <Registr/>     */}
         
          {/* { isLoggedIn ? ( */}
          <div className='app container'>
            <Sidebar/>
              <div>
                <Header setLang = {setLang} setMode = {setMode}/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/base' element={<Base/>}/>
                        <Route path='/addList' element={<AddList/>}/>
                    <Route path='/active' element={<Active/>}/>
                        <Route path='/addActive' element={<AddAcrive/>}/>
                    <Route path='/pay' element={<Repair/>}/>
                    <Route path='/user' element={<User/>}/>
                    <Route path='/users' element={<Users/>}/>
                        <Route path='/editUser' element={<EditUser/>}/>
                    <Route path='*' element={<Error/>}/>
                </Routes>
              </div>
          </div>
          {/* ) :  <Login/> } */}
          </context.Provider>
          

    </div>
  );
};

export default App; 