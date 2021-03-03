import ButtonExample from "./button.example";
import React from "react";
import Demo from "../../demo";
const code = require('!!raw-loader!./button.example.tsx');

const ButtonDemo:React.FunctionComponent = () => {
    return(
        <Demo code={code.default}>
            <ButtonExample />
        </Demo>
    )
}

export default ButtonDemo
