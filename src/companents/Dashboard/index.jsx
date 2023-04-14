import React from 'react';
import CardStud from '../../assets/images/card-stud.svg'
import CardCourse from '../../assets/images/card-course.svg'
import CardPay from '../../assets/images/card-payment.svg'
import CardUser from '../../assets/images/card-user.svg'
import './index.scss'

const index = () => {
    return (
        <div>
            <div className='home'>
                <div className='home__wrapper'>
                    <div className='home__wrapper--stud'>
                            <img className='home__wrapper--stud-img' src={CardStud} />
                            <p className='home__wrapper--stud-title'>Students</p>
                            <p className='home__wrapper--stud-text'>243</p>
                    </div>
                    <div className='home__wrapper--course'>
                            <img className='home__wrapper--course-img' src={CardCourse} />
                            <p className='home__wrapper--course-title'>Course</p>
                            <p className='home__wrapper--course-text'>13 </p>
                    </div>
                    <div className='home__wrapper--pay'>
                            <img className='home__wrapper--pay-img' src={CardPay} />
                            <p className='home__wrapper--pay-title'>Payments</p>
                            <p className='home__wrapper--pay-text'>INR 556,000</p>
                    </div>
                    <div className='home__wrapper--user'>
                            <img className='home__wrapper--user-img' src={CardUser} />
                            <p className='home__wrapper--user-title'>Users</p>
                            <p className='home__wrapper--user-text'>3</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;