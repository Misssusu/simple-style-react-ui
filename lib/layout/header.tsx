import React from "react";
import classes from "../../helpers/classes";

interface Props extends React.HTMLAttributes<HTMLElement>{

}

const Header: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    return(
        <div className={classes(['s-layout-header',props.className])} {...rest}>
            {props.children}
        </div>
    )
}

export default Header