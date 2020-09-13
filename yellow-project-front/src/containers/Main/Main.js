import React, {Component} from 'react';
import './Main.scss';
import {ReactComponent as BearFace} from "../../assets/icons/bear-face.svg";
import Button from "../../components/Ui/Button/Button";

class Main extends Component {
    state = {};

    enterHandler = () => {

    };

    render() {
        let main = 'main';
        return (
            <div className={main}>
                <div className={`${main}__container`}>
                    <BearFace className={`${main}__container-icon`} src={BearFace} alt="Bear Face"/>
                    <Button text='Let me in' onClick={this.enterHandler}/>
                </div>
            </div>
        )
    }
}

export default Main;
