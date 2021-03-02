import React from "react";
import classes from "../../helpers/classes";

interface Props extends React.HTMLAttributes<HTMLElement>{
    
}

const Content: React.FunctionComponent<Props> = (props) => {
    return(
        <div className={classes(['s-layout-content',props.className])}>content</div>
    )
}

export default Content