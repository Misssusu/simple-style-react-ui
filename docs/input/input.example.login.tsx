import React from "react";
import Input from "../../lib/input/input";

const InputExampleLogin: React.FunctionComponent = () => {
    return(
        <div>
            <div>
                <Input suffix="eye" password placeholder="Please enter password"/>
            </div>
            <div style={{marginTop: 20}}>
                <Input prefix='user' placeholder="Please enter user"/>
            </div>
        </div>
    )
}

export default InputExampleLogin