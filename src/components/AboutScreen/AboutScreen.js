import React from 'react';
import { Helmet } from 'react-helmet';
import { AboutArticle } from './AboutArticle';

export const AboutScreen = () => {
    const description = `Redes Sociales de Craftianosmoney, Instagram @craftianosmoney, Twitter, 
        Peoople @craftianos y Youtube. Sigueme para enterarte de todas mis novedades`
    const title = 'Redes Sociales de Craftianosmoney | ¿Me sigues? 🤯'

    const urlCanonical = 'https://craftianosmoney.com/sobre-mi'

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
                <meta property='og:site_name' content='Redes Sociales de @craftianosmoney' />
                <meta property='og:title' content={ title } />
                <meta property='og:type' content='website' />
                <meta property='og:url' content={ urlCanonical } />
                <title>{ title }</title>
            </Helmet>

            <div className="row justify-content-end">
                <AboutArticle />
            </div>
        </>
    )
}
