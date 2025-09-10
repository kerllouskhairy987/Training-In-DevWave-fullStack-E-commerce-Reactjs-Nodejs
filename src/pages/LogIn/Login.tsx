
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios';
import * as yup from 'yup'
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import SpinnerComponent from '@/components/ui/Spinner';
import { useAppDispatch } from '@/app/hooks/hooks';
import { emailValue } from '@/app/features/globals';
import { ErrorToast, successToast } from '@/notification';


interface registerValues {
    email: string;
}

export default function Login() {

    const dispatch = useAppDispatch()

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const validate = yup.object().shape({
        email: yup.string().email('email is invalid').required('please enter your email address'),
    })



    function handleRegister(formValues: registerValues) {
        setIsLoading(true);
        axios.post(`https://training-in-dev-wave-full-stack-e-c.vercel.app/api/auth/login`, formValues)
            .then((apiResponse) => {
                successToast({ message: apiResponse?.data?.message })

                dispatch(emailValue(apiResponse?.data?.data.email))

                setIsLoading(false);
                setTimeout(() => {
                    navigate('/verify-otp')
                }, 5000)
            })
            .catch((apiResponse) => {
                ErrorToast({ message: apiResponse?.response?.data?.message })
                setIsLoading(false)
            })
    }


    const formik = useFormik({
        initialValues: {
            email: "",
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

                    {/* Register Card */}
                    <div className="bg-white w-96 p-6 rounded-lg border border-gray-300 mt-6 shadow-sm">
                        <h1 className="text-2xl font-semibold mb-4">Sign in</h1>

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
                        <p className="text-xs mb-4  text-black">
                            By continuing, you agree to Amazon's{" "}
                            <span className="text-blue-600 hover:underline cursor-pointer">Conditions of Use</span>{" "}
                            and{" "}
                            <span className="text-blue-600 hover:underline cursor-pointer">Privacy Notice</span>.
                        </p>

                        {/* Need help */}
                        <p className="text-blue-600 text-sm cursor-pointer hover:underline">Need help?</p>
                    </div>

                    {/* New account */}
                    <div className="mt-6 w-80">
                        <div className="flex items-center">
                            <div className="flex-grow h-px bg-gray-300"></div>
                            <span className="px-2 text-xs text-gray-500">New to Amazon?</span>
                            <div className="flex-grow h-px bg-gray-300"></div>
                        </div>

                        <Link to={"/signup"}
                            className="w-full mt-4 bg-gray-200 hover:bg-gray-300 text-black py-2 rounded-sm border border-gray-400"
                        >
                            <button className="cursor-pointer w-full mt-4 bg-gray-200 hover:bg-gray-300 text-black py-2 rounded-sm border border-gray-400">
                                Create your Amazon account
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}
