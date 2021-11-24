import React from 'react';
import { Helmet } from 'react-helmet';

import { RobinArticle } from './RobinArticle';

export const RobinScreen = () => {

    const description = `¿Quieres ganar dinero comprando por internet? | Conoce como recibir dinero con Robin Rover | 
        Y empieza a recibir el dinero que deberías de obtener 💸💡`
    const title = '🥇 Robin Rover: Gana dinero por ceder tus datos de compra'

    const urlCanonical = 'https://craftianosmoney.com/robin-rover/'

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
                <RobinArticle />
            </div>
        </>
    )
}
