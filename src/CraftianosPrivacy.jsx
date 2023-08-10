import { Provider } from 'react-redux';

import { store } from './store/store';
import { AppRouter } from './routes/AppRouter';

import { init } from "@aptabase/web";
init("A-EU-3117997246"); // 👈 this is where you enter your App Key

export const CraftianosPrivacy = () => {  
    return (
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    )
}
