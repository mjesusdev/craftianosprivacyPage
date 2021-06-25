import React from 'react';

import { Helmet } from 'react-helmet';

import { CookieVerify } from '../Cookies/CookieVerify';
import { Header } from '../Header/Header';
import { Article } from './Article';

export const AboutScreen = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Redes Sociales de Craftianosmoney, Instagram @craftianosmoney, Twitter, 
                Peoople @craftianos y Youtube. Sigueme para enterarte de todas mis novedades." />
                <title>Redes Sociales de Craftianosmoney | ¿Me sigues? 🤯</title>
            </Helmet>

            <div className="p-3 mb-2 bg-dark text-dark row header">
                <Header />
            </div>
            
            <div className="row justify-content-end">
                <Article />
            </div>
            
            <div className="p-3 mt-5 bg-dark text-dark row">
                <CookieVerify />
            </div>
        </>
    )
}
