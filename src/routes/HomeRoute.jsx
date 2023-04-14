/* import { lazy } from 'react'; */
import { Switch, Route, Redirect } from 'react-router-dom';

import { AboutScreen } from '../components/AboutScreen';
import { BlogScreen } from '../components/BlogScreen/BlogScreen';
import { CookieVerify } from '../components/Cookies';
import { Header } from '../components/ui';
import { HomeScreen } from '../components/HomeScreen';

export const HomeRoute = () => {
    return (
        <div className='container-md'>
            <header className='p-3 mb-2 text-dark row'>
                <Header />
            </header>

            <Switch>
                <Route exact path="/" component={ HomeScreen } />
                <Route exact path="/sobre-mi/" component={ AboutScreen } />
                <Route exact path="/blog/" component={ BlogScreen } />

                {/* Route 404 */}
                <Route path="*" component={ HomeScreen } />

                <Redirect to="/" />
            </Switch>
            
            <footer className='p-3 mt-2 text-dark row'>
                <CookieVerify />
            </footer>
        </div>
    )
}