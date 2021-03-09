import ButtonExample from "./button.example";
import React from "react";
import Demo from "../demo";
const code = require('!!raw-loader!./button.example.tsx');

const ButtonDemo:React.FunctionComponent = () => {
    return(
        <div>
            <h1>按钮</h1>
            <h2>简单用法</h2>
            <h4>预览</h4>
            <Demo code={code.default}>
                <ButtonExample />
            </Demo>
        </div>
    )
}

export default ButtonDemo
