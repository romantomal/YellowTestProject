import "./Jog.scss";
import React from "react";
import {ReactComponent as Runner} from "../../../../assets/icons/runner.svg";

const Jog = props => {

    return (
        <div className="jog">
            <Runner className="jog__icon" src={Runner} alt="Bear Face" />
            <div className="jog__container">
                <span className="jog__container-date">{props.date}</span>
                <span className="jog__container-param"><span>Speed:</span> {props.speed}</span>
                <span className="jog__container-param"><span>Distance:</span> {props.distance} km</span>
                <span className="jog__container-param"><span>Time:</span> {props.time} min</span>
            </div>
        </div>
    )
};

export default Jog;
