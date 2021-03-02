import React from "react";
import Button from "./button";

const ButtonExample: React.FunctionComponent = () => {
    return (
        <div>
            <Button type="default" onClick={()=>{console.log('click')}}/>
            <Button type="primary"/>
            <Button type="warning"/>
            <Button type="danger"/>
            <Button type="info"/>
            <Button type="success"/>
        </div>
    )
}

export default ButtonExample