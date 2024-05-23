import { useState } from "react";

export const addClassName = (baseClassName: string, ...add: string[]) =>
    add.reduce((prev, v) => (v ? `${prev} ${v}` : prev), baseClassName);
export const removeClassName = (baseClassName: string, ...remove: string[]) => {
    const reg = new RegExp(remove.reduce((pre, v) => `${pre}|${v}`, "").slice(1), "g");
    return baseClassName.replace(reg, "").replace("  ", " ").trim();
};

export const useClassName = (initialClassName: string) => {
    const [className, setClassName] = useState(initialClassName);

    const add = (...classNames: string[]) => {
        setClassName(current => addClassName(current, ...classNames));
    };
    const remove = (...classNames: string[]) => {
        setClassName(current => removeClassName(current, ...classNames));
    };
    return {
        className,
        add,
        remove,
    };
};

const modifyClassName = (baseClassName: string, modifier: string) => `${baseClassName}--${modifier}`;
const mapModifiers = (baseClassName: string, ...modifiers: string[]) =>
    addClassName(baseClassName, ...modifiers.map(v => modifyClassName(baseClassName, v)));

export type ModifiersDictionaryType = Record<string, boolean | null | undefined>;
export const getModifiedClasses = (baseClassName: string, modifiers: ModifiersDictionaryType) =>
    mapModifiers(baseClassName, ...Object.keys(modifiers).filter(key => !!modifiers[key]));

const addElementToClass = (baseClassName: string, element: string) => `${baseClassName}__${element}`;
export const getElementClass = (baseClassName: string, ...elements: string[]) =>
    elements.reduce((prev, v) => addElementToClass(prev, v), baseClassName);

export const useElementClass = (baseClassName: string) => {
    const elementClass = (...elements: string[]) => getElementClass(baseClassName, ...elements);

    return { baseClassName, elementClass };
};
