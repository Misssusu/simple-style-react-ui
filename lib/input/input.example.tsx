import React, {useState} from "react";
import Input from "./input";

const InputExample: React.FunctionComponent = () => {
    const [inputValue, setInputValue] = useState('')
    return(
        <div>
            <Input placeholder="Please enter content"/>
            <Input suffix="search" placeholder="Please enter content"/>
            <Input password suffix="eye" placeholder="Please enter password"/>
            <Input
                suffix='clear'
                value={inputValue}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setInputValue(e.target.value)}}
                placeholder="Please enter content"
            />
            <Input prefix='user' placeholder="Please enter user"/>
        </div>
    )
}

export default InputExample