import React from "react";
import { Envelope, Lock } from "phosphor-react";
import { Button, Icon, Input, Label } from "keep-react";

import InputWithIcon from "@/components/input/input";

type Props = {
    children?: React.ReactNode;
};
function Login({ children }: Props) {
    return (
        <div>
            <InputWithIcon />
            <InputComponent />
        </div>
    );
}

export default Login;

export const InputComponent = () => {
    return (
        <form className="mx-auto max-w-md flex-col justify-center space-y-2 rounded-lg border bg-primary-25 p-8 align-middle shadow-md">
            <fieldset className="space-y-1">
                <Label htmlFor="name">Email</Label>
                <div className="relative">
                    <Input placeholder="Enter email" className="ps-11" />
                    <Icon>
                        <Envelope size={19} color="#AFBACA" />
                    </Icon>
                </div>
            </fieldset>
            <fieldset className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                    <Input id="password" placeholder="Enter password" type="password" className="ps-11" />
                    <Icon>
                        <Lock size={19} color="#AFBACA" />
                    </Icon>
                </div>
            </fieldset>
            <Button size="sm" color="primary" type="submit" position="center">
                Sign In
            </Button>
        </form>
    );
};
