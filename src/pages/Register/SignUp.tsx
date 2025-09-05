// import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import SpinnerComponent from '@/components/ui/Spinner';


interface registerValues {
    email: string;
    password: string;
}

export default function SignUp() {
    const [apiError, setApiError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()


    const validate = yup.object().shape({
        email: yup.string().email('email is invalid').required('please enter your email address'),
        password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password must start with a capital letter and be 6-11 letters long').required('password is required')
    })



    function handleRegister(formValues: registerValues) {
        setIsLoading(true);
        console.log(formValues)
        axios.post(`https://training-in-dev-wave-full-stack-e-c.vercel.app/api/auth/register`, formValues)
            .then(() => {
                setIsLoading(false);
                navigate('/logIn')
            })
            .catch((apiResponse) => {
                setApiError(apiResponse?.response?.data?.message);
                console.log(apiResponse?.response?.data?.message);
                setIsLoading(false)

            })
    }


    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: validate,
        onSubmit: handleRegister

    })

    if (localStorage.getItem("userToken")) {
        return <Navigate to="/" />
    }


    return (
        <>
            <div>

                <div className="flex flex-col items-center min-h-screen bg-gray-100">

                    {/* Logo */}
                    <div className="mt-10">
                        <img
                            className="h-12"
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                            alt="Amazon Logo"
                        />
                    </div>

                    <div className='text-red-600' >{apiError}</div>


                    {/* Register Card */}
                    <div className="bg-white w-96 p-6 rounded-lg border border-gray-300 mt-6 shadow-sm">
                        <h1 className="text-2xl font-semibold mb-4">Create account</h1>

                        <form onSubmit={formik.handleSubmit}>
                            {/* Email */}
                            <label htmlFor='email' className="block text-sm font-medium mb-1 text-black">Email</label>
                            <input
                                id='email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                className="text-black w-full p-2 border border-gray-400 rounded-md mb-4 focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 outline-none"
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className='text-red-600' >{formik.errors.email}</div>
                            ) : null}

                            {/* Password */}
                            <label htmlFor='password' className="block text-sm font-medium mb-1 text-black">Password</label>
                            <input
                                id='password'
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name='password'
                                type="password"
                                placeholder="At least 6 characters"
                                className="text-black w-full p-2 border border-gray-400 rounded-md mb-1 focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 outline-none"
                            />
                            {/* <p className="text-xs text-gray-600 mb-4">
                                Passwords must be at least 6 characters.
                            </p> */}
                            {formik.touched.password && formik.errors.password ? (
                                <div className='text-red-600'>{formik.errors.password}</div>
                            ) : null}


                            {/* Create Button */}
                            <Button
                                type={isLoading ? "button" : "submit"}
                                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 rounded-md"
                            >
                                {
                                    isLoading ? <SpinnerComponent /> : "Continue"
                                }
                            </Button>
                        </form>
                        {/* Legal text */}
                        <p className="mt-4 text-xs text-gray-600">
                            By creating an account, you agree to Amazon's{" "}
                            <a href="#" className="text-blue-600 hover:underline">
                                Conditions of Use
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-blue-600 hover:underline">
                                Privacy Notice
                            </a>
                            .
                        </p>

                        {/* Sign in link */}
                        <div className="mt-6 text-sm text-black">
                            Already have an account?{" "}
                            <a href="/login" className="text-blue-600 hover:underline ">
                                Sign in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
