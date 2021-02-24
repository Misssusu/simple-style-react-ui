import React from "react";
import '../importIcons';
import './icon.scss';

interface IconProps extends React.SVGAttributes<SVGElement>{
    name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <svg className='s-icon' {...props}>
            <use xlinkHref={`#${props.name}`}/>
        </svg>
    )
}

export default Icon