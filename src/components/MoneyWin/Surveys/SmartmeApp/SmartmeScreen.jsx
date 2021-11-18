import React from 'react';
import { Helmet } from 'react-helmet';

import { SmartmeArticle } from './SmartmeArticle';

export const SmartmeScreen = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="" />
                <title>🥇 SmartmeApp: </title>
            </Helmet>

            <div className="row justify-content-md-center">
                <SmartmeArticle />
            </div>
        </>
    )
}
