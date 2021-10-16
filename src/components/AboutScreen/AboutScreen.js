import React from 'react';

import { Helmet } from 'react-helmet';

import { Article } from './Article';

export const AboutScreen = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Redes Sociales de Craftianosmoney, Instagram @craftianosmoney, Twitter, 
                Peoople @craftianos y Youtube. Sigueme para enterarte de todas mis novedades." />
                <title>Redes Sociales de Craftianosmoney | ¿Me sigues? 🤯</title>
            </Helmet>

            <div className="row justify-content-end">
                <Article />
            </div>
        </>
    )
}
