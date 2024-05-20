import { Envelope } from "phosphor-react";
import { Icon, Input } from "keep-react";

const InputWithIcon = () => {
    return (
        <fieldset className="relative max-w-md">
            <Input placeholder="Enter email" className="ps-11" />
            <Icon>
                <Envelope size={19} color="#AFBACA" />
            </Icon>
        </fieldset>
    );
};

export default InputWithIcon;
