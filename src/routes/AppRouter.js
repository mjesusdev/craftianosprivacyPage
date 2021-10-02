import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { HomeScreen } from '../components/HomeScreen/HomeScreen';

import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
        <Router>
            <div className="container-fluid">
                <PublicRoute
                    path="/"
                    component={ HomeScreen }
                />
            </div>
        </Router>
    )
}