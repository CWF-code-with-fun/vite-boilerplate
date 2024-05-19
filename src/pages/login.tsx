import React from "react";

type Props = {
    children?: React.ReactNode;
};
function Login({ children }: Props) {
    return <div>{children}</div>;
}

export default Login;
