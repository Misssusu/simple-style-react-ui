import React from "react";
import './importIcons';
import './icon.scss';
import classes from  '../../helpers/classes';

interface IconProps extends React.SVGAttributes<SVGElement>{
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const { className, name, ...restProps } = props;
    return (
        <svg className={classes(['s-icon',className])} {...restProps}>
            <use xlinkHref={`#${name}`}/>
        </svg>
    )
}

export default Icon