import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import { Header } from '../components/ui/Header';
import { CookieVerify } from '../components/Cookies/CookieVerify';

import { AboutScreen } from '../components/AboutScreen/AboutScreen';
import { LinksScreen } from '../components/LinksScreen/LinksScreen';
import { BanksScreen } from '../components/BanksScreen/BanksScreen';
import { BlogScreen } from '../components/BlogScreen/BlogScreen';
import { HomeScreen } from '../components/HomeScreen/HomeScreen';

import { NothingScreen } from '../components/MoneyWin/Nothing/NothingScreen';

import { CashbackScreen } from '../components/MoneyEarn/CashbackScreen/CashbackScreen';
import { TicketsScreen } from '../components/MoneyEarn/TicketsScreen/TicketsScreen';

export const HomeRoute = () => {
    return (
        <>
            <div className="p-3 mb-2 bg-dark text-dark row header">
                <Header />
            </div>
            
            <Switch>
                <Route exact path="/" component={ HomeScreen } />
                <Route exact path="/sobre-mi" component={ AboutScreen } />
                <Route exact path="/banco-movil-pagos" component={ BanksScreen } />
                <Route exact path="/blog" component={ BlogScreen } />
                <Route exact path="/enlaces" component={ LinksScreen } />

                { /* Routes for DropDown "MoneyWin" */ }
                <Route exact path="/gana-dinero-sin-hacer-nada" component={ NothingScreen } />
                {/* 
                    <Route exact path="/encuestas-renumeradas" component={ SurveysScreen } />
                    <Route exact path="/gana-dinero-jugando" component={ PlayingScreen } />
                    <Route exact path="/gana-cryptos-gratis" component={ CryptosScreen } /> */}

                { /*  Routes for DropDown "MoneyEarn" */}
                <Route exact path="/compras-cashback" component={ CashbackScreen } />
                <Route exact path="/apps-dinero-tickets" component={ TicketsScreen } />

                <Redirect to="/" />
            </Switch>
        
            <div className="p-3 mt-2 bg-dark text-dark row">
                <CookieVerify />
            </div>
        </>

    )
}