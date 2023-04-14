import React from 'react';
import Scrool from '../../assets/images/scrool.svg'
import Miniavatar from '../../assets/images/miniavatar.png'
import Edit from '../../assets/images/edit.svg'
import Del from '../../assets/images/del.svg'
import './index.scss'

const index = () => {
    return (
        <div>
            <div className='studentlist'>
                <div className='studentlist__header'>
                    <h1 className='studentlist__header--title'>
                        Students List
                    </h1>
                    <div className='studentlist__header--end'>
                        <img className='studentlist__header--end-scrool' src={Scrool} />
                        <button className='studentlist__header--end-button'>
                            ADD NEW STUDENT
                        </button>
                    </div>     
                </div>
                <div className='studentlist__table'>
                    <div className='studentlist__table--body'>
                        <h6 className='studentlist__table--body-title'>
                            Name
                        </h6>
                        <h6 className='studentlist__table--body-title'>
                            Email
                        </h6>
                        <h6 className='studentlist__table--body-title'>
                            Phone
                        </h6>
                        <h6 className='studentlist__table--body-title'>
                            Enroll Number
                        </h6>
                        <h6 className='studentlist__table--body-title'>
                            Date of admission
                        </h6>
                    </div>
                    <div className='studentlist__table--card'>
                        <img className='studentlist__table--card-img' src={Miniavatar} />
                        <p className='studentlist__table--card-name'>
                            Karthi
                        </p>
                        <p className='studentlist__table--card-email'>
                            karthi@gmmail.com
                        </p>
                        <p className='studentlist__table--card-phone'>
                            7305477760
                        </p>
                        <p className='studentlist__table--card-enroll'>
                            1234567305477760
                        </p>
                        <p className='studentlist__table--card-date'>
                            {new Date().toLocaleDateString().padStart(10, '0')}
                        </p>
                        <img className='studentlist__table--card-edit' src={Edit} />
                        <img className='studentlist__table--card-del' src={Del} />
                    </div>
                    <div className='studentlist__table--card'>
                        <img className='studentlist__table--card-img' src={Miniavatar} />
                        <p className='studentlist__table--card-name'>
                            Karthi
                        </p>
                        <p className='studentlist__table--card-email'>
                            karthi@gmmail.com
                        </p>
                        <p className='studentlist__table--card-phone'>
                            7305477760
                        </p>
                        <p className='studentlist__table--card-enroll'>
                            1234567305477760
                        </p>
                        <p className='studentlist__table--card-date'>
                            {new Date().toLocaleDateString().padStart(10, '0')}
                        </p>
                        <img className='studentlist__table--card-edit' src={Edit} />
                        <img className='studentlist__table--card-del' src={Del} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;