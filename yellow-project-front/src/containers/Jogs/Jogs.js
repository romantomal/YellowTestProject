import React, {Component} from "react";
import "./Jogs.scss";
import Loader from "../../components/Loader/Loader";
import Jog from "./components/Jog/Jog";
import CircleButton from "../../components/Ui/CircleButton/CircleButton";
import DateFilter from "./components/DateFilter/DateFilter";
import {Redirect} from "react-router-dom";
import EmptyJogs from "./components/EmptyJogs/EmptyJogs";
import {connect} from "react-redux";
import {fetchJogs, redirectSuccess, redirectToUrl, saveFilteredJogs} from "../../store/actions/jogs";

class Jogs extends Component {

    componentDidMount() {
        this.props.redirectSuccess();
        this.props.fetchJogs();
    }

    convertJodToDate(jog) {
        const date = jog.date.split('.');
        return new Date(date[2], date[1] - 1, date[0])
    }

    renderJogsList() {
        return this.props.jogsFiltered.map(jog => {
            const {date, speed, distance, time} = jog;
            return (
                <Jog date={date} speed={speed} distance={distance} time={time} key={Math.random()}/>
            )
        })
    }

    renderJogsPage() {
        return (
            <React.Fragment>
                { this.props.showDateFilter ? <DateFilter filter={(dateFrom, dateTo) => this.filterByDate(dateFrom, dateTo)}/> : null }
                <div className={'jogs__container'}>
                    {this.renderJogsList()}
                </div>
                <CircleButton click={() => this.allowRedirect('jogsCreator')}/>
            </React.Fragment>
        )
    }

    renderRedirect() {
        if (this.props.redirect) {
            switch (this.props.redirectUrl) {
                case 'jogsCreator':
                    return <Redirect to="/jogs/jogsCreator"/>;
            }
        }
    }

    allowRedirect = (url) => {
        this.props.redirectToUrl(url);
    };

    filterByDate = (dateFrom, dateTo) => {
        let jogsFiltered = [];

        if (dateFrom && dateTo) {
            for (const jog of this.props.jogs) {
                const jogDate = this.convertJodToDate(jog);
                if (jogDate > dateFrom && jogDate < dateTo) {
                    jogsFiltered.push(jog);
                }
            }
            this.props.saveFilteredJogs(jogsFiltered);
        }
    };

    render() {
        let jogs = 'jogs';
        return (
            <div className={jogs}>
                {this.props.loading ?
                    <Loader/> :
                    this.props.jogs.length > 0 ?
                        this.renderJogsPage() :
                        <EmptyJogs jogsCreatorRoute={() => this.allowRedirect('jogsCreator')}/>
                }
                {this.renderRedirect()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        jogs: state.jogs.jogs,
        jogsFiltered: state.jogs.jogsFiltered,
        showDateFilter: state.jogs.showDateFilter,
        loading: state.jogs.loading,
        jogsCreatorRender: state.jogs.jogsCreatorRender,
        redirect: state.jogs.redirect,
        redirectUrl: state.jogs.redirectUrl
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchJogs: () => dispatch(fetchJogs()),
        saveFilteredJogs: (filteredJogs) => dispatch(saveFilteredJogs(filteredJogs)),
        redirectToUrl: (url) => dispatch(redirectToUrl(url)),
        redirectSuccess: () => dispatch(redirectSuccess())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jogs);
