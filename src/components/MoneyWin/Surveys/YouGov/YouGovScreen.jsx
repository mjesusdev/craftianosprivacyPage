import React from 'react';
import { Helmet } from 'react-helmet';

import { YouGovArticle } from './YouGovArticle';

export const YouGovScreen = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="🤯 ¿Sabes que puedes ganar dinero haciendo compras online? |
                    Con algunas plataformas de LetyShops es posible 💰 | Entra aquí a ver más información ✅" />
                <title>🥇 YouGov</title>
            </Helmet>

            <div className="row justify-content-md-center">
                <YouGovArticle />
            </div>
        </>
    )
}
