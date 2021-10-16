import React from 'react';
import { Helmet } from 'react-helmet';

import { BlogList } from '../BlogScreen/BlogList';

export const BlogScreen = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Últimas publicaciones sobre las aplicaciones de encuestas, 
                    plataformas, páginas de cashback, bancos móviles y pagos. | Entra y ve todos mis posts 👏" />
                <title>Últimas publicaciones 📗 | Craftianosmoney</title>
                <meta name="twitter:card" content="summary_large_image" />
                <meta name='twitter:image' content='https://craftianosmoney.com/images/craftianosmoney.jpg' />
                <meta name="twitter:title" content="Últimas publicaciones 📗 | Craftianosmoney" />
                <meta name="twitter:description" content="Últimas publicaciones sobre las aplicaciones de encuestas, 
                    plataformas, páginas de cashback, bancos móviles y pagos. | Entra y ve todos mis posts 👏" />
                <link rel="canonical" href="https://craftianosmoney.com/blog/" />
            </Helmet>

            <div className="row justify-content-end">
                <BlogList />    
            </div>
        </>
    )
}
