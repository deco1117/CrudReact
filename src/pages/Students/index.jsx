import React from 'react';
import Sidebar from '../../companents/Sidebar'
import Header from '../../companents/Header' 
import StudentList from '../../companents/StudentList'
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
                        <StudentList/> 
                    </div>
                    
                    
                </div>
            </div>

        </div>
    );
};

export default index;