import "./CircleButton.scss";
import React from "react";
import {ReactComponent as CircleAddIcon} from "../../../assets/icons/circle-add.svg";

const CircleButton = props => {

    return (
        <button className='circle-button' onClick={props.click}>
            <CircleAddIcon className="circle-button__icon" src={CircleAddIcon} alt="Circle Add Button" />
        </button>
    )
};

export default CircleButton
