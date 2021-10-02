import React from 'react';
import { useSelector } from 'react-redux';

import { CookieScreen } from './CookieScreen';
import { Footer } from '../Footer/Footer';

export const CookieVerify = () => {

    const { cookies } = useSelector(state => state.ui);

    return (
        <>
            {
                ( cookies || localStorage.getItem('cookies') ) ? <Footer /> : <CookieScreen />
            }
        </>
    )
}
