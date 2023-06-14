import React from "react";
import Logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import API from "../../api/API"

const Registr = () => {
    const initialValues = {
        firstName: "",
        secondName: "",
        lastName: "",
        station: "",
        position: "",
        phoneNumber: "",
        password: "",
        repassword: "",
    };

    let navigate = useNavigate();

    const validationSchema = Yup.object({
        firstName: Yup.string().required("Maydonni to'ldiring!"),
        secondName: Yup.string().required("Maydonni to'ldiring!"),
        lastName: Yup.string().required("Maydonni to'ldiring!"),
        station: Yup.string().required("Stansiyani tanlang!"),
        position: Yup.string().required("Maydonni to'ldiring!"),
        phoneNumber: Yup.number()
            .required("Maydonni to'ldiring!")
            .typeError("Iltimos telefon raqamini kiriting")
            .positive("Telefon raqami minus ishorasi bilan boshlanmaydi")
            .min(9),
        password: Yup.string()
            .min(6, "Parol kamida oltita belgidan iborat bo'lishi kerak")
            .required("Maydonni to'ldiring!")
            .matches(
                /[a-zA-Z]/,
                "Parol faqat lotin harflaridan iborat bolishi kerak"
            ),
        repassword: Yup.string()
            .min(6, "Parol kamida oltita belgidan iborat bo'lishi kerak")
            .required("Maydonni to'ldiring!")
            .matches(/[a-zA-Z]/, "Parol faqat lotin harflaridan iborat bolishi kerak")
            .oneOf([Yup.ref("password"), null], "Parol bir xil bo'lishi kerak"),
    });

    // const onSubmit = (values) => { };

    return (
        <>
            <div className=" bg-[#FEAF00] h-[100vh]">
                <div className="container">
                    <div className="pt-[155px] ">
                        <div className=" mx-auto w-[980px] p-[30px] bg-[#FFFFFF] rounded-[20px] shadow-[2px 5px 10px ;]">
                            <img className="" src={Logo} />
                            <div className="flex flex-col gap-[10px] mt-[20px] items-center">
                                <h1 className=" font-semibold text-[#000000] text-[22px] w- ">
                                    RO'YHATDAN O'TISH
                                </h1>
                                <p className="text-[#6C6C6C] text-[14px] font-normal ">
                                    O'zingiz haqingizda ma'lumotlarni kiriting
                                </p>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={(values) => {
                                    console.log(values)
                                      API.createUser(values).then((data) => {
                                        console.log(data)
                                        navigate('/login');
                                    });
                                  }}
                            >
                                {({ values, errors, handleSubmit, handleChange, touched }) => {
                                    return (
                                        <form className="mt-[20px]" onSubmit={handleSubmit}>
                                            <div className="flex gap-[10px] justify-between mt-[10px]">
                                                <div>
                                                    <label className="text-[14px] font-medium text-[#6C6C6C] ">
                                                        Ismingizni kiriting.
                                                    </label>
                                                    <input
                                                        className="form-control w-[455px] border-[#FEAF00]"
                                                        type="text"
                                                        placeholder="Ismingiz"
                                                        name="firstName"
                                                        onChange={handleChange}
                                                        value={values.firstName}
                                                    />
                                                    {errors.firstName && touched.firstName && (
                                                        <p className=" text-red-600 text-xs">
                                                            {errors.firstName}
                                                        </p>
                                                    )}
                                                </div>
                                                <div>
                                                    <label className="text-[14px] font-medium text-[#6C6C6C]">
                                                        Familiyangizni kiriting
                                                    </label>
                                                    <input
                                                        className="form-control w-[455px] border-[#FEAF00]"
                                                        type="text"
                                                        placeholder="Familiyangiz"
                                                        name="secondName"
                                                        onChange={handleChange}
                                                        value={values.secondName}
                                                    />
                                                    {errors.secondName && touched.secondName && (
                                                        <p className=" text-red-600 text-xs">
                                                            {errors.secondName}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex gap-[10px] justify-between mt-[10px]">
                                                <div>
                                                    <label className="text-[14px] font-medium text-[#6C6C6C] ">
                                                        Sharifingizni kiriting
                                                    </label>
                                                    <input
                                                        className="form-control w-[455px] border-[#FEAF00]"
                                                        type="text"
                                                        placeholder="Sharifingiz"
                                                        name="lastName"
                                                        onChange={handleChange}
                                                        value={values.lastName}
                                                    />
                                                    {errors.lastName && touched.lastName && (
                                                        <p className=" text-red-600 text-xs">
                                                            {errors.lastName}
                                                        </p>
                                                    )}
                                                </div>
                                                <div>
                                                    <label className="text-[14px] font-medium text-[#6C6C6C]">
                                                        Stansiyani tanlang
                                                    </label>
                                                    <select
                                                        className="form-control w-[455px] border-[#FEAF00]"
                                                        name="station"
                                                        id=""
                                                        onChange={handleChange}
                                                        value={values.station}
                                                    >
                                                        <option selected disabled value="">
                                                            Stansiyani tanlang
                                                        </option>
                                                        <option value="Chuqursoy">Chuqursoy</option>
                                                    </select>
                                                    {errors.station && touched.station && (
                                                        <p className=" text-red-600 text-xs">
                                                            {errors.station}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex gap-[10px] justify-between mt-[10px]">
                                                <div>
                                                    <label className="text-[14px] font-medium text-[#6C6C6C]">
                                                        Lavozimingizni kiriting
                                                    </label>
                                                    <input
                                                        className="form-control w-[455px] border-[#FEAF00]"
                                                        type="text"
                                                        placeholder="Lavozimingiz"
                                                        name="position"
                                                        onChange={handleChange}
                                                        value={values.position}
                                                    />
                                                    {errors.position && touched.position && (
                                                        <p className=" text-red-600 text-xs">
                                                            {errors.position}
                                                        </p>
                                                    )}
                                                </div>
                                                <div>
                                                    <label className="text-[14px] font-medium text-[#6C6C6C] ">
                                                        Telefon raqamingizni kiriting
                                                    </label>
                                                    <input
                                                        className="form-control w-[455px] border-[#FEAF00]"
                                                        type="tel"
                                                        placeholder="+998"
                                                        name="phoneNumber"
                                                        onChange={handleChange}
                                                        value={values.phoneNumber}
                                                    />
                                                    {errors.phoneNumber && touched.phoneNumber && (
                                                        <p className=" text-red-600 text-xs">
                                                            {errors.phoneNumber}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex gap-[10px] justify-between mt-[10px]">
                                                <div>
                                                    <label className="text-[14px] font-medium text-[#6C6C6C]">
                                                        Parolingizni kiriting
                                                    </label>
                                                    <input
                                                        className="form-control w-[455px] border-[#FEAF00]"
                                                        type="password"
                                                        placeholder="Parol"
                                                        name="password"
                                                        onChange={handleChange}
                                                        value={values.password}
                                                    />
                                                    {errors.password && touched.password && (
                                                        <p className=" text-red-600 text-xs">
                                                            {errors.password}
                                                        </p>
                                                    )}
                                                </div>
                                                <div>
                                                    <label className="text-[14px] font-medium text-[#6C6C6C]">
                                                        Parolni takrorlang
                                                    </label>
                                                    <input
                                                        className="form-control w-[455px] border-[#FEAF00]"
                                                        type="password"
                                                        placeholder="Parol"
                                                        name="repassword"
                                                        onChange={handleChange}
                                                        value={values.repassword}
                                                    />
                                                    {errors.repassword && touched.repassword && (
                                                        <p className=" text-red-600 text-xs">
                                                            {errors.repassword}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                className="btn w-100 bg-[#FEAF00] mt-[30px]"
                                            >
                                                Tasdiqlash uchun yuborish
                                            </button>
                                        </form>
                                    );
                                }}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registr;
