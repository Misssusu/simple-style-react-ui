import React from "react";
import classes from "../../helpers/classes";

interface Props extends React.HTMLAttributes<HTMLElement>{

}

const Footer: React.FunctionComponent<Props> = (props) => {
    return(
        <div className={classes(['s-layout-footer',props.className])}>footer</div>
    )
}

export default Footer