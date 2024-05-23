interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }: AuthLayoutProps) => {
    return (
        <div className="flex justify-center items-center relative h-screen w-screen bg-[url('@/assets/images/auth-layout-bg.jpg')] bg-center bg-cover bg-no-repeat">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-700 to-blue-800 opacity-80"></div>
            <div className="flex justify-center items-center bg-white p-8 z-10 rounded-3xl max-w-lg w-full">
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
