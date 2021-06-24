import React from 'react';

import { CookieVerify } from '../Cookies/CookieVerify';
import { Header } from '../Header/Header';
import { Article } from './Article';

export const AboutScreen = () => {
    return (
        <>
            <div className="p-3 mb-2 bg-dark text-dark row header">
                <Header />
            </div>
            {
                <Article />
            }
            <div className="p-3 mt-5 bg-dark text-dark row">
            {
                <CookieVerify />
            }
            </div>
        </>
    )
}
