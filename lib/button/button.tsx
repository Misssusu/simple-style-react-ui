import React from 'react';
import './button.scss';
import classes from "../../helpers/classes";

interface IconProps {
    type? : string;
    onClick? : any
}


const Button: React.FunctionComponent<IconProps> = (props) => {
    const { type, onClick } = props
    return(
        <button
            className={classes(['s-button', type])}
            onClick={onClick}
        >按钮</button>
    )
}
export default Button