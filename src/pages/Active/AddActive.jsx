import React, { useState, useContext } from 'react';
import { context } from '../../context/context';
import { Link } from 'react-router-dom';
import TableActive from '../../Tables/TableActive'
import { Formik } from 'formik';
import * as Yup from 'yup'

const AddList = () => {

    const {mode, LANG, lang } = useContext(context);


    const t = LANG[lang.toLowerCase()];


    const theme = mode? 'off' : 'on';

    const headerStyle={
        backgroundColor: mode ==='off' ? 'white' : 'black',
        color: mode==='off' ? 'black' : 'white'
    }

    return (
        <>
            <div className='bg-[#F8F8F8] pt-4 h-[100vh]'>
                <div className=" wrapper w-[1088px] px-[43px] py-[15px] rounded-[20px] ml-[30px] bg-[#EEEEEE] drop-shadow-md" >


                <Formik initialValues={{
                        select:"",
                        address: ""

                    }}
                    validationSchema={Yup.object({
                        
                        address: Yup.string().max(5, "Faqat bechtagacha belgi kiritish mumkin").required("Maydonni to'ldiring!"),
                    })}
                    onSubmit={(values)=>{
                    }}
                    >
                        {({values, errors, handleSubmit, handleChange, touched})=>{
                            console.log(errors)
                            return( <form className='' onSubmit={handleSubmit}>
                                    
                                    <select onChange={handleChange} name="select" id="" className='form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 '>
                                        <option selected disabled >{t.selectRele}</option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                    </select>
                                    {errors.select && touched.select && <p className=' text-red-600 text-xs'>{errors.select}</p>}

                                    <label className='mt-2'>{t.address}</label>
                                    <input onChange={handleChange} name='address' className='form-control' type='text' placeholder={t.address}/>
                                    {errors.address && touched.address && <p className=' text-red-600 text-xs'>{errors.address}</p>}
                                    <button type='submit'  className='mt-4 btn w-100 btn-primary bg-[#FEAF00] '>{t.actived}</button>  
                            </form>
                            )
                        }}

                    </Formik>

                </div>
                <TableActive/>
            </div>
        </>
    );
};

export default AddList;