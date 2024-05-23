import React from "react";
import { useElementClass } from "@/lib/class-names";

import "./index.scss";
import Icon from "@/components/icon";

interface AuthHeaderProps {
    title: string;
    description: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ title, description }: AuthHeaderProps) => {
    const { baseClassName, elementClass } = useElementClass("c-authHeader");

    return (
        <div className={baseClassName}>
            <Icon name="cwasa-logo" />
            <p className={elementClass("title")}>{title}</p>
            <p className={elementClass("description")}>{description}</p>
        </div>
    );
};

export default AuthHeader;
