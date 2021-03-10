import LayoutExample1 from "./layout.example1";
import LayoutExample2 from "./layout.example2";
import LayoutExample3 from "./layout.example3";
import LayoutExample4 from "./layout.example4";
import React from "react";
import Demo from "../demo";
const code = require('!!raw-loader!./layout.one.code.txt');
const codeTwo = require('!!raw-loader!./layout.two.code.txt');
const codeThree = require('!!raw-loader!./layout.three.code.txt');
const codeFour = require('!!raw-loader!./layout.four.code.txt');

const LayoutDemo:React.FunctionComponent = () => {
    return(
        <div>
            <div>
                <h1>布局</h1>
                <h2>第一种</h2>
                <h4>预览</h4>
                <Demo code={code.default}>
                    <LayoutExample1 />
                </Demo>
            </div>
            <div>
                <h2>第二种</h2>
                <h4>预览</h4>
                <Demo code={codeTwo.default}>
                    <LayoutExample2 />
                </Demo>
            </div>
            <div>
                <h2>第三种</h2>
                <h4>预览</h4>
                <Demo code={codeThree.default}>
                    <LayoutExample3 />
                </Demo>
            </div>
            <div>
                <h2>第四种</h2>
                <h4>预览</h4>
                <Demo code={codeFour.default}>
                    <LayoutExample4 />
                </Demo>
            </div>
        </div>
    )
}

export default LayoutDemo