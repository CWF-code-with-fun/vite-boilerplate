import React, { useState, useEffect } from "react";
import AuthHeader from "@/components/auth-header";
import { AuthLayout } from "@/components/layouts/authLayout";
import { Button } from "keep-react";
import { Link } from "react-router-dom";
import useLanguage from "@/hooks/useLanguage";

interface OtpProps {
    children?: React.ReactNode;
}

const Otp = ({ children }: OtpProps) => {
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
    const [countdown, setCountdown] = useState(30);
    const { language, switchToBangla, switchToEnglish, t } = useLanguage();

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
            <AuthHeader title={t("otpPage.title")} description={t("otpPage.description")} />
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
            <p className="mt-6 text-center">
                <span className="font-medium text-[#606977]">{t("otpPage.countDown1st")}</span>{" "}
                <span className="font-bold text-[#3C50E0]">{countdown}</span>{" "}
                <span className="font-bold text-[#3C50E0]">{t("otpPage.countDown2nd")}</span>
            </p>
            <Button color="primary" className="w-full mt-6">
                {t("otpPage.button")}
            </Button>
            <p className="mt-6 text-center">
                <span className="font-normal text-[#606977]">{t("otpPage.resend1st")}</span>
                <Link to="#" className="font-medium text-[#3D434C]">
                    {t("otpPage.resend2nd")}
                </Link>
            </p>
        </AuthLayout>
    );
};

export default Otp;
