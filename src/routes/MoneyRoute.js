import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { IgraalScreen } from '../components/MoneyEarn/Cashback/Igraal/IgraalScreen';
import { LetyShopsScreen } from '../components/MoneyEarn/Cashback/Letyshops/LetyShopsScreen';
import { RobinScreen } from '../components/MoneyEarn/Cashback/RobinRover/RobinScreen';
import { WidiloScreen } from '../components/MoneyEarn/Cashback/Widilo/WidiloScreen';

import { PromosScreen } from '../components/MoneyEarn/TicketsScreen/Promos/PromosScreen';
import { TiendeoScreen } from '../components/MoneyEarn/TicketsScreen/Tiendeo/TiendeoScreen';

import { HoneyGainScreen } from '../components/MoneyWin/Nothing/HoneyGain/HoneyGainScreen';
import { GameeScreen } from '../components/MoneyWin/Playing/Gamee/GameeScreen';

import { AttaPollScreen } from '../components/MoneyWin/Surveys/AttaPoll/AttaPollScreen';
import { IpsosIsayScreen } from '../components/MoneyWin/Surveys/Ipsos-isay/IpsosIsayScreen';
import { MarketAgentScreen } from '../components/MoneyWin/Surveys/Marketagent/MarketAgentScreen';
import { PollPayScreen } from '../components/MoneyWin/Surveys/PollPay/PollPayScreen';
import { PrizeRebelScreen } from '../components/MoneyWin/Surveys/PrizeRebel/PrizeRebelScreen';
import { SmartmeScreen } from '../components/MoneyWin/Surveys/SmartmeApp/SmartmeScreen';
import { YouGovScreen } from '../components/MoneyWin/Surveys/YouGov/YouGovScreen';

export const MoneyRoute = () => {
    return (
        <>
            <Switch>
                { /* Routes Cashback */ }
                <Route exact path="/igraal" component={ IgraalScreen } />
                <Route exact path="/letyshops" component={ LetyShopsScreen } />
                <Route exact path="/robin-rover" component={ RobinScreen } />
                <Route exact path="/widilo" component={ WidiloScreen } />

                { /* Routes Cashback Tickets */ }
                <Route exact path="/promos-app" component={ PromosScreen } />
                <Route exact path="/tiendeo" component={ TiendeoScreen } />

                { /* Routes Nothing - HoneyGain, IPRoyal Panws */}
                <Route exact path="/honeygain" component={ HoneyGainScreen } />

                { /* Routes for Surveys */ }
                <Route exact path="/attapoll" component={ AttaPollScreen } />
                <Route exact path="/ipsos-isay" component={ IpsosIsayScreen } />
                <Route exact path="/marketagent" component={ MarketAgentScreen } />
                <Route exact path="/pollpay" component={ PollPayScreen } />
                <Route exact path="/prize-rebel" component={ PrizeRebelScreen } />
                <Route exact path="/smartme-app" component={ SmartmeScreen } />
                <Route exact path="/yougov" component={ YouGovScreen } />

                { /* Routes Games */ }
                <Route exact path="/gamee" component={ GameeScreen } />

                <Redirect to="/" />
            </Switch>
        </>
    )
}