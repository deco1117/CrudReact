import React, {useState} from 'react';
import Home from './pages/Home'
import Students from './pages/Students'
import Pay from './pages/Pay'
import Login from './pages/Login'
import Error from './pages/Error'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { context } from './context';

const App = () => {



  return (
    <div>
      
          <context.Provider >
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/students' element={<Students/>}/>
                <Route path='/pay' element={<Pay/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
          </context.Provider>

    </div>
  );
};

export default App; 