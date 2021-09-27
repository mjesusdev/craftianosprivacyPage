import React from 'react';
import { Helmet } from 'react-helmet';
import { CookieVerify } from '../Cookies/CookieVerify';
import { Header } from '../Header/Header';
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

            <div className="p-3 mb-2 bg-dark text-dark row header">
                <Header />
            </div>

            <div className="row justify-content-end">
                <BlogList />    
            </div>

            <div className="p-3 mt-5 bg-dark text-dark row">
                <CookieVerify />
            </div>
        </>
    )
}
