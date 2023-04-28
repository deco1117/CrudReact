import React from 'react';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup'

const index = () => {



    return (
        <div>
            <div className=' bg-[#FEAF00] h-[100vh]'>
                <div className='container'>
                    <div className='pt-[175px] '>
                        <div className=' mx-auto w-[475px] p-[30px] bg-[#FFFFFF] rounded-[20px] shadow-[2px 5px 10px ;]'>
                            <img className='' src={Logo}/>
                            <div className='flex flex-col gap-[10px] mt-[38px] items-center'>      
                                <h1 className=' font-semibold text-[#000000] text-[22px] w- '>KIRISH</h1>
                                <p className='text-[#6C6C6C] text-[14px] font-normal '>Kirish uchun hisob ma'lumotlaringizni kiriting</p>
                            </div>
                            <Formik initialValues={{
                                phoneNumber: '',
                                password: '',
                            }}
                            
                            validationSchema={Yup.object({
                                
                                phoneNumber: Yup.number().required("Maydonni to'ldiring!").typeError("Iltimos telefon raqamini kiriting").positive('Telefon raqami minus ishorasi bilan boshlanmaydi').min(9),
                                password: Yup.string().min(6, "Parol kamida oltita belgidan iborat bo'lishi kerak").required("Maydonni to'ldiring!").matches(/[a-zA-Z]/, 'Parol faqat lotin harflaridan iborat bolishi kerak')
                            })}
                            onSubmit={(values)=>{

                            }}
                            
                            >
                                {({values, errors, handleSubmit, handleChange, touched})=>{
                               return( <form className='mt-[50px]' onSubmit={handleSubmit}>
                                        <label className='text-[14px] font-medium text-[#6C6C6C] '>Telefon raqamingizni kiriting</label>
                                        <input className='form-control border-[#FEAF00]' type='tel' placeholder='+998' name='phoneNumber' onChange={handleChange} value={values.phoneNumber}/>
                                        {errors.phoneNumber && touched.phoneNumber && <p className=' text-red-600 text-xs'>{errors.phoneNumber}</p>}

                                        <label className='mt-[20px] text-[14px] font-medium text-[#6C6C6C]'>Parolingizni kiriting</label>
                                        <input className='form-control border-[#FEAF00]' type='password' placeholder='Parol' name='password' onChange={handleChange} value={values.password}/>
                                        {errors.password && touched.password && <p className=' text-red-600 text-xs'>{errors.password}</p>}
                                        <button to='/home' type='submit' className='btn w-100 bg-[#FEAF00] mt-[30px]'>KIRISH</button>
                                </form> 
                                )          
                                }}
                            </Formik>
                            
                            <div className='mt-[16px]'>
                                <p className='text-[14px] font-normal text-[#6C6C6C] '>Siz hali ro'yhatdan o'tmaganmisiz?<a className='ml-2 text-[14px] text-[#FEAF00] font-medium' href='/signup'>Ro'yhatdan o'tish</a></p>
                                <p className='text-[14px] font-normal text-[#6C6C6C]'>Parolingizni unutdingizmi? <a className='ml-2 text-[14px] text-[#FEAF00] font-medium' href='/login'>Parolni tiklash</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;