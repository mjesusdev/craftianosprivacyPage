import React from 'react';

import { Helmet } from 'react-helmet';

import { BanksArticle } from './BanksArticle';

export const BanksScreen = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="✅ Descubre los mejores bancos online sin comisiones ❌ 
                    y las ventajas frente a los tradicionales | 💥 Opiniones Vivid Money, N26, Rebellion y Verse App" />
                <title>🥇 Los mejores bancos online y pagos móviles 📲💳</title>
            </Helmet>

            <div className="row justify-content-md-center">
                <BanksArticle />
            </div>
        </>
    )
}
