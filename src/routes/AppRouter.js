import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import { HomeScreen } from '../components/HomeScreen/HomeScreen';
import { AboutScreen } from '../components/AboutScreen/AboutScreen';
import { LinksScreen } from '../components/LinksScreen/LinksScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ HomeScreen } />
                    <Route exact path="/sobre-mi" component={ AboutScreen } />
                    <Route exact path="/enlaces" component={ LinksScreen } />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}