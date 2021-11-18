import React from 'react';
import { Helmet } from 'react-helmet';

import { CryptosArticle } from './CryptosArticle';

export const CryptosScreen = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="🤯 ¿Sabes que puedes ganar dinero haciendo compras online? |
                    Con algunas plataformas de cashback es posible 💰 | Entra aquí a ver más información ✅" />
                <title>📍 Gana criptomonedas GRATIS (Sin INVERTIR 🔥) ✅</title>
            </Helmet>

            <div className="row justify-content-md-center">
                <CryptosArticle />
            </div>
        </>
    )
}
