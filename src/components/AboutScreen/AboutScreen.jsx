import { Helmet } from 'react-helmet';
import { AboutArticle } from './AboutArticle';

export const AboutScreen = () => {
    const description = `Redes Sociales de Craftianos, Twitter, 
        Peoople | Sigueme para estar atento a las novedades que voy sacando 🥳`
    const title = 'Redes Sociales de Craftianos | ¿Me sigues? 🤯'

    const urlCanonical = 'https://craftianosprivacy.vercel.app/sobre-mi/'

    return (
        <>
            <Helmet>
                <link rel="canonical" href={ urlCanonical } />
                <meta name='twitter:image' content='https://craftianosprivacy.vercel.app/img/craftianosprivacy.webp' />
                <meta name="description" content={ description } />
                <meta name="twitter:card" content='summary_large_image' />
                <meta name="twitter:description" content={ description } />
                <meta name="twitter:title" content={ title } />
                <meta property='og:description' content={ description } />
                <meta property='og:image' content='https://craftianosprivacy.vercel.app/img/craftianosprivacy.webp' />
                <meta property='og:site_name' content='Redes Sociales de @craftianosprivacy' />
                <meta property='og:title' content={ title } />
                <meta property='og:type' content='website' />
                <meta property='og:url' content={ urlCanonical } />
                <title>{ title }</title>
            </Helmet>

            <main className="row justify-content-center">
                <AboutArticle />
            </main>
        </>
    )
}
