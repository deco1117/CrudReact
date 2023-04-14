import React from 'react';
import Sidebar from '../../companents/Sidebar'
import Header from '../../companents/Header' 
import Dashboard from '../../companents/Dashboard'
import './index.scss'

const index = () => {
    return (
        <div>
            <div className='container home'>
                <div className='grid-container'>
                    <div className='bar'>
                        <Sidebar/>   
                    </div>
                    <div className='hd'>
                        <Header/>
                        <Dashboard/> 
                    </div>
                    
                    
                </div>
            </div>

        </div>
    );
};

export default index;