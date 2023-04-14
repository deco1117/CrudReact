import React from 'react';
import Logo from '../../assets/images/logo.png';
import './index.scss';
import { Link } from 'react-router-dom';

const index = () => {
    return (
        <div>
            <main>
                <div className='container'>
                    <div className='login'>
                        <div className='login__card'>
                            <div className='login__card--header'>
                                <img className='login__card--header-logo' src={Logo}/>
                                <h1 className='login__card--header-title'>Sign In</h1>
                                <p className='login__card--header-text'>Enter your credentials to access your account</p>
                            </div>
                            <form className='login__card--form w-100'>
                                <div className='login__card--form--group'>
                                    <label className='  login__card--form--group-label'>Email</label>
                                    <input className='form-control login__card--form--group-input' type='email' placeholder='Email'/>
                                </div>
                                <div className='login__card--form-group mb-4'>
                                    <label className='login__card--form--group-label'>Password</label>
                                    <input className='form-control login__card--form--group-input' type='password' placeholder='Password'/>
                                </div>
                                <div className='login__card--form-group'>
                                    <Link to='/home'  className='btn w-100 btn-primary login__card--form--group-button'>Sign In</Link>
                                </div>
                            </form>
                            <div className='login__card--footer'>
                                <p className='login__card--footer-text'>Don't have an account? <a className='login__card--footer-text-link' href='/signup'>Sign Up</a></p>
                                <p className='login__card--footer-text'>Forgot your password? <a className='login__card--footer-text-link' href='/login'>Reset Password</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default index;