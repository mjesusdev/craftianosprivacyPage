import React from 'react';
import { Link } from 'react-router-dom';

export const CashbackArticle = () => {
    return (
        <>
            <div className="col col-md-3"></div>
            <div className="col-12 col-md-6 mt-2 article">
                <h1 className="h3 text-success mb-4">Plataformas de Cashback 💸</h1>
                <h2 className="h4 text-success mb-4">Recibe dinero por comprar online ✅</h2>
                <p className="text-justify">
                    En esta sección os enseño como ganar dinero o ahorrar por comprar en tiendas online, 
                    además de dar los motivos de cual página de cashback es mejor para hacer estas compras 🙌
                </p>
                <div className="letyshops card mb-3">
                    <div className="card-body">
                        <h3 className="h4 card-title text-danger" id="lety">🥇 LetyShops: La mejor plataforma de cashback 💸 </h3>
                        <p className="card-text">
                            Plataforma de cashback, con la nos devolverán un % de una compra
                            en cualquier tienda que este disponible en la plataforma.
                            <br /> <br />
                            Llevo registrado más de un año en LetyShops, desde mi punto de vista es una de las
                            mejores,
                            ya que siguiendo los pasos para recibir el cashback de cualquier tienda online,
                            no hay problemas.
                            También hay más de una vez que no se me ha registrado la compra, sin problemas he
                            reclamado
                            y me lo han asignado.
                            <br /><br />
                            <b>Conclusión: </b> Me parece una buena plataforma de cashback, ya que el mínimo de
                            retiro
                            por Paypal
                            o Transferencia Bancaria es de 1€.
                            <br /><br />
                            <i>
                                Si haceís clic en el botón de abajo 👇 , podreís ver los motivos por los que LetyShops, 
                                es de las mejores plataforma de cashback 🎉
                            </i>
                        </p>
                        <Link 
                            className="btn btn-outline-success mb-4" 
                            exact 
                            to="/letyshops/" 
                            title="Mira más información de LetyShops">
                                Mira más información sobre LetyShops 👏
                        </Link>
                    </div>
                </div>

                <div className="igraal card mb-3">
                    <div className="card-body">
                        <h3 className="h4 card-title text-danger" id="iGraal">🥈 iGraal: La segunda mejor plataforma 💸</h3>
                        <p className="card-text">
                            iGraal es otra de las mejores plataformas de cashback, ya que al invitar a un amigo,
                            cada uno GANA 3€ totalmente GRATIS y además el recomendador RECIBE 
                            un 10% del total de ganancias de este por SIEMPRE 🤯✅
                            <br /><br />
                            Con iGraal, podrás obtener muchas ventajas por usar el servicio al comprar 
                            en las tiendas disponibles en este.
                            <br /><br/>
                            La diferencia con otras plataformas,
                            es la variedad de métodos de pago para realizar la retirada del cashback ganado.
                            <br /><br/>
                            <b>IMPORTANTE:</b>  Yo la llevo utilizando hace poco tiempo y ya llevo 19€ ACUMULADOS 🤯, 
                            el mínimo para retirar es 20€ 🔵
                            <br /><br/>
                            Pulsa sobre el botón de abajo 👇 , mira los motivos por la que la considero una de las 
                            <b>mejores PLATAFORMAS 💡</b> y también los METODOS DE PAGO 💳 , te ENCANTARÁ 😍
                        </p>
                        <Link 
                            className="btn btn-outline-success mb-4"
                            exact
                            to="/igraal/" 
                            title="Mira más información de iGraal">
                                Mira más información de iGraal 👏
                        </Link>
                    </div>
                </div>

                <div className="widilo card mb-3">
                    <div className="card-body">
                        <h3 className="h4 card-title text-danger">🥉 Widilo: Recibe 3€ + 1€ por descargar la extensión 💸</h3>
                        <p className="text-justify">
                            Widilo es otra de las mejores plataformas de cashback, con la que obtendremos 3€
                            totalmente gratuitos al realizar nuestra primera compra, sin mínimo, además del 1€ por descargar la extensión
                            para el Navegador ✅ <br /><br />
                            <b>Opinión Personal: </b> Esta plataforma esta muy bien, en mi caso la priorizo 
                            cuando el cashback en otras plataformas está MÁS BAJO 🔥 <br /><br />
                            Ej: En Letyshops está el cashback de Aliexpress a 5% y en Widilo a 8,13%, pues combiene más esta última,
                            ya que lo tiene más alto y ganaremos más dinerito 💸 <br /><br />
                            Así que sí pensamos de este modo, llegaremos más rápido a los 15€ para poder
                            retirar el dinero por Transferencia Bancaria 
                            (La primera vez tiene que ser por el banco y ya las siguientes se puede retirar a PayPal ✅)
                            <br />
                        </p>
                        <Link 
                            className="btn btn-outline-success mb-4"
                            exact
                            to="/widilo/"
                            title="Mira más información de Widilo">
                                Mira más información de Widilo 👋, además del comprobante de pago 💳
                        </Link>
                    </div>
                </div>

                <div className="picodi card mb-3">
                    <div className="card-body">
                        <h3 className="h4 card-title text-danger">🆕 Picodi: Recibe 4€ cuando hagas tu PRIMERA COMPRA</h3>
                        <p className="text-justify">
                            Picodi es una nueva plataforma de cashback que ha "aterrizado" en España, además está disponible en otros países como: 
                            Chile, Colombia, México, Perú y Argentina, aunque entiendo que en otros países puede estar disponible, 
                            ya que Picodi es de Polonia.
                            <br /><br />
                            Se asegura que Picodi paga más que la competencia, ya que tiene los cashback más altos que otras plataformas,
                            en mi caso lo he comprobado y sí es verdad, así que otra plataforma de cashback en la lista 
                            y otra con la que ahorrar 🤗🧡
                        </p>
                        <a className="btn btn-outline-success" href="https://acortar.link/picodiCR" target="_blank"
                            rel="noopener noreferrer" title="Únete a Picodi y obtén 4€ TOTALMENTE Gratis">
                                Únete a Picodi y obtén 4€ TOTALMENTE Gratis 🤑
                        </a>
                    </div>
                </div>

                <div className="beruby card mb-3">
                    <div className="card-body">
                        <h3 className="h4 card-title text-danger">✅ Beruby: Otra plataforma complementaria 💸</h3>
                        <p className="text-justify">
                            Otra de las plataformas de cashback, con la al hacer tu primera compra en los primeros 7
                            días desde
                            que te registraste te regalan 5€ totalmente gratis.
                            <br />
                            Además de poder ganar dinero realizando pequeñas encuestas, buscando en la web,
                            y recomendando productos de diferentes tiendas. Y mucho más aquí abajo 👇
                        </p>
                        <a className="btn btn-outline-success" href="https://bit.ly/berubyCR" target="_blank"
                            rel="noopener noreferrer" title="Haz tu primera compra y obtén 5€ gratis">
                                Haz tu primera compra y obtén 5€ gratis 🤑
                        </a>
                    </div>
                </div>

                <div className="robin-rover card mb-3">
                    <div className="card-body">
                        <h3 className="h4 text-danger">✅ Robin Rover: Gana dinero con tus compras online</h3>
                        <p className="text-justify">
                            Robin Rover es una empresa con la que podemos ganar dinero realizando compras online
                            como
                            hasta ahora,
                            la diferencia es que por los datos de nuestras compras no generamos ingresos, pues Robin
                            Rover lo hace.
                            Es totalmente diferente que LetyShops y Widilo, ya que no acumulamos dinero, acumulamos
                            robins,
                            con la que particimos todos los días en los sorteos para ganar premios de 100€.
                        </p>
                        <Link 
                            className="btn btn-outline-success mb-4"
                            exact
                            to="/robin-rover/"
                            title="Mira más información de Robin Rover">
                                Mira más información de Robin Rover 👏
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-3 mb-5">
                <div className="card">
                    <div className="card-body">
                        <h2 className="h5 text-danger">¿Qué es el cashback? 🧐</h2>
                        <p className="text-justify">
                            Una compra con cashback es <strong>recibir una pequeña parte de lo que hemos gastado en cualquier
                            compra ONLINE. </strong> <br /> <br />
                            En mi caso, <strong>uso más de una plataforma</strong>, 
                            porque por ejemplo en <strong>LetyShops no está Udemy y en Widilo sí, 
                            además de no hablar de las subidas del cashback y demás.</strong> <br /> <br />
                            <i>
                                Me refiero a que con LetyShops en determinadas tiendas,
                                se puede recibir más dinero que en otra plataforma 💥 (Por los cashback más altos)
                            </i>
                        </p>
                    </div>
                </div>
                <div className="bannerLetyShops mb-5">
                    <a href="https://bit.ly/letyshopsCR" target="_blank" rel="noopener noreferrer">
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