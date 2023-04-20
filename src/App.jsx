import React, {useState} from 'react';
import Home from './pages/Home'
import Base from './pages/Base'
import Students from './pages/Students'
import Pay from './pages/Pay'
import Login from './pages/Login'
import Header from './companents/Header'
import Sidebar from './companents/Sidebar'
import Error from './pages/Error'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { context } from './context/context';
import LANG from './lang/lang';
import AddList from './pages/Base/AddList';

function App (props) {

  const [lang, setLang] = useState(localStorage.getItem('languages') || 'uz');
  const [mode, setMode] = useState('off' || localStorage.getItem('theme', 'off'));


  return (
    <div>
 
          <context.Provider value = {{lang, mode, LANG}}>
          <div className='app container'>
            <Sidebar/>
              <div>
                <Header setLang = {setLang} setMode = {setMode}/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/base' element={<Base/>}/>
                    
                        <Route path='/addList' element={<AddList/>}/>
              
                    <Route path='/students' element={<Students/>}/>
                    <Route path='/pay' element={<Pay/>}/>
                    <Route path='*' element={<Error/>}/>
                </Routes>
              </div>
          </div>
          </context.Provider>
          

    </div>
  );
};

export default App; 