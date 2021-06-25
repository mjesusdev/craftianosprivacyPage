import { types } from '../types/types';

const initialState = {
    cookies: false,
    darkmode: false
}

export const uiReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.uiCookiesTrue:
            return {
                ...state,
                cookies: true
            }

        case types.uiDarkModeTrue:
            return {
                ...state,
                darkmode: true
            }

        case types.uiDarkModeFalse:
            return {
                ...state,
                darkmode: false
            }
        
        default:
            return state;
    }
}