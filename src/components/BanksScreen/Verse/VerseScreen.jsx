import React from 'react';
import { Helmet } from 'react-helmet';

import { VerseArticle } from './VerseArticle';

export const VerseScreen = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Descubre la app para hacer pagos rápidos a amigos en 2021, 
                    además de Unirse a concursos y Ganar Dinero | Usa mi code: BJNQ8R | Opiniones sobre Verse App 💙" />
                <title>🥇 Verse App: La mejor app de Pagos entre amigos | 5€ GRATIS AL UNIRTE</title>

                <meta property='og:title' content='🥇 La mejor app de Pagos entre amigos | ¿Qué es Verse?' />
                <meta property='og:image' content='https://craftianosmoney.com/images/verse/verse.png' />
                <meta property='og:url' content='https://craftianosmoney.com/verse-app/' />
                <meta property='og:description' content='Descubre la app para hacer pagos rápidos a amigos en 2021, 
                    además de Unirse a concursos y Ganar Dinero | Usa mi code: BJNQ8R | Opiniones sobre Verse App 💙' />
                <meta name='twitter:image' content='https://craftianosmoney.com/images/verse/craftianos.png' />
                <meta name="twitter:title" content='🥇 La mejor app de Pagos entre amigos | ¿Qué es Verse?' />
                <meta name="twitter:description" content='Descubre la app para hacer pagos rápidos a amigos en 2021, 
                    además de Unirse a concursos y Ganar Dinero | Usa mi code: BJNQ8R | Opiniones sobre Verse App 💙' />

                <link rel="canonical" href="https://craftianosmoney.com/verse-app/" />
            </Helmet>

            <div className="row justify-content-md-center">
                <VerseArticle />
            </div>
        </>
    )
}
