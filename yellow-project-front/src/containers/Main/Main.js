import React, {Component} from 'react';
import './Main.scss';
import {ReactComponent as BearFace} from "../../assets/icons/bear-face.svg";
import Button from "../../components/Ui/Button/Button";
import {connect} from "react-redux";
import {redirectSuccess, redirectToUrl} from "../../store/actions/jogs";
import {Redirect} from "react-router-dom";
import {auth, autoLogin} from "../../store/actions/main";

class Main extends Component {

    componentDidMount() {
        this.props.redirectSuccess();
        this.props.autoLogin();
    }

    renderRedirect() {
        if (this.props.redirect && this.props.token) {
            switch (this.props.redirectUrl) {
                case 'jogs':
                    return <Redirect to="/jogs"/>;
            }
        }
    }

    authHandler = () => {
        if (!this.props.token) {
            this.props.auth();
        }
        this.allowRedirect('jogs');
    };

    allowRedirect = (url) => {
        this.props.redirectToUrl(url);
    };

    render() {
        let main = 'main';
        return (
            <div className={main}>
                <div className={`${main}__container`}>
                    <BearFace className={`${main}__container-icon`} src={BearFace} alt="Bear Face"/>
                    <Button text='Let me in' click={() => this.authHandler()}/>
                </div>
                {this.renderRedirect()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        token: state.main.authToken,
        redirect: state.jogs.redirect,
        redirectUrl: state.jogs.redirectUrl
    }
}

function mapDispatchToProps(dispatch) {
    return {
        auth: () => dispatch(auth()),
        autoLogin: () => dispatch(autoLogin()),
        redirectToUrl: (url) => dispatch(redirectToUrl(url)),
        redirectSuccess: () => dispatch(redirectSuccess())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
