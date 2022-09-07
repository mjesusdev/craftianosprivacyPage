/* import { lazy } from 'react'; */
import { Switch, Route, Redirect } from 'react-router-dom';

import { AboutScreen } from '../components/AboutScreen';
import { BanksScreen, VerseScreen, VividScreen } from '../components/BanksScreen';
import { BlogScreen } from '../components/BlogScreen';
import { CashbackScreen, IgraalScreen, LetyShopsScreen, WidiloScreen } from '../components/MoneyWinEarn/Cashback';
import { CookieVerify } from '../components/Cookies';
import { Header } from '../components/ui';
import { HomeScreen } from '../components/HomeScreen';
import { LinksScreen } from '../components/LinksScreen';
import { NothingScreen, IpRoyalScreen, HoneyGainScreen } from '../components/MoneyWinEarn/Nothing';
import { PlayingScreen, GameeScreen } from '../components/MoneyWinEarn/Playing';
import { SurveysScreen, AttaPollScreen, IpsosIsayScreen, MarketAgentScreen, PollPayScreen, PrizeRebelScreen, SmartmeScreen, YouGovScreen } from '../components/MoneyWinEarn/Surveys';
import { TicketsScreen, PromosScreen, TiendeoScreen } from '../components/MoneyWinEarn/Tickets';
import { WalkingScreen } from '../components/MoneyWinEarn/Walking';

export const HomeRoute = () => {
    return (
        <>
            <header className="p-3 mb-2 text-dark row">
                <Header />
            </header>

            {/* TODO: Change to tag article? */}
            <Switch>
                <Route exact path="/" component={ HomeScreen } />

                <Route exact path="/sobre-mi/" component={ AboutScreen } />
                <Route exact path="/banco-movil-pagos/" component={ BanksScreen } />
                <Route exact path="/blog/" component={ BlogScreen } />
                <Route exact path="/enlaces/" component={ LinksScreen } />

                { /* Routes for DropDown "MoneyWin" */ }
                <Route exact path="/gana-dinero-sin-hacer-nada/" component={ NothingScreen } />
                <Route exact path="/gana-dinero-caminando/" component={ WalkingScreen } />
                <Route exact path="/gana-dinero-jugando/" component={ PlayingScreen } />
                <Route exact path="/encuestas-renumeradas/" component={ SurveysScreen } />

                { /*  Routes for DropDown "MoneyEarn" */}
                <Route exact path="/compras-cashback/" component={ CashbackScreen } />
                <Route exact path="/apps-dinero-tickets/" component={ TicketsScreen } />

                { /* Routes for DropDown "Banks" */ }
                <Route exact path="/verse-app/" component={ VerseScreen } />
                <Route exact path="/vivid-money/" component={ VividScreen } />

                { /* Routes Cashback */ }
                <Route exact path="/igraal/" component={ IgraalScreen } />
                <Route exact path="/letyshops/" component={ LetyShopsScreen } />
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
            
            <footer className="p-3 mt-2 text-dark row">
                <CookieVerify />
            </footer>
        </>
    )
}