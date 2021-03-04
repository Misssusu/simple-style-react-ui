import React, {InputHTMLAttributes, useState} from "react";
import "./input.scss";
import Icon from "../icon/icon";
import "../../helpers/classes";
import classes from "../../helpers/classes";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    password? : boolean;
    icon? : any;
    suffix? : string
    prefix? : string
}

const Input: React.FunctionComponent<InputProps> = (props) => {
    const { password, suffix, prefix, className, ...rest } = props;
    const [showPassword, setShowPassword] = useState(password)
    const [inputType, setInputType] = useState('text')
    const clickEvent = () => {
        setShowPassword(!showPassword)
        showPassword? setInputType('password') :setInputType('text')
    }
    const positionName = suffix? 'suffix': 'prefix';
    const psw = (
        <div className={classes(['s-input-icon',positionName])}>
            {showPassword? (
                <Icon name="eye" onClick={clickEvent}/>
            ): (
                <Icon name="eye-close" onClick={clickEvent}/>
            )}
        </div>
    )
    const def = (
        <span className={classes(['s-input-icon',positionName])}>
            <Icon name={suffix || prefix} onClick={clickEvent}/>
        </span>
    )
    return (
            <div className="s-input-wrapper">
                <input
                    className={classes(['s-input',className,positionName])}
                    type={inputType}
                    {...rest}
                />
                { password? psw: def }
            </div>
    )
}

export default Input