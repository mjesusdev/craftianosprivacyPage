import React from 'react';

import { Helmet } from 'react-helmet';

import { BanksArticle } from './BanksArticle';
import { CookieVerify } from '../Cookies/CookieVerify';
import { Header } from '../Header/Header';

export const BanksScreen = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="✅ Descubre los mejores bancos online sin comisiones ❌ 
                    y las ventajas frente a los tradicionales | 💥 Opiniones Vivid Money, N26, Rebellion y Verse App" />
                <title>🥇 Los mejores bancos online y pagos móviles 📲💳</title>
            </Helmet>

            <div className="p-3 mb-2 bg-dark text-dark row header">
                <Header />
            </div>
            
            <div className="row justify-content-md-center">
                <BanksArticle />
            </div>
            
            <div className="p-3 mt-5 bg-dark text-dark row">
                <CookieVerify />
            </div>
        </>
    )
}
