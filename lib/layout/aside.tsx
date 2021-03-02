import React from "react";
import classes from "../../helpers/classes";

interface Props extends React.HTMLAttributes<HTMLElement>{

}

const Aside: React.FunctionComponent<Props> = (props) => {
    return(
        <div className={classes(['s-layout-aside',props.className])}>aside</div>
    )
}

export default Aside