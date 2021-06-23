import React from 'react';
import { useSelector } from 'react-redux';
import { Header } from '../Header/Header';
import { Article } from './Article';
import { CookieScreen } from '../Cookies/CookieScreen';

import { Footer } from '../Footer/Footer';

export const HomeScreen = () => {

    const { cookies } = useSelector(state => state.ui);
    
    return (
        <>
            <div className="p-3 mb-2 bg-dark text-dark row header">
                <Header />
            </div>
            <div className="row justify-content-center article">
                <Article />
            </div>
            <div className="p-3 mt-5 bg-dark text-dark row">
            { 
                ( cookies || localStorage.getItem('cookies') ) ? <Footer /> : <CookieScreen />
            }
            </div>
        </>
    )
}
