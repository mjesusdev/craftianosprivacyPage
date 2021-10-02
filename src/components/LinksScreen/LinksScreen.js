import React from 'react';

import { Helmet } from 'react-helmet';

import { CookieVerify } from '../Cookies/CookieVerify';
import { Header } from '../Header/Header';
import { LinksArticle } from './LinksArticle';

export const LinksScreen = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Aquí puedes encontrar todos los enlaces a plataformas de cashback,
                    pagos, encuestas, bancos móviles y mucho más 💡 | Ingresos Extras 💸 | CraftianosMoney" />
                <title>Enlaces - Creador de contenido en RRSS @craftianosmoney 💸</title>
                <meta name="twitter:card" content="summary_large_image" />
                <meta name='twitter:image' content='https://craftianosmoney.com/images/craftianosmoney.jpg' />
                <meta name="twitter:title" content="Enlaces - Creador de contenido en RRSS @craftianosmoney 💸" />
                <meta name="twitter:description" content="Aquí puedes encontrar todos los enlaces a plataformas de cashback,
                    pagos, encuestas, bancos móviles y mucho más 💡 | Ingresos Extras 💸 | CraftianosMoney" />
                <link rel="canonical" href="https://craftianosmoney.com/enlaces/" />
            </Helmet>

            <div className="p-3 mb-2 bg-dark text-dark row header">
                <Header />
            </div>

            <div className="row justify-content-end">
                <LinksArticle />
            </div>

            <div className="p-3 mt-5 bg-dark text-dark row">
                <CookieVerify />
            </div>
        </>
    )
}
