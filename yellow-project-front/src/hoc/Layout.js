import styles from "./Layout.scss";
import React, {Component} from "react";
import Navbar from "../components/Navigation/Navbar/Navbar";

class Layout extends Component {
    render() {

        return (
            <div className={styles.Layout}>
                <Navbar/>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout
