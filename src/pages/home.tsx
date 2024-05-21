import Sample from "@/components/SampleComponent/sample";
import React from "react";
import { Helmet } from "react-helmet";

type Props = {
    children?: React.ReactNode;
};

function Home({ children }: Props) {
    return (
        <div>
            <Helmet>
                <title>sample Title</title>
                <meta name="description" content="sample component" />
            </Helmet>
            <Sample title="This is the title" />
        </div>
    );
}
export default Home;
