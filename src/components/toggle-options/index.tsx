import React from "react";
import { addClassName, useElementClass } from "@/lib/class-names";

import "./index.scss";
import Icon from "@/components/icon";
import { TEXT } from "@/utils/text-const";

interface ToggleOptionsProps {
    activeOption: string;
    handleClick: (name: string) => void;
}

const ToggleOptions: React.FC<ToggleOptionsProps> = ({ activeOption, handleClick }: ToggleOptionsProps) => {
    const { baseClassName, elementClass } = useElementClass("c-toggleOptions");

    return (
        <div className={baseClassName}>
            <div
                className={addClassName(
                    elementClass("phone"),
                    elementClass(`${activeOption === TEXT.PHONE_OPTION ? "active" : ""}`),
                )}
                onClick={() => handleClick(TEXT.PHONE_OPTION)}
            >
                <Icon name="phone" />
                <p className={elementClass("text")}>{TEXT.PHONE_NUMBER}</p>
            </div>
            <div
                className={addClassName(
                    elementClass("email"),
                    elementClass(`${activeOption === TEXT.EMAIL_OPTION ? "active" : ""}`),
                )}
                onClick={() => handleClick(TEXT.EMAIL_OPTION)}
            >
                <Icon name="email" />
                <p className={elementClass("text")}>{TEXT.EMAIL}</p>
            </div>
        </div>
    );
};

export default ToggleOptions;
