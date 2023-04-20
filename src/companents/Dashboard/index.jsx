import React, { useContext } from 'react';
import { context } from '../../context/context'
import Base  from '../../assets/images/home-base.svg'
import Active from '../../assets/images/home-active.svg'
import Repair from '../../assets/images/home-repair.svg'
import Bell from '../../assets/images/home-bell.svg'
import './index.scss'

const index = () => {

    const { mode, LANG, lang } = useContext(context);

    const t = LANG[lang.toLowerCase()];

    return (
        <div>
            <div className='home'>
                <div className='home__wrapper'>
                    <div className='home__wrapper--stud'>
                            <img className='home__wrapper--stud-img' src={Base} />
                            <p className='home__wrapper--stud-title'>{t.base}</p>
                            <p className='home__wrapper--stud-text'>243</p>
                    </div>
                    <div className='home__wrapper--course'>
                            <img className='home__wrapper--course-img' src={Active} />
                            <p className='home__wrapper--course-title'>{t.active}</p>
                            <p className='home__wrapper--course-text'>13 </p>
                    </div>
                    <div className='home__wrapper--pay'>
                            <img className='home__wrapper--pay-img' src={Repair} />
                            <p className='home__wrapper--pay-title'>{t.repair}</p>
                            <p className='home__wrapper--pay-text'>INR 556,000</p>
                    </div>
                    <div className='home__wrapper--user'>
                            <img className='home__wrapper--user-img' src={Bell} />
                            <p className='home__wrapper--user-title'>{t.warning}</p>
                            <p className='home__wrapper--user-text'>3</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;