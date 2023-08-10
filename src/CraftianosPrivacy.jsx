import { Provider } from 'react-redux';

import { store } from './store/store';
import { AppRouter } from './routes/AppRouter';

import { init } from "@aptabase/web";
init("A-EU-3117997246"); // 👈 this is where you enter your App Key

import { trackEvent } from "@aptabase/web";

trackEvent("app_started"); // An event with no properties
trackEvent("page_view", { name: "Settings", path: "/settings" });

export const CraftianosPrivacy = () => {  
    return (
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    )
}
