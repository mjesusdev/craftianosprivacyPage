import React from 'react';
import { Helmet } from 'react-helmet';

import { CashbackArticle } from './CashbackArticle';

export const CashbackScreen = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="🤯 ¿Sabes que puedes ganar dinero haciendo compras online? |
                    Con algunas plataformas de cashback es posible 💰 | Entra aquí a ver más información ✅" />
                <title>🥇 Plataformas de cashback xdddd</title>
            </Helmet>

            <div className="row justify-content-md-center">
                <CashbackArticle />
            </div>
        </>
    )
}
