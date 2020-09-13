import "./EmptyJogs.scss";
import React from "react";
import {ReactComponent as SadFace} from "../../../../assets/icons/sad-rounded-square-emoticon.svg";
import Button from "../../../../components/Ui/Button/Button";

const EmptyJogs = props => {
    const computedStyle = getComputedStyle(document.documentElement);
    const noJogs = "no-jogs";
    const buttonStyle = {
        'color': computedStyle.getPropertyValue('--baby-purple'),
        'border': `3px solid ${computedStyle.getPropertyValue('--baby-purple')}`,
        'width': '25rem'
    };

    return (
        <div className={`${noJogs}`}>
            <div className={`${noJogs}__container`}>
                <SadFace className={`${noJogs}__container-icon`} src={SadFace} alt="Sad Face"/>
                <span className={`${noJogs}__container-text`}>Nothing is there</span>
            </div>
            <Button text='Create your jog first' style={buttonStyle} click={props.jogsCreatorRoute}/>
        </div>
    )
};

export default EmptyJogs;
