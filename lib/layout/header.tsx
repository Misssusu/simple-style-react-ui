import React from "react";
import classes from "../../helpers/classes";

interface Props extends React.HTMLAttributes<HTMLElement>{

}

const Header: React.FunctionComponent<Props> = (props) => {
    return(
        <div className={classes(['s-layout-header',props.className])}>header</div>
    )
}

export default Header