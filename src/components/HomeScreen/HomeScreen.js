import React from 'react';

import { Helmet } from 'react-helmet';

import { Article } from './Article';

export const HomeScreen = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Descubre la forma de generar DINERO realizando encuestas 📗, 
                    por comprar en tiendas online, apps y mucho más ¿Te unes? 👋 | Craftianosmoney" />
                <title>🥇 Gana dinero desde casa en 2021 | Craftianosmoney</title>
            </Helmet>

            <div className="row justify-content-center article">
                <Article />
            </div>
        </>
    )
}
