import React, {ReactElement} from "react";
import "./layout.scss";
import "../../helpers/classes";
import classes from "../../helpers/classes";
import Aside from "./aside";

interface Props extends React.HTMLAttributes<HTMLElement>{
    children : ReactElement | Array<ReactElement>
}


const Layout: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    let children = (props.children as Array<ReactElement>);
    let hasAsideClassName = '';
    children.map(node => {
        node.type === Aside ? hasAsideClassName = 'hasAside': '';
    })
    return(
        <div className={classes(['s-layout',className,hasAsideClassName])} {...rest}>
            {props.children}
        </div>
    )
}

export default Layout