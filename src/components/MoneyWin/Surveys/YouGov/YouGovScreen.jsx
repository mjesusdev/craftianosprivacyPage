import React from 'react';
import { Helmet } from 'react-helmet';

import { YouGovArticle } from './YouGovArticle';

export const YouGovScreen = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="" />
                <title>🥇 YouGov</title>
            </Helmet>

            <div className="row justify-content-md-center">
                <YouGovArticle />
            </div>
        </>
    )
}
