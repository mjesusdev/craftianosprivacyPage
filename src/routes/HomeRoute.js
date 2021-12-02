import React from 'react';

import { Switch, Route, Redirect } from 'react-router';

import { Header } from '../components/ui/Header';
import { CookieVerify } from '../components/Cookies/CookieVerify';

import { AboutScreen } from '../components/AboutScreen/AboutScreen';
import { LinksScreen } from '../components/LinksScreen/LinksScreen';
import { BanksScreen } from '../components/BanksScreen/BanksScreen';
import { BlogScreen } from '../components/BlogScreen/BlogScreen';
import { HomeScreen } from '../components/HomeScreen/HomeScreen';

import { CryptosScreen } from '../components/MoneyWin/Cryptos/CryptosScreen';
import { NothingScreen } from '../components/MoneyWin/Nothing/NothingScreen';
import { PlayingScreen } from '../components/MoneyWin/Playing/PlayingScreen';
import { SurveysScreen } from '../components/MoneyWin/Surveys/SurveysScreen';

import { CashbackScreen } from '../components/MoneyEarn/Cashback/CashbackScreen';
import { TicketsScreen } from '../components/MoneyEarn/TicketsScreen/TicketsScreen';

import { MoneyRoute } from './MoneyRoute';
import { VerseScreen } from '../components/BanksScreen/Verse/VerseScreen';
import { VividScreen } from '../components/BanksScreen/VividMoney/VividScreen';

export const HomeRoute = () => {
    return (
        <>
            <div className="p-3 mb-2 text-dark row header">
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
                <Route exact path="/encuestas-renumeradas" component={ SurveysScreen } />
                <Route exact path="/gana-dinero-jugando" component={ PlayingScreen } />
                <Route exact path="/gana-cryptos-gratis" component={ CryptosScreen } />

                { /*  Routes for DropDown "MoneyEarn" */}
                <Route exact path="/compras-cashback" component={ CashbackScreen } />
                <Route exact path="/apps-dinero-tickets" component={ TicketsScreen } />

                { /* Routes for DropDown "Banks" */ }
                <Route exact path="/verse-app" component={ VerseScreen } />
                <Route exact path="/vivid-money" component={ VividScreen } />

                {/* Routes for All Money */ }
                <MoneyRoute />

                {/* Route 404 */}
                <Route path="*" component={ HomeScreen } />

                <Redirect to="/" />
            </Switch>
        
            <div className="p-3 mt-2 text-dark row footer">
                <CookieVerify />
            </div>

            {/* // Include <Footer and param/> */}
        </>
    )
}