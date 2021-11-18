import React from 'react';
import { Helmet } from 'react-helmet';

import { PrizeRebelArticle } from './PrizeRebelArticle';

export const PrizeRebelScreen = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Conoce la página de encuestas PrizeRebel  | Multitud de premios | Opiniones 2021 | 
                    ¿PrizeRebel PAGA o es SCAM? | Entra aquí para ver más 👋🔵" />
                <title>🥇 PrizeRebel: Multitud de encuestas renumeradas y de premios</title>
                <meta name="twitter:card" content="summary_large_image" />
                <meta name='twitter:image' content='https://craftianosmoney.com/images/craftianosmoney.jpg' />
                <meta name="twitter:title" content="🥇 PrizeRebel: Multitud de encuestas renumeradas y de premios" />
                <meta name="twitter:description" content="Conoce la página de encuestas PrizeRebel  | Multitud de premios | Opiniones 2021 | 
                    ¿PrizeRebel PAGA o es SCAM? | Entra aquí para ver más 👋🔵" />
                <link rel="canonical" href="https://craftianosmoney.com/prize-rebel/" />
            </Helmet>

            <div className="row justify-content-md-center">
                <PrizeRebelArticle />
            </div>
        </>
    )
}
