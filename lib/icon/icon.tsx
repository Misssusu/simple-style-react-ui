import React from "react";
import '../importIcons';
import './icon.scss';

interface IconProps extends React.SVGAttributes<SVGElement>{
    name: string;
    classname?: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const { classname } = props
    return (
        <svg className={`s-icon ${classname}`} {...props}>
            <use xlinkHref={`#${props.name}`}/>
        </svg>
    )
}

export default Icon