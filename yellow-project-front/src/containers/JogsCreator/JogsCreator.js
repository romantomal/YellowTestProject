import React, {Component} from "react";
import "./JogsCreator.scss";
import {Redirect} from "react-router";
import {ReactComponent as Cancel} from "../../assets/icons/cancel.svg";
import Button from "../../components/Ui/Button/Button";
import {redirectToUrl, redirectSuccess} from "../../store/actions/jogs";
import {connect} from "react-redux";
import DatePicker from "react-datepicker";

class JogsCreator extends Component {

    state = {
        date: new Date()
    };

    componentDidMount() {
        this.props.redirectSuccess();
    }

    changeDate

    renderRedirect() {
        if (this.props.redirect) {
            switch (this.props.redirectUrl) {
                case 'jogs':
                    return <Redirect to="/jogs"/>;
            }
        }
    }

    allowRedirect = (url) => {
        this.props.redirectToUrl(url);
    };

    render() {
        let jogsCreator = 'jogs-creator';
        return (
            <div className={jogsCreator}>
                <div className={`${jogsCreator}__container`}>
                    <Cancel className={`${jogsCreator}__container-close`} src={Cancel} alt="Cancel" onClick={() => this.allowRedirect('jogs')}/>
                    <div className={`${jogsCreator}__container-field`}>
                        <span className={`${jogsCreator}__container-field-text`}>Distance </span>
                        <input type="number" min="0" className={`${jogsCreator}__container-field-input`}/>
                    </div>
                    <div className={`${jogsCreator}__container-field`}>
                        <span className={`${jogsCreator}__container-field-text`}>Time </span>
                        <input type="number" min="0" className={`${jogsCreator}__container-field-input`}/>
                    </div>
                    <div className={`${jogsCreator}__container-field`}>
                        <span className={`${jogsCreator}__container-field-text`}>Date </span>
                        <DatePicker className={`${jogsCreator}__container-field-input`} selected={this.state.date} onChange={date => this.setState({date})} />
                    </div>
                    <Button text='Save' click={() => this.allowRedirect('jogs')}/>
                </div>
                {this.renderRedirect()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        redirect: state.jogs.redirect,
        redirectUrl: state.jogs.redirectUrl
    }
}

function mapDispatchToProps(dispatch) {
    return {
        redirectToUrl: (url) => dispatch(redirectToUrl(url)),
        redirectSuccess: () => dispatch(redirectSuccess())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JogsCreator);
