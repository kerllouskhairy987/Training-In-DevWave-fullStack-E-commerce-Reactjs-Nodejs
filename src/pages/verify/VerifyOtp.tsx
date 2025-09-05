import { useAppSelector } from "@/app/hooks/hooks";
import type { RootState } from "@/app/store";
import { Button } from "@/components/ui/button";
import SpinnerComponent from "@/components/ui/Spinner";
import axiosInstance from "@/config/axios-config";
import { ErrorToast, successToast } from "@/notification";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyOTP: React.FC = () => {
    const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const { email } = useAppSelector((state: RootState) => state.email)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;

        if (/^[0-9]$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (index < 5 && inputRefs.current[index + 1]) {
                inputRefs.current[index + 1]?.focus();
            }
        } else {
            e.target.value = "";
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();

            const newOtp = [...otp];
            newOtp[index - 1] = "";
            setOtp(newOtp);
        }
    };


    // Send Data Verify To Backend
    const handleVerify = async () => {
        const code = otp.join("");
        console.log("OTP Code:", code);
        setIsLoading(true)

        try {
            const { data } = await axiosInstance.post(`/api/auth/verify-login-otp`, {
                email: email,
                otp: code
            })
            console.log("from function", data)
            localStorage.setItem('userToken', data.token)
            localStorage.setItem("userRole", data.user.role)
            successToast({ message: `${data.message}, You will be redirected to ${data.user.role === 'admin' ? 'Dashboard' : 'Profile'} page` });

            setTimeout(() => {
                if (data.user.role === 'admin') {
                    navigate("/dashboard")
                } else {
                    navigate("/profile")
                }
            }, 2000)

        } catch (error) {
            const err = error as { response: { data: { message: string } } }
            ErrorToast({ message: err.response.data.message })
            setIsLoading(false)
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    };


    return (
        <div className=" w-full h-screen flex flex-col justify-center items-center bg-gray-100">
            <h2 className="text-2xl font-semibold mb-6 text-black">Enter Verification Code</h2>
            <div className="flex gap-3 mb-6 text-black">
                {Array(6)
                    .fill("")
                    .map((_, i) => (
                        <input
                            key={i}
                            ref={(el) => { inputRefs.current[i] = el; }}
                            type="text"
                            maxLength={1}
                            value={otp[i]}
                            onChange={(e) => handleChange(e, i)}
                            onKeyDown={(e) => handleKeyDown(e, i)}
                            className="w-12 h-12 text-center text-xl font-semibold border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    ))}
            </div>
            <Button
                onClick={handleVerify}
                className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
            >
                {
                    isLoading ? <SpinnerComponent /> : "Verify"
                }
            </Button>
        </div>
    );
};

export default VerifyOTP;
