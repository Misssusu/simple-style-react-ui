import React from 'react';
import './button.scss';
import classes from "../../helpers/classes";

interface IconProps {
    type? : string
}


const Button: React.FunctionComponent<IconProps> = (props) => {
    const { type } = props
    return(
        <button className={classes(['s-button', type])}>按钮</button>
    )
}
export default Button