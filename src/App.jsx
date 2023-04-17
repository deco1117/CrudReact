import React, {useState} from 'react';
import Home from './pages/Home'
import Students from './pages/Students'
import Pay from './pages/Pay'
import Login from './pages/Login'
import Header from './companents/Header'
import Sidebar from './companents/Sidebar'
import Error from './pages/Error'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { context } from './context';

const App = () => {

const [mode, sttMode] = useState('');

  return (
    <div>

          <context.Provider value={(mode)} >
          <div className='app container'>
            <Sidebar/>
              <div>
                <Header/>
                <Routes>
                    <Route path='/home' element={<Home/>}/>
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