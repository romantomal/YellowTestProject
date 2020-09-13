import "./MobileMenu.scss";
import {ReactComponent as BearLogo} from "../../../assets/icons/logo.svg";
import {ReactComponent as Cancel} from "../../../assets/icons/cancel.svg";
import React, {Component} from "react";
import {withRouter, NavLink} from "react-router-dom";

class MobileMenu extends Component {

    componentDidMount() {
    };

    isRoutePath(routePath) {
        return window.location.pathname === routePath;
    }

    render() {
        let menu = 'menu';
        return (
            <div className={menu}>
                <div className={`${menu}__header`}>
                    <NavLink to={"/"} exact={true}><BearLogo className={`${menu}__header-icon`} src={BearLogo} alt="Bear Logo" onClick={this.props.changeVisibility}/></NavLink>
                    <Cancel className={`${menu}__header-close`} src={Cancel} alt="Cancel" onClick={this.props.changeVisibility}/>
                </div>
                <div className={`${menu}__container`}>
                    <NavLink to={"/jogs"} exact={true} className={`${menu}__container-item ${this.isRoutePath('/jogs') ? `${menu}__container-item-select` : ''}`} onClick={this.props.changeVisibility}>JOGS</NavLink>
                    <NavLink to={"/info"} exact={true} className={`${menu}__container-item ${this.isRoutePath('/info') ? `${menu}__container-item-select` : ''}`} onClick={this.props.changeVisibility}>INFO</NavLink>
                    <NavLink to={"/contact"} exact={true} className={`${menu}__container-item ${this.isRoutePath('/contact') ? `${menu}__container-item-select` : ''}`} onClick={this.props.changeVisibility}>CONTACT US</NavLink>
                </div>
            </div>
        )
    };
}

export default withRouter(MobileMenu);
