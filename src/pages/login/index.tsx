import React, { useState } from "react";
import { useElementClass } from "@/lib/class-names";
import { Button, Checkbox, Label } from "keep-react";
import AuthLayout from "@/components/auth-layout";
import { Envelope, Lock } from "phosphor-react";
import InputField from "@/components/input-field";
import ToggleOptions from "@/components/toggle-options";
import { TEXT } from "@/utils/text-const";
import AuthHeader from "@/components/auth-header";

interface LoginProps {
    children?: React.ReactNode;
}
const Login = ({ children }: LoginProps) => {
    const { baseClassName } = useElementClass("p-login");

    const [activeOption, setActiveOption] = useState<string>(TEXT.PHONE_OPTION);

    const handleClick = (name: string) => {
        setActiveOption(name);
    };

    return (
        <AuthLayout>
            <div className={baseClassName}>
                <AuthHeader title="Welcome Back!" description="Please enter your details" />
                <br />
                <br />
                <ToggleOptions activeOption={activeOption} handleClick={handleClick} />

                <form className="flex flex-col gap-5">
                    <InputField
                        name={"Phone Number"}
                        type={"text"}
                        placeholder={"Enter phone number"}
                        icon={<Envelope size={19} color="#AFBACA" />}
                        onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
                            throw new Error("Function not implemented.");
                        }}
                    />

                    <InputField
                        name={"Password"}
                        type={"password"}
                        placeholder={"Password"}
                        icon={<Lock size={19} color="#AFBACA" />}
                        onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
                            throw new Error("Function not implemented.");
                        }}
                    />
                    <div className="flex items-center gap-5 justify-between">
                        <fieldset className="flex items-center gap-2">
                            <Checkbox id="checked" variant="checked" color="primary" />
                            <Label htmlFor="checkbox">Remember me</Label>
                        </fieldset>
                        <a href="#" className="text-body-4 forgot-password-link">
                            Forgot password?
                        </a>
                    </div>

                    <Button size="sm" color="primary" type="submit">
                        Login with OTP
                    </Button>
                </form>
            </div>
        </AuthLayout>
    );
};

export default Login;
