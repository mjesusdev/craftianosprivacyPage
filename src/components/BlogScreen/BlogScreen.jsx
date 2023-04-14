import { Helmet } from 'react-helmet';
import { BlogList } from './BlogList';

export const BlogScreen = () => {
    const description = `Últimas publicaciones sobre tips de ciberseguridad y privacidad | Entra y ve las novedades 🔐👏`
    const title = 'Últimas publicaciones 📙 | CraftianosPrivacy'

    const urlCanonical = 'https://craftianosprivacy.vercel.app/blog/'

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
                <meta property='og:site_name' content={ title } />
                <meta property='og:title' content={ title } />
                <meta property='og:type' content='website' />
                <meta property='og:url' content={ urlCanonical } />
                <title>{ title }</title>
            </Helmet>

            <main className="row justify-content-end">
                <BlogList />    
            </main>
        </>
    )
}
