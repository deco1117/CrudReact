import React, { useState, useContext } from 'react';
import { context } from '../../context/context';
import { Link } from 'react-router-dom';
import TableBase from '../../Tables/TableBase'
import { Formik } from 'formik';
import * as Yup from "yup"

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
        
            <div className='bg-[#F8F8F8] pt-4'>
                <div className="wrapper w-[1088px] px-[43px] py-[15px] rounded-[20px] ml-[30px] bg-[#EEEEEE] drop-shadow-md" >
                    
                    <Formik initialValues={{
                        name:"",
                        id: "",
                        date: "",
                        month: "",

                    }}
                    validationSchema={Yup.object({
                        name: Yup.string().min(3, "Uchtadan ko'p belgi kiritish zarur!").required("Maydonni to'ldiring!"),
                        id: Yup.string().min(3, "Uchtadan ko'p belgi kiritish zarur!").required("Maydonni to'ldiring!"),
                        date: Yup.date().required("Maydonni to'ldiring!"),
                        month: Yup.string().required("Maydonni to'ldiring!").max(2, "Faqat ikki xonali son kiritish mumkin!"),
                    })}
                    onSubmit={(values)=>{
                    }}
                    >
                        {({values, errors, handleSubmit, handleChange, touched})=>{
                            console.log(errors)
                            return( <form className='' onSubmit={handleSubmit}>  

                                    <label className=''>{t.typeRele}</label>
                                    <input className='form-control' type='text' name='name' placeholder={t.typeRele} onChange={handleChange} value={values.name }/>
                                    {errors.name && touched.name && <p className=' text-red-600 text-xs'>{errors.name}</p>} 

                                    <label className='mt-2'>ID</label>
                                    <input className='form-control' type='text' name='id' placeholder='ID' onChange={handleChange} value={values.id }/>
                                    {errors.id && touched.id && <p className=' text-red-600 text-xs'>{errors.id}</p>}

                                    <label className='mt-2'>{t.manufacturedDate}</label>
                                    <input className='form-control' type='date' name='date' onChange={handleChange} value={values.date }/>
                                    {errors.date && touched.date && <p className=' text-red-600 text-xs'>{errors.date}</p>}

                                    <label className='mt-2'>{t.term}</label>
                                    <input className='form-control' type='number' name='month' placeholder='oy' onChange={handleChange} value={values.month }/>
                                    {errors.month && touched.month && <p className=' text-red-600 text-xs'>{errors.month}</p>}
                                
                                    <button type='submit'  className='mt-4 btn w-100 btn-primary bg-[#FEAF00] '>{t.addrele}</button>
                                    
                                
                            </form>
                            )
                        }}

                    </Formik>
                </div>
                <TableBase/>
            </div>
        </>
    );
};

export default AddList;