import React, {Component} from "react";
import "./JogsCreator.scss";
import {Redirect} from "react-router";
import {ReactComponent as Cancel} from "../../assets/icons/cancel.svg";
import Button from "../../components/Ui/Button/Button";
import {redirectToUrl, redirectSuccess, createNewJog} from "../../store/actions/jogs";
import {connect} from "react-redux";
import DatePicker from "react-datepicker";

class JogsCreator extends Component {
    state = {
        date: new Date(),
        distance: '',
        time: ''
    };

    componentDidMount() {
        this.props.redirectSuccess();
    }

    renderRedirect() {
        if (this.props.redirect) {
            switch (this.props.redirectUrl) {
                case 'jogs':
                    return <Redirect to="/jogs"/>;
            }
        }
    }

    handleTimeChange = (event) => {
        this.setState({time: event.target.value});
    };

    handleDistanceChange = (event) => {
        this.setState({distance: event.target.value});
    };

    submitSaveNewJog = () => {
        const {date, distance, time} = this.state;
        const speed = (distance / time).toFixed(1);
        this.props.createNewJog(date, speed, distance, time);
        if (!this.props.loading){
            this.allowRedirect('jogs')
        }
    };

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
                        <input type="number" min="0" className={`${jogsCreator}__container-field-input`} value={this.state.distance} onChange={this.handleDistanceChange}/>
                    </div>
                    <div className={`${jogsCreator}__container-field`}>
                        <span className={`${jogsCreator}__container-field-text`}>Time </span>
                        <input type="number" min="0" className={`${jogsCreator}__container-field-input`} value={this.state.time} onChange={this.handleTimeChange}/>
                    </div>
                    <div className={`${jogsCreator}__container-field`}>
                        <span className={`${jogsCreator}__container-field-text`}>Date </span>
                        <DatePicker className={`${jogsCreator}__container-field-input`} selected={this.state.date} onChange={date => this.setState({date})} />
                    </div>
                    <Button text='Save' click={() => this.submitSaveNewJog()}/>
                </div>
                {this.renderRedirect()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        loading: state.jogs.loading,
        redirect: state.jogs.redirect,
        redirectUrl: state.jogs.redirectUrl
    }
}

function mapDispatchToProps(dispatch) {
    return {
        redirectToUrl: (url) => dispatch(redirectToUrl(url)),
        redirectSuccess: () => dispatch(redirectSuccess()),
        createNewJog: (date, speed, distance, time) => dispatch(createNewJog(date, speed, distance, time))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JogsCreator);
