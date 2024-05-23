import React, { useState, useEffect } from "react";
import AuthHeader from "@/components/auth-header";
import { AuthLayout } from "@/components/layouts/authLayout";
import { Button } from "keep-react";
import { Link } from "react-router-dom";

interface OtpProps {
    children?: React.ReactNode;
}

const Otp = ({ children }: OtpProps) => {
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
    const [countdown, setCountdown] = useState(30);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        if (/^\d*$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Move to the next input if the current input has a value
            if (value && index < 5) {
                (document.getElementById(`otp-${index + 1}`) as HTMLInputElement).focus();
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            (document.getElementById(`otp-${index - 1}`) as HTMLInputElement).focus();
        }
    };

    return (
        <AuthLayout>
            <AuthHeader
                title="OTP Verification"
                description="Please enter the 6-digit One Time Verification code we sent to your email"
            />
            <div className="flex justify-center mt-6">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={e => handleChange(e, index)}
                        onKeyDown={e => handleKeyDown(e, index)}
                        className="w-[45px] h-[48px] mx-1 text-center border border-gray-300 rounded-[4px] bg-white focus:outline-none focus:border-indigo-500"
                    />
                ))}
            </div>
            <p className="mt-6 text-center">Your code will expire in {countdown} seconds</p>
            <Button color="primary" className="w-full mt-6">
                Verify
            </Button>
            <p className="mt-6 text-center">
                Didn’t receive OTP? <Link to="#">Resend OTP</Link>
            </p>
        </AuthLayout>
    );
};

export default Otp;
