import React from 'react';
/* import { Link } from 'react-router-dom'; */

export const WalkingArticle = () => {
    return (
        <>
            <div className="col col-md-3"></div>
            <div className="col-12 col-md-6 mt-2 article">
                <h1 className="h3 text-primary mb-4">🎁 Gana Dinero o Cryptos por Caminar 💸</h1>
                <h2 className="h4 text-primary mb-4">✨ Listado de Apps que te pagan por Andar ✨</h2>
                <p className="text-justify">
                    En esta sección os dejo algunas apps con las que nos dan dinero 
                    o cryptos por hacer pasos o lo que es lo mismo caminar/andar
                </p>

                <div className="weward card mb-3">
                    <div className="card-body">
                        <h3 className="h4 card-title" id="lety">🏅 WeWard: De las Mejores Apps para GANAR PREMIOS por Andar</h3>
                        <p className="card-text">
                            WeWard es una app que se hizó popular hace pocos años, su sede está en Francia y permite ganar diferentes premios,
                            muy BUENOS por cierto; ya que uno de los premios son tarjetas regalo y Transferencias Bancarias 🤯👏
                            <br /><br />
                            Además la app cuenta con un sistema de cashback, que es muy bueno en comparación con otras jeje
                        </p>

                        <a className="btn btn-outline-success d-grid" href="https://cutt.ly/weWardCR" target="_blank"
                            rel="noopener noreferrer" title="Únete a Picodi y obtén 4€ TOTALMENTE Gratis">
                                Únete a WeWard para empezar a Ganar Muchos Premios 🎁 y así ganar en salud también ❤️‍🩹
                        </a>

                        <div className="alert alert-info mt-3">
                            <strong>NO OLVIDES</strong> poner mi <strong>Código: JESU-vXm6X</strong> para Ganar 300 PTS cada uno ✨
                        </div>

                    </div>
                </div>

                <div className="sweatcoin card mb-3">
                    <div className="card-body">
                        <h3 className="h4 card-title">🥇 SweatCoin: Una de las Apps MÁS Populares que te pagan por Andar 🆕</h3>
                        <p className="text-justify">
                            Sweatcoin es una de las beteranas apps que te pagan por caminar, con diferentes premios y AHORA, 
                            se podrá GANAR Cryptos dentro de ella 🤯

                            <br /><br />

                            ACTUALMENTE no está disponible el retirar cryptos, estará en Septiembre, en la App aparece una notificación, 
                            aunque si se puede ganar por ahora
                        </p>
                        <a className="btn btn-outline-success d-grid" href="https://cutt.ly/sweatCoinCR" target="_blank"
                            rel="noopener noreferrer" title="Únete a Picodi y obtén 4€ TOTALMENTE Gratis">
                                Únete a SweatCoin y Gana Dinero O Cryptos antes que nadie 🤑
                        </a>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-3 mb-5">
                <div className="card">
                    <div className="card-body">
                        <h2 className="h5 card-title">👑 ¿Qué es el cashback? | Definición y Tips </h2>
                        <p className="text-justify">
                            Una compra con cashback es <i><strong>recibir una pequeña parte de lo que hemos gastado en cualquier
                            compra ONLINE. </strong></i> <br /> <br />

                            Como podéis ver en esta sección, <strong>hay muchísimas plataformas de cashback</strong>, ya que cada una tiene su estrategía de marketing
                            y como usuarios, podemos <strong> comparar y ver en cada plataforma nos devuelven más y no se pierde nada por tener cuenta en CADA UNA 😍</strong>
                            
                        </p>
                    </div>
                </div>
                <div className="bannerLetyShops mb-5">
                    <a href="https://cutt.ly/letyshopsCR" target="_blank" rel="noopener noreferrer">
                        <img 
                            loading="lazy" 
                            className="img-fluid rounded mx-auto d-block imgLety w-100 mt-4" 
                            src="../img/letyshops/banner.webp" 
                            alt="Consigue 5€ GRATIS al Unirte a LetyShops | Banner LetyShops" 
                        />
                    </a>
                </div>
                <div className="bannerIgraal mb-5" id="ig-ku4YXxn78w3YWofP">
                    <noscript> 
                        Debes habilitar javascript para ver este contenido proporcionado por 
                        <a href="https://es.igraal.com/"> iGraal : cashback y códigos de descuento </a>
                    </noscript>
                </div>
                <div className="bannerBeruby">
                    <a title="Beruby - cashback, cupones y ofertas en tus compras y reservas online" href="https://bit.ly/3b3CR">
                        <img
                            loading="lazy" 
                            className="img-fluid rounded mx-auto d-block w-50 "
                            alt="Beruby - cashback, cupones y ofertas en tus compras y reservas online"
                            src="../img/banner-beruby2.gif" 
                        />
                    </a>
                </div>
            </div>
        </>
    )
}