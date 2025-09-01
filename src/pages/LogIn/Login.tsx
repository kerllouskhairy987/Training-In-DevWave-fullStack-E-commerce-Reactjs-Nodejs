import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                {/* Logo */}
                <div className="mb-6">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                        alt="Amazon"
                        className="h-10"
                    />
                </div>

                {/* Card */}
                <div className="bg-white w-80 p-6 border border-gray-300 rounded-md shadow-sm">
                    <h1 className="text-2xl font-semibold mb-4">Sign in</h1>

                    {/* Email input */}
                    <label className="block mb-2 text-sm font-medium text-black">Email or mobile phone number</label>
                    <input
                        type="text"
                        className=" text-black w-full p-2 mb-4 border border-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />

                    {/* Continue button */}
                    <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 rounded-sm mb-4">
                        Continue
                    </button>

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
                    <Link to={"/signup"}>
                        <button className="cursor-pointer w-full mt-4 bg-gray-200 hover:bg-gray-300 text-black py-2 rounded-sm border border-gray-400">
                            Create your Amazon account
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}
