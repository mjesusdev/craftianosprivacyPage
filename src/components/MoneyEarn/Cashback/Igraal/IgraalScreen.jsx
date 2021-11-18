import React from 'react';
import { Helmet } from 'react-helmet';

import { IgraalArticle } from './IgraalArticle';

export const IgraalScreen = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Descubre la nueva plataforma Igraal que ha salido en Europa hace poco,
                    conoce sus diferencias con otras | Recibe 4€ al Unirte 🥳 | Craftianosmoney" />
                <title>🥇 iGraal: Nueva Plataforma de cashback | España 2021 ✅</title>
            </Helmet>

            <div className="row justify-content-md-center">
                <IgraalArticle />
            </div>
        </>
    )
}
