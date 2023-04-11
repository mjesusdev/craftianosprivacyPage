import { Provider } from 'react-redux';

import { store } from './store/store';
import { AppRouter } from './routes/AppRouter';

export const CraftianosPrivacy = () => {  
    return (
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    )
}
