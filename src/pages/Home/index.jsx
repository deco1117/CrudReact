import React from 'react';
import Dashboard from '../../companents/Dashboard'
import './index.scss'
import Sidebar from '../../companents/Sidebar'
import Header from '../../companents/Header'
import TableWarning from '../../Tables/TableWarning'

const index = () => {
    return (
        <>
            <div>
                <Dashboard />
                <TableWarning/>
            </div>
        </>
    );
};

export default index;