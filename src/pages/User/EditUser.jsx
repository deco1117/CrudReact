import React from 'react';
import Logo from '../../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup'
import API from "../../api/API";

const EditUser = () => {

    let navigate = useNavigate();

    // const [data, setData] = useState([]);
    // const [load, setLoad] = useState(false);

    // function editUser(id, data) {
    //     API.editUser(id, data).then((data1) => {

    //     });
    //   }

      const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div>
               <div className='container'>
                    <div className='pt-[50px] '>
                        <div className=' mx-auto w-[980px] p-[30px] bg-[#FFFFFF] rounded-[20px] shadow-[2px 5px 10px ;]'>
                            <img className='' src={Logo}/>
                            <div className='flex flex-col gap-[10px] mt-[20px] items-center'>      
                                <h1 className=' font-semibold text-[#000000] text-[22px] w- '>FOYDALANUVCHI MA'LUMOTLARINI TAHRIRLASH</h1>
                                <p className='text-[#6C6C6C] text-[14px] font-normal '>Kerakli ma'lumotn o'zgartiring</p>
                            </div>
                            <Formik initialValues={{

                                fname: user.firstName,
                                sname: user.secondName,
                                fatherName:  user.lastName,
                                station: user.station,
                                position: user.position,
                                phoneNumber: user.phoneNumber,
                                password: user.password,
                                repassword: user.repassword,
                            }}
                            
                            validationSchema={Yup.object({

                                fname: Yup.string().required("Maydonni to'ldiring!"),
                                sname: Yup.string().required("Maydonni to'ldiring!"),
                                fatherName: Yup.string().required("Maydonni to'ldiring!"),
                                station: Yup.string().required("Maydonni to'ldiring!"),
                                position: Yup.string().required("Maydonni to'ldiring!"),
                                phoneNumber: Yup.number().required("Maydonni to'ldiring!").typeError("Iltimos telefon raqamini kiriting").positive('Telefon raqami minus ishorasi bilan boshlanmaydi').min(9),
                                password: Yup.string().min(6, "Parol kamida oltita belgidan iborat bo'lishi kerak").required("Maydonni to'ldiring!").matches(/[a-zA-Z]/, 'Parol faqat lotin harflaridan iborat bolishi kerak'),
                                repassword: Yup.string().min(6, "Parol kamida oltita belgidan iborat bo'lishi kerak").required("Maydonni to'ldiring!").matches(/[a-zA-Z]/, 'Parol faqat lotin harflaridan iborat bolishi kerak').oneOf([Yup.ref('password'), null], "Parol bir xil bo'lishi kerak")
                            })}
                            onSubmit={(values) => {
                                console.log(values)
                                  API.editUser(user.id, {
                                    firstName: values.fname,
                                    secondName: values.sname,
                                    lastName: values.fatherName,
                                    station: values.station,
                                    position: values.position,
                                    phoneNumber: values.phoneNumber,
                                    password: values.password,
                                    repassword: values.repassword
                                  }).then((data) => {
                                    window.localStorage.clear();
                                    navigate('/login');
                                });
                              }}
                            
                            >
                                {({values, errors, handleSubmit, handleChange, touched})=>{
                               return( <form className='mt-[20px]' onSubmit={handleSubmit}>
                                        <div className='flex gap-[10px] justify-between mt-[10px]'>
                                            <div>
                                                <label className='text-[14px] font-medium text-[#6C6C6C] '>Ismingizni kiriting.</label>
                                                <input className='form-control w-[455px] border-[#FEAF00]' type='text' placeholder='Ismingiz' name='fname' onChange={handleChange} value={values.fname}/>
                                                {errors.fname && touched.fname && <p className=' text-red-600 text-xs'>{errors.fname}</p>}
                                            </div>
                                            <div>
                                                <label className='text-[14px] font-medium text-[#6C6C6C]'>Familiyangizni kiriting</label>
                                                <input className='form-control w-[455px] border-[#FEAF00]' type='text' placeholder='Familiyangiz' name='sname' onChange={handleChange} value={values.sname}/>
                                                {errors.sname && touched.sname && <p className=' text-red-600 text-xs'>{errors.sname}</p>}
                                            </div> 
                                        </div>
                                        <div className='flex gap-[10px] justify-between mt-[10px]'>
                                            <div>
                                                <label className='text-[14px] font-medium text-[#6C6C6C] '>Sharifingizni kiriting</label>
                                                <input className='form-control w-[455px] border-[#FEAF00]' type='text' placeholder='Sharifingiz' name='fatherName' onChange={handleChange} value={values.fatherName}/>
                                                {errors.fatherName && touched.fatherName && <p className=' text-red-600 text-xs'>{errors.fatherName}</p>}
                                            </div>
                                            <div>
                                                <label className='text-[14px] font-medium text-[#6C6C6C]'>Stansiyani kiriting</label>
                                                <input readOnly className='form-control w-[455px] border-[#FEAF00]' type='text' placeholder='Stansiya' name='station' onChange={handleChange} value={values.station}/>
                                                {errors.station && touched.station && <p className=' text-red-600 text-xs'>{errors.station}</p>}
                                            </div> 
                                        </div>
                                        <div className='flex gap-[10px] justify-between mt-[10px]'>
                                            <div>
                                                <label className='text-[14px] font-medium text-[#6C6C6C]'>Lavozimingizni kiriting</label>
                                                <input className='form-control w-[455px] border-[#FEAF00]' type='text' placeholder='Lavozimingiz' name='position' onChange={handleChange} value={values.position}/>
                                                {errors.position && touched.position && <p className=' text-red-600 text-xs'>{errors.position}</p>}
                                            </div>
                                            <div>
                                                <label className='text-[14px] font-medium text-[#6C6C6C] '>Telefon raqamingizni kiriting</label>
                                                <input readOnly className='form-control w-[455px] border-[#FEAF00]' type='tel' placeholder='+998' name='phoneNumber' onChange={handleChange} value={values.phoneNumber}/>
                                                {errors.phoneNumber && touched.phoneNumber && <p className=' text-red-600 text-xs'>{errors.phoneNumber}</p>}
                                            </div> 
                                        </div>
                                        <div className='flex gap-[10px] justify-between mt-[10px]'>
                                            <div>
                                                <label className='text-[14px] font-medium text-[#6C6C6C]'>Parolingizni kiriting</label>
                                                <input className='form-control w-[455px] border-[#FEAF00]' type='password' placeholder='Parol' name='password' onChange={handleChange} value={values.password}/>
                                                {errors.password && touched.password && <p className=' text-red-600 text-xs'>{errors.password}</p>}
                                            </div> 
                                            <div>
                                                <label className='text-[14px] font-medium text-[#6C6C6C]'>Parolni takrorlang</label>
                                                <input className='form-control w-[455px] border-[#FEAF00]' type='password' placeholder='Parol' name='repassword' onChange={handleChange} value={values.repassword}/>
                                                {errors.repassword && touched.repassword && <p className=' text-red-600 text-xs'>{errors.repassword}</p>}
                                            </div> 
                                        </div>
                                        <button  type='submit' className='btn w-100 bg-[#FEAF00] mt-[30px]'>o'zgartirish</button>
                                </form> 
                                )          
                                }}
                            </Formik>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default EditUser;