import React from 'react';
import { Helmet } from 'react-helmet';

import { TicketsArticle } from './TicketsArticle';

export const TicketsScreen = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="🤯 ¿Sabes que puedes ganar dinero haciendo compras online? |
                    Con algunas plataformas de cashback es posible 💰 | Entra aquí a ver más información ✅" />
                <title>🥇 Los mejores bancos online y pagos móviles 📲💳</title>
            </Helmet>

            <div className="row justify-content-md-center">
                <TicketsArticle />
            </div>
        </>
    )
}
