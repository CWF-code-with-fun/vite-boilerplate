import { getModifiedClasses, useElementClass } from "@/lib/class-names";
import "./index.scss";
import React from "react";

export const iconList = ["cwasa-logo", "email", "phone"];

export interface IconProps {
    children?: React.ReactNode;
    name: (typeof iconList)[number];
}

const Icon = ({ name }: IconProps) => {
    const { baseClassName, elementClass } = useElementClass("c-icon");

    return (
        <span
            className={getModifiedClasses(baseClassName, {
                [name ?? ""]: !!name,
            })}
        >
            <i className={elementClass("icon")} />
        </span>
    );
};

export default Icon;
