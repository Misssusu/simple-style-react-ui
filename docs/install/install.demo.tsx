import React from "react";
import Demo from "../demo";
const code = require('!!raw-loader!./install.code.txt');

const InstallDemo: React.FunctionComponent = () => {
    return(
        <div>
            <h2>可通过 npm 或者 yarn 来安装</h2>
            <Demo code={code.default}></Demo>
        </div>
    )
}

export default InstallDemo