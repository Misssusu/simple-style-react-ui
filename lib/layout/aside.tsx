import React from "react";
import classes from "../../helpers/classes";

interface Props extends React.HTMLAttributes<HTMLElement>{

}

const Aside: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    return(
        <div className={classes(['s-layout-aside',props.className])} {...rest}>
            {props.children}
        </div>
    )
}

export default Aside