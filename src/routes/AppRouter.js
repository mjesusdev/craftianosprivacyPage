import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { HomeScreen } from '../components/HomeScreen/HomeScreen';

import { HomeRoute } from './HomeRoute';

export const AppRouter = () => {
    return (
        <Router>
            <div className="container-fluid">
                <HomeRoute
                    path="/"
                    component={ HomeScreen }
                />
            </div>
        </Router>
    )
}