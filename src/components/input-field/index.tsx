import React from "react";
import { useElementClass } from "@/lib/class-names";
import { Icon, Input, Label } from "keep-react";

import "./index.scss";

interface InputFieldProps {
    name: string;
    type: string;
    value?: number;
    placeholder?: string;
    icon?: any;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
    name,
    type,
    value,
    placeholder,
    icon,
    onChange,
    error,
}: InputFieldProps) => {
    const { baseClassName } = useElementClass("c-inputField");

    return (
        <div className={baseClassName}>
            <fieldset className="space-y-1">
                <Label htmlFor="name">{name}</Label>
                <div className="relative">
                    <Input
                        placeholder={placeholder}
                        className="ps-11"
                        name={name}
                        type={type}
                        onChange={onChange}
                        value={value}
                    />
                    <Icon>{icon}</Icon>
                </div>
            </fieldset>
        </div>
    );
};

export default InputField;
