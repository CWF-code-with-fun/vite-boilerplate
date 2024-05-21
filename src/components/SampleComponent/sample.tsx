import React, { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type InheritedProps = Pick<HTMLAttributes<HTMLDivElement>, "onClick">;

export interface SampleProps extends InheritedProps {
    children?: React.ReactNode;
    variant?: "primary" | "secondary"; // Define possible variants
    onClick?: () => void;
    isIcon?: boolean;
    title: string;
    highlight?: boolean;
    disabled?: boolean;
}

const Sample = ({ title, children, highlight, disabled, variant }: SampleProps) => {
    const rootClass = cn(
        "py-2 px-4 font-semibold rounded-lg shadow-md c-sample-container", // Common classes
        {
            // Conditionally add this class if highlight is true
            "bg-blue-500 text-white hover:bg-blue-700": variant === "primary" && !disabled,
            "bg-gray-500 text-white hover:bg-gray-700": variant === "secondary" && !disabled,
            "opacity-50 cursor-not-allowed": disabled,
        },
    );

    const childDivClass = cn(
        "p-4 rounded-lg", // Common classes
        {
            "bg-yellow-300": highlight, // Conditionally add this class if highlight is true
        },
    );

    const optionalDivClass = cn(
        "text-center", // Common classes for optionalDivClass
        {
            "text-blue-500": highlight, // Conditionally add this class if highlight is true
        },
    );
    return (
        <div className={rootClass}>
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <div className={childDivClass}>his is another child div with optional styling.</div>
            <div className={optionalDivClass}>This is another child div with optional styling.</div>
            {children}
        </div>
    );
};

export default Sample;
