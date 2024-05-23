import AuthLayout from "@/components/auth-layout";

interface OtpProps {
    children?: React.ReactNode;
}

const Otp = ({ children }: OtpProps) => {
    return (
        <>
            <AuthLayout>Hello</AuthLayout>
        </>
    );
};

export default Otp;
