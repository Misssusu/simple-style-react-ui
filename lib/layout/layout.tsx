import React from "react";
import "./layout.scss";
import "../../helpers/classes";
import classes from "../../helpers/classes";

interface Props extends React.HTMLAttributes<HTMLElement>{

}


const Layout: React.FunctionComponent<Props> = (props) => {

    return(
        <div className={classes(['s-layout',props.className])}>
            {props.children}
        </div>
    )
}

export default Layout