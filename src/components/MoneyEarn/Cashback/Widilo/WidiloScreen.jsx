import React from 'react';
import { Helmet } from 'react-helmet';

import { WidiloArticle } from './WidiloArticle';

export const WidiloScreen = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="🤯 ¿Sabes que puedes ganar dinero haciendo compras online? |
                    Con algunas plataformas de LetyShops es posible 💰 | Entra aquí a ver más información ✅" />
                <title>🥇 Widilo Cashback</title>
            </Helmet>

            <div className="row justify-content-md-center">
                <WidiloArticle />
            </div>
        </>
    )
}
