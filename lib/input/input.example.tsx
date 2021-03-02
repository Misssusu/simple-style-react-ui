import React from "react";
import Input from "./input";

const InputExample: React.FunctionComponent = () => {
    return(
        <div>
            <Input />
            <Input icon="search" />
            <Input password />
        </div>
    )
}

export default InputExample