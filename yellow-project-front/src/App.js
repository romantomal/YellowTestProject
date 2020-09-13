import React from 'react';
import './App.scss';
import Layout from "./hoc/Layout";
import Main from "./containers/Main/Main";
import {Redirect, Route, Switch} from "react-router-dom";
import Info from "./containers/Info/Info";
import Jogs from "./containers/Jogs/Jogs";
import JogsCreator from "./containers/JogsCreator/JogsCreator";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path={'/jogs/jogsCreator'} component={JogsCreator}/>
                <Route path={'/jogs'} component={Jogs}/>
                <Route path={'/info'} component={Info}/>
                <Route exact path={'/'} component={Main}/>
                <Redirect to={'/'}/>
            </Switch>
        </Layout>
    );
}

export default App;
