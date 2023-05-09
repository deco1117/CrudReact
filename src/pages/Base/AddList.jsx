import React, { useState, useContext } from 'react';
import { context } from '../../context/context';
import { Link } from 'react-router-dom';
import TableBase from '../../Tables/TableBase'
import { Formik } from 'formik';
import * as Yup from "yup";
import API from "../../api/API";

const AddList = () => {

    const {mode, LANG, lang } = useContext(context);

    const [data, setData] = useState([]);

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
                        number: "",
                        createdDate: "",
                        duration: "",
                    }}
                    validationSchema={Yup.object({
                        name: Yup.string().min(3, "Uchtadan ko'p belgi kiritish zarur!").required("Maydonni to'ldiring!"),
                        number: Yup.string().min(3, "Uchtadan ko'p belgi kiritish zarur!").required("Maydonni to'ldiring!"),
                        createdDate: Yup.date().required("Maydonni to'ldiring!"),
                        duration: Yup.string().required("Maydonni to'ldiring!").max(2, "Faqat ikki xonali son kiritish mumkin!"),
                    })}
                    onSubmit={(values)=>{
                        API.create(values).then(res => {
                            API.getStore().then((res) => {
                                if (res.status == 200) {
                                    setData(res.data.data);
                                }
                            });
                        });
                    }}
                    >
                        {({values, errors, handleSubmit, handleChange, touched})=>{
                            
                            return( <form className='' onSubmit={handleSubmit}>  

                                    <label className=''>{t.typeRele}</label>
                                    <input className='form-control' type='text' name='name' placeholder={t.typeRele} onChange={handleChange} value={values.name }/>
                                    {errors.name && touched.name && <p className=' text-red-600 text-xs'>{errors.name}</p>} 

                                    <label className='mt-2'>ID</label>
                                    <input className='form-control' type='text' name='number' placeholder='ID' onChange={handleChange} value={values.number }/>
                                    {errors.number && touched.number && <p className=' text-red-600 text-xs'>{errors.number}</p>}

                                    <label className='mt-2'>{t.manufacturedDate}</label>
                                    <input className='form-control' type='date' name='createdDate' onChange={handleChange} value={values.createdDate }/>
                                    {errors.createdDate && touched.createdDate && <p className=' text-red-600 text-xs'>{errors.createdDate}</p>}

                                    <label className='mt-2'>{t.term}</label>
                                    <input className='form-control' type='number' name='duration' placeholder='oy' onChange={handleChange} value={values.duration }/>
                                    {errors.duration && touched.duration && <p className=' text-red-600 text-xs'>{errors.duration}</p>}
                                
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