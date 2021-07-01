import React from 'react';

import { Helmet } from 'react-helmet';

import { Header } from '../Header/Header';
import { Article } from './Article';

import { CookieVerify } from '../Cookies/CookieVerify';

export const HomeScreen = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Descubre la forma de generar DINERO realizando encuestas 📗, 
                    por comprar en tiendas online, apps y mucho más ¿Te unes? 👋 | Craftianosmoney" />
                <title>🥇 Gana dinero desde casa en 2021 | Craftianosmoney</title>
            </Helmet>

            <div className="p-3 mb-2 bg-dark text-dark row header">
                <Header />
            </div>
            
            <Article />

            <div className="p-3 mt-5 bg-dark text-dark row">
                <CookieVerify />
            </div>
        </>
    )
}
