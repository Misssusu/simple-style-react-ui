import React from "react";
import wechat from "./icons/wechat.svg";

console.log(wechat);

interface IconProps {
    name: string
}
const Icon: React.FunctionComponent<IconProps> = (props) => {
    return(
        <span>icon</span>
    )
}

export default Icon