import { BrowserRouter as Router } from 'react-router-dom';

import { HomeRoute } from './HomeRoute';

export const AppRouter = () => {
    return (
        <Router>
            <HomeRoute
                path="/"
                component={ HomeRoute }
            />
        </Router>
    )
}