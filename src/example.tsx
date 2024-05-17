// CODE GUIDELINES: Must follow
// import from packages
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

// import from local files
import AddTodo from "@components/AddTodo/AddTodo";

// use interface for props, use type for advanced unions, intersections, tuples, and generics
// declaration merging is allowed
// extends is allowed
// duplication of types is strictly prohibited
// use generic if necessary

type StringOrNumber = string | number;

export interface ComponentProps<X = string, Y = number> {
    a: string;
    b: number;
    c: StringOrNumber;
    d?: X;
    e?: Y;
}

// use export default for function components
// must be single export per file
// use PropsWithChildren for children props
export default function Component({ a, b, c }: React.PropsWithChildren<ComponentProps>) {
    // first declare variables
    // variable declaration will follow following order: var -> let -> const
    // declare custom hooks as well
    const x = 1;
    const y = 2;
    // const {p, q, setR} = useMyCustomHook();
    const [z, setZ] = useState(3);
    const divReference = useRef<HTMLDivElement>(null);
    const complexCalculation = useMemo(() => {
        return a + b + c;
    }, [a, b, c]);
    const complexCalcutaionFunction = useCallback(() => {
        return a + b + c;
    }, [a, b, c]);

    // then declare functions
    // uses of arrow function is not allowed
    function add(a: number, b: number) {
        return a + b;
    }

    // then use useEffect, useLayoutEffect, useTransition
    // REMEMBER: useEffect will be used when it is really necessary
    // useLayoutEffect will be used when it is necessary to wait for the DOM to be updated
    // useTransition will be used when it is necessary to wait for the browser to update the screen
    // Follow order:  useTransition -> useLayoutEffect -> useEffect
    useLayoutEffect(() => {
        // do something
        //
    }, []);

    useEffect(() => {
        // do something
        setZ(4);
    }, []);

    return (
        <div ref={divReference}>
            {a}
            {b}
            {c}
            {complexCalculation}
            {complexCalcutaionFunction()}
            <AddTodo />
        </div>
    );
}

// generic components can be called like this
{
    /* <Component<string, number> a="a" b={1} c="c" d="d" e={2} />; */
}
