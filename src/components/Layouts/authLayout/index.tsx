interface AuthLayoutProps {
    children?: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className="c-auth-layout flex justify-center items-center relative bg-cover h-full">
            <div className="c-auth-layout__wrapper bg-white p-8 z-10 rounded-3xl">{children}</div>
        </div>
    );
};
