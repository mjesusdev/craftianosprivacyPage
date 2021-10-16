import React from 'react';
import { Helmet } from 'react-helmet';

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

            <div className="row justify-content-end">
                <LinksArticle />
            </div>
        </>
    )
}
