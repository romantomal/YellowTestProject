import "./Button.scss";
import React from "react";

const Button = props => {

    return (<button className='button' onClick={props.click} style={props.style}>{props.text}</button>)
};

export default Button
