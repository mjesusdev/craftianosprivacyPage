import React from 'react';

import { Switch, Route, Redirect } from 'react-router';

import { AboutScreen } from '../components/AboutScreen/AboutScreen';
import { AttaPollScreen } from '../components/MoneyWin/Surveys/AttaPoll/AttaPollScreen';
import { BanksScreen } from '../components/BanksScreen/BanksScreen';
import { BlogScreen } from '../components/BlogScreen/BlogScreen';
import { CashbackScreen } from '../components/MoneyEarn/Cashback/CashbackScreen';
import { CookieVerify } from '../components/Cookies/CookieVerify';
import { CryptosScreen } from '../components/MoneyWin/Cryptos/CryptosScreen';
import { GameeScreen } from '../components/MoneyWin/Playing/Gamee/GameeScreen';
import { Header } from '../components/ui/Header';
import { HomeScreen } from '../components/HomeScreen/HomeScreen';
import { HoneyGainScreen } from '../components/MoneyWin/Nothing/HoneyGain/HoneyGainScreen';
import { IgraalScreen } from '../components/MoneyEarn/Cashback/Igraal/IgraalScreen';
import { IpsosIsayScreen } from '../components/MoneyWin/Surveys/Ipsos-isay/IpsosIsayScreen';
import { LetyShopsScreen } from '../components/MoneyEarn/Cashback/Letyshops/LetyShopsScreen';
import { LinksScreen } from '../components/LinksScreen/LinksScreen';
import { MarketAgentScreen } from '../components/MoneyWin/Surveys/Marketagent/MarketAgentScreen';
import { NothingScreen } from '../components/MoneyWin/Nothing/NothingScreen';
import { PlayingScreen } from '../components/MoneyWin/Playing/PlayingScreen';
import { PollPayScreen } from '../components/MoneyWin/Surveys/PollPay/PollPayScreen';
import { PrizeRebelScreen } from '../components/MoneyWin/Surveys/PrizeRebel/PrizeRebelScreen';
import { PromosScreen } from '../components/MoneyEarn/Tickets/Promos/PromosScreen';
import { RobinScreen } from '../components/MoneyEarn/Cashback/RobinRover/RobinScreen';
import { SmartmeScreen } from '../components/MoneyWin/Surveys/SmartmeApp/SmartmeScreen';
import { SurveysScreen } from '../components/MoneyWin/Surveys/SurveysScreen';
import { TicketsScreen } from '../components/MoneyEarn/Tickets/TicketsScreen';
import { TiendeoScreen } from '../components/MoneyEarn/Tickets/Tiendeo/TiendeoScreen';
import { VerseScreen } from '../components/BanksScreen/Verse/VerseScreen';
import { VividScreen } from '../components/BanksScreen/VividMoney/VividScreen';
import { WidiloScreen } from '../components/MoneyEarn/Cashback/Widilo/WidiloScreen';
import { YouGovScreen } from '../components/MoneyWin/Surveys/YouGov/YouGovScreen';
import { IpRoyalScreen } from '../components/MoneyWin/Nothing/IpRoyal/IpRoyalScreen';

export const HomeRoute = () => {
    return (
        <>
            <div className="p-3 mb-2 text-dark row header">
                <Header />
            </div>
            
            <Switch>
                <Route exact path="/" component={ HomeScreen } />
                <Route exact path="/sobre-mi/" component={ AboutScreen } />
                <Route exact path="/banco-movil-pagos/" component={ BanksScreen } />
                <Route exact path="/blog/" component={ BlogScreen } />
                <Route exact path="/enlaces/" component={ LinksScreen } />

                { /* Routes for DropDown "MoneyWin" */ }
                <Route exact path="/gana-dinero-sin-hacer-nada/" component={ NothingScreen } />
                <Route exact path="/encuestas-renumeradas/" component={ SurveysScreen } />
                <Route exact path="/gana-dinero-jugando/" component={ PlayingScreen } />
                <Route exact path="/gana-cryptos-gratis/" component={ CryptosScreen } />

                { /*  Routes for DropDown "MoneyEarn" */}
                <Route exact path="/compras-cashback/" component={ CashbackScreen } />
                <Route exact path="/apps-dinero-tickets/" component={ TicketsScreen } />

                { /* Routes for DropDown "Banks" */ }
                <Route exact path="/verse-app/" component={ VerseScreen } />
                <Route exact path="/vivid-money/" component={ VividScreen } />

                { /* Routes Cashback */ }
                <Route exact path="/igraal/" component={ IgraalScreen } />
                <Route exact path="/letyshops/" component={ LetyShopsScreen } />
                <Route exact path="/robin-rover/" component={ RobinScreen } />
                <Route exact path="/widilo/" component={ WidiloScreen } />

                { /* Routes Cashback Tickets */ }
                <Route exact path="/promos-app/" component={ PromosScreen } />
                <Route exact path="/tiendeo/" component={ TiendeoScreen } />

                { /* Routes Nothing - HoneyGain, IPRoyal Panws */}
                <Route exact path="/honeygain/" component={ HoneyGainScreen } />
                <Route exact path="/iproyal/" component={ IpRoyalScreen } />

                { /* Routes for Surveys */ }
                <Route exact path="/attapoll/" component={ AttaPollScreen } />
                <Route exact path="/ipsos-isay/" component={ IpsosIsayScreen } />
                <Route exact path="/marketagent/" component={ MarketAgentScreen } />
                <Route exact path="/pollpay/" component={ PollPayScreen } />
                <Route exact path="/prize-rebel/" component={ PrizeRebelScreen } />
                <Route exact path="/smartme-app/" component={ SmartmeScreen } />
                <Route exact path="/yougov/" component={ YouGovScreen } />

                { /* Routes Games */ }
                <Route exact path="/gamee/" component={ GameeScreen } />

                {/* Route 404 */}
                <Route path="*" component={ HomeScreen } />

                <Redirect to="/" />
            </Switch>
        
            <div className="p-3 mt-2 text-dark row footer">
                <CookieVerify />
            </div>
        </>
    )
}