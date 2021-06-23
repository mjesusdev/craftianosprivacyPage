import { types } from '../types/types';

const initialState = {
    cookies: false
}

export const uiReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.uiCookiesTrue:
            return {
                ...state,
                cookies: true
            }
        
/*         case types.uiCookiesFalse:
            return {
                ...state,
                cookies: false
            }
 */
        default:
            return state;
    }
}