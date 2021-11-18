import React from 'react';
import { Helmet } from 'react-helmet';

import { MarketAgentArticle } from './MarketAgentArticle';

export const MarketAgentScreen = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="🤯 ¿Sabes que puedes ganar dinero haciendo compras online? |
                    Con algunas plataformas de LetyShops es posible 💰 | Entra aquí a ver más información ✅" />
                <title>🥇 Plataformas de Cashback xdddd</title>
            </Helmet>

            <div className="row justify-content-md-center">
                <MarketAgentArticle />
            </div>
        </>
    )
}
