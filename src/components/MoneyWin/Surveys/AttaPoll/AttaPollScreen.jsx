import React from 'react';
import { Helmet } from 'react-helmet';

import { AttaPollArticle } from './AttaPollArticle';

export const AttaPollScreen = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Conoce la app de encuestas AttaPoll | Empieza a ganar dinero desde ya 🔥💸 | 
                    Gana dinero en diferentes plataformas | ¿Es Fiable? 💡" />
                <title>🥇 AttaPoll: Dinero por encuestas</title>
            </Helmet>

            <div className="row justify-content-md-center">
                <AttaPollArticle />
            </div>
        </>
    )
}
