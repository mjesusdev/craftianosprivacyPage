import React from 'react';
import { Helmet } from 'react-helmet';

import { WalkingArticle } from './WalkingArticle';

export const WalkingScreen = () => {
    const description = `🤔 ¿Sabes que puedes ganar dinero caminando? Sí, y cryptos también. | 
        Si quieres ver como lo puedes hacer, entra AQUÍ Ya 🤯👏`
    const title = '🥇 Ganar Dinero y Cryptos Caminando | Apps que pagan 💸'

    const urlCanonical = 'https://craftianosmoney.com/ganar-dinero-caminando/'

    return (
        <>
            <Helmet>
                <link rel="canonical" href={ urlCanonical } />
                <meta name='twitter:image' content='https://craftianosmoney.com/img/craftianosmoney.webp' />
                <meta name="description" content={ description } />
                <meta name="twitter:card" content='summary_large_image' />
                <meta name="twitter:description" content={ description } />
                <meta name="twitter:title" content={ title } />
                <meta property='og:description' content={ description } />
                <meta property='og:image' content='https://craftianosmoney.com/img/craftianosmoney.webp' />
                <meta property='og:site_name' content={ title } />
                <meta property='og:title' content={ title } />
                <meta property='og:type' content='website' />
                <meta property='og:url' content={ urlCanonical } />
                <title>{ title }</title>
            </Helmet>

            <div className="row justify-content-md-center">
                <WalkingArticle />
            </div>
        </>
    )
}
