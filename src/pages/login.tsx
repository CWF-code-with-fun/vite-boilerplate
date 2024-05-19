import React from "react";

type Props = {
    children?: React.ReactNode;
};
const Login = ({ children }: Props) => {
    return <div>{children}</div>;
};

export default Login;
