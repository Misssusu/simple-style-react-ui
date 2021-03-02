import React, {useState} from "react";
import "./input.scss";
import Icon from "../icon/icon";

interface InputProps {
    password? : boolean;
    icon? : any;
}

const Input: React.FunctionComponent<InputProps> = (props) => {
    const { password } = props
    const [showPassword, setShowPassword] = useState(password)
    const [inputType, setInputType] = useState('text')
    const changeType = () => {
        setShowPassword(!showPassword)
        showPassword? setInputType('password') :setInputType('text')
    }
    return (
        <div className="s-input-wrapper">
            <div>{password}</div>
            <input className="s-input" type={inputType}/>
            {
                password? (<div className="s-input-icon">
                    {showPassword? (
                        <Icon name="eye" onClick={changeType}/>
                    ): (
                        <Icon name="eye-close" onClick={changeType}/>
                    )}
                </div>): (<div className="s-input-icon">
                    <Icon name={props.icon} onClick={changeType}/>
                </div>)
            }
        </div>
    )
}

export default Input