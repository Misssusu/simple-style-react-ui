import InputExample from "./input.example";
import InputExampleSearch from "./input.example.search";
import InputExampleLogin from "./input.example.login";
import React from "react";
import Demo from "../demo";
const code = require('!!raw-loader!./input.code.tsx');
const searchCode = require('!!raw-loader!./input.search.code.tsx');
const loginCode = require('!!raw-loader!./input.login.code.tsx');

const InputDemo:React.FunctionComponent = () => {
    return(
        <div>
            <div>
                <h1>按钮</h1>
                <h2>简单用法</h2>
                <h4>预览</h4>
                <Demo code={code.default}>
                    <InputExample />
                </Demo>
            </div>
            <div>
                <h2>默认的搜索框</h2>
                <h4>预览</h4>
                <Demo code={searchCode.default}>
                    <InputExampleSearch />
                </Demo>
            </div>
            <div>
                <h2>添加前缀或者后缀</h2>
                <h4>预览</h4>
                <Demo code={loginCode.default}>
                    <InputExampleLogin />
                </Demo>
            </div>
        </div>
    )
}

export default InputDemo