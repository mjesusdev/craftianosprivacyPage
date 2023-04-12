import { Helmet } from 'react-helmet';
import { HomeArticle } from './HomeArticle';

export const HomeScreen = () => {
    const description = `Conoce como proteger tus datos personales utilizando mejores alternativas 
        a los productos de las grandes empresas (GAMAM o GAFAM)`
    const title = '🚀 Blog de ciberseguridad & privacidad | CraftianosPrivacy'

    const urlCanonical = ''

    return (
        <>
            <Helmet>
                <link rel="canonical" href={ urlCanonical } />
                <meta name='twitter:image' content='' />
                <meta name="description" content={ description } />
                <meta name="twitter:card" content='summary_large_image' />
                <meta name="twitter:description" content={ description } />
                <meta name="twitter:title" content={ title } />
                <meta property='og:description' content={ description } />
                <meta property='og:image' content='' />
                <meta property='og:site_name' content={ title } />
                <meta property='og:title' content={ title } />
                <meta property='og:type' content='website' />
                <meta property='og:url' content={ urlCanonical } />
                <title>{ title }</title>
            </Helmet>

            <main className="row justify-content-center">
                <HomeArticle />
            </main>
        </>
    )
}
