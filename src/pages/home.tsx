import React from "react";

type Props = {
    children?: React.ReactNode;
};

function Home({ children }: Props) {
    return <div>{children}</div>;
}
export default Home;
