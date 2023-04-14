import React from 'react';
import Scrool from '../../assets/images/scrool.svg'
import Eye from '../../assets/images/eye.svg'
import './index.scss'

const index = () => {
    return (
        <div>
            <div className='studentlist'>
                <div className='studentlist__header'>
                    <h1 className='studentlist__header--title'>
                        Payment Details
                    </h1>
                    <div className='studentlist__header--end'>
                        <img className='studentlist__header--end-scrool' src={Scrool} />
                    </div>     
                </div>
                <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col" className='table-head'>Name</th>
                    <th scope="col" className='table-head'>Payment Schedule</th>
                    <th scope="col" className='table-head'>Bill Number</th>
                    <th scope="col" className='table-head'>Amount Paid</th>
                    <th scope="col" className='table-head'>Balance amount</th> 
                    <th scope="col" className='table-head'>Date </th> 
                    <th scope="col" className='table-head'></th> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row" className='table-body'>Karthi</th>
                    <td className='table-body'>First</td>
                    <td className='table-body'>00012223</td>
                    <td className='table-body'>INR 35,000</td>
                    <td className='table-body'>INR 55,000</td>
                    <td className='table-body'>{new Date().toLocaleDateString().padStart(10, '0')}</td>
                    <td className='table-body'><img className='img' src={Eye}/></td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default index;