import { Helmet } from 'react-helmet';

import { TiendeoArticle } from './TiendeoArticle';

export const TiendeoScreen = () => {
    const description = `Descubre como ganar dinero con los tickets de supermercado y 
    así ahorrar dinero 💸 | Opinión Tiendeo y comprobantes 💡 | Craftianosmoney`
    const title = 'Tiendeo: Recibe dinero por comprar en supermercados 🛒'

    const urlCanonical = 'https://craftianosmoney-page.vercel.app/tiendeo/'

    return (
        <>
            <Helmet>
                <link rel="canonical" href={ urlCanonical } />
                <meta name='twitter:image' content='https://craftianosmoney-page.vercel.app/img/craftianosmoney.webp' />
                <meta name="description" content={ description } />
                <meta name="twitter:card" content='summary_large_image' />
                <meta name="twitter:description" content={ description } />
                <meta name="twitter:title" content={ title } />
                <meta property='og:description' content={ description } />
                <meta property='og:image' content='https://craftianosmoney-page.vercel.app/img/craftianosmoney.webp' />
                <meta property='og:site_name' content={ title } />
                <meta property='og:title' content={ title } />
                <meta property='og:type' content='website' />
                <meta property='og:url' content={ urlCanonical } />
                <title>{ title }</title>
            </Helmet>

            <main className="row justify-content-md-center">
                <TiendeoArticle />
            </main>
        </>
    )
}
