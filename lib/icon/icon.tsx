import React from "react";
import '../importIcons';
import './icon.scss';
import classes from  '../../helpers/classes';

interface IconProps extends React.SVGAttributes<SVGElement>{
    name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const { className } = props;
    return (
        <svg className={classes(['s-icon',className])} {...props}>
            <use xlinkHref={`#${props.name}`}/>
        </svg>
    )
}

export default Icon