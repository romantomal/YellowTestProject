import "./Navbar.scss";
import {ReactComponent as BearLogo} from "../../../assets/icons/logo.svg";
import {ReactComponent as FilterIcon} from "../../../assets/icons/filter.svg";
import {ReactComponent as MenuIcon} from "../../../assets/icons/menu-mobile-icon.svg";
import React, {Component} from "react";
import {withRouter, NavLink} from "react-router-dom";
import {BrowserView, MobileView} from "react-device-detect";
import {changeJogsDateFilterVisibility} from "../../../store/actions/jogs";
import {connect} from "react-redux";
import MobileMenu from "../MobileMenu/MobileMenu";
import {changeMobileMenuVisibility} from "../../../store/actions/menu";

class Navbar extends Component {

    componentDidMount() {
    };

    isRoutePath(routePath) {
        return window.location.pathname === routePath;
    }

    changeVisibilityOfDateFilter() {
        this.props.showJogsDateFilter(!this.props.showDateFilter)
    }

    changeVisibilityOfMobileMenu() {
        this.props.showAppMobileMenu(!this.props.showMobileMenu)
    }

    renderEnableFilterButton(nav) {
        return (
            <FilterIcon className={`${nav}__container-icon`} src={FilterIcon} alt="Filter Icon" onClick={() => this.changeVisibilityOfDateFilter()}/>
        )
    }

    render() {
        let nav = 'navbar';
        return (
            <React.Fragment>
                <nav className={nav}>
                    <NavLink to={"/"} exact={true}>
                        <BearLogo className={`${nav}__icon`} src={BearLogo} alt="Bear Logo"/>
                    </NavLink>
                    <BrowserView>
                        <div className={`${nav}__container`}>
                            <NavLink to={"/jogs"} exact={true} className={`${nav}__container-item ${this.isRoutePath('/jogs') ? `${nav}__container-item-underline` : ''}`}>JOGS</NavLink>
                            <NavLink to={"/info"} exact={true} className={`${nav}__container-item ${this.isRoutePath('/info') ? `${nav}__container-item-underline` : ''}`}>INFO</NavLink>
                            <NavLink to={"/contact"} exact={true} className={`${nav}__container-item ${this.isRoutePath('/contact') ? `${nav}__container-item-underline` : ''}`}>CONTACT US</NavLink>
                            {this.isRoutePath('/jogs') ? this.renderEnableFilterButton(nav) : null}
                        </div>
                    </BrowserView>
                    <MobileView>
                        <div className={`${nav}__container`}>
                            {this.isRoutePath('/jogs') && this.props.jogs !== 0 ? this.renderEnableFilterButton(nav) : null}
                            <MenuIcon className={`${nav}__container-icon`} src={MenuIcon} alt="Menu Icon" onClick={() => this.changeVisibilityOfMobileMenu()}/>
                        </div>
                    </MobileView>
                </nav>
                {this.props.showMobileMenu ? <MobileMenu changeVisibility={() => this.changeVisibilityOfMobileMenu()}/> : null}
            </React.Fragment>
        )
    };
}

function mapStateToProps(state) {
    return {
        jogs: state.jogs.jogs,
        showDateFilter: state.jogs.showDateFilter,
        showMobileMenu: state.menu.showMobileMenu
    }
}

function mapDispatchToProps(dispatch) {
    return {
        showJogsDateFilter: (value) => dispatch(changeJogsDateFilterVisibility(value)),
        showAppMobileMenu: (value) => dispatch(changeMobileMenuVisibility(value))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
