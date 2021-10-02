import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import { AboutScreen } from '../components/AboutScreen/AboutScreen';
import { BanksScreen } from '../components/BanksScreen/BanksScreen';
import { BlogScreen } from '../components/BlogScreen/BlogScreen';
import { HomeScreen } from '../components/HomeScreen/HomeScreen';
import { LinksScreen } from '../components/LinksScreen/LinksScreen';

export const PublicRoute = () => {
    return (
        <Switch>
            <Route
                exact
                path="/" 
                component={ HomeScreen } 
            />

            <Route 
                exact 
                path="/sobre-mi" 
                component={ AboutScreen }
            />

            <Route 
                exact 
                path="/banco-movil-pagos" 
                component={ BanksScreen }
            />

            <Route 
                exact 
                path="/blog" 
                component={ BlogScreen } 
            />

            <Route 
                exact 
                path="/enlaces" 
                component={ LinksScreen } 
            />

            <Redirect to="/" />
        </Switch>
    )
}