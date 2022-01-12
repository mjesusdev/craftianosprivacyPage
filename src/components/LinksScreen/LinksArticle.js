import React from 'react';
import { Link } from 'react-router-dom';

export const LinksArticle = () => {
    return (
        <>
            <div className="col col-md-3"></div>
            <div className="col-12 col-md-6 article">
                <div className="card">
                    <div className="card-body">
                        <h1 className="h4 text-success mb-4">Enlaces de @craftianosmoney</h1>
                        <h2 className="h5 text-danger">Plataformas de Encuestas 📗</h2>
                        <ul className="enlaces encuestas">
                            <li className="">
                                I-Say: 
                                <Link exact to="/ipsos-isay/" title="Mira más información de Ipsos Isay"> 
                                    Una de las mejores Plataformas de Encuestas (envían MUCHAAS 🥳)
                                </Link>
                            </li>
                            <li className="">
                                YouGov: 
                                <Link exact to="/yougov/" title="Mira más información sobre YouGov"> 
                                    Segunda mejor plataforma (También envían muchas Encuestas)⚡
                                </Link>
                            </li>
                            <li className="">
                                PrizeRebel:
                                <Link exact to="/prize-rebel/" title="Mira más información sobre Prize Rebel">
                                    Cuenta con un mágnifico sistema de referidos y programa de fidelidad 👏
                                </Link>
                            </li>
                            <li className="">
                                MarketAgent:
                                <Link exact to="/marketagent/" title="Mira más información sobre MarketAgent"> 
                                    Otro portal de Encuestas y la plataforma está Actualizada! 🔥
                                </Link>
                            </li>
                            <li className="">
                                SwagBucks: 
                                <a href="https://bit.ly/swagbucksCR" target="_blank" rel="noopener noreferrer"
                                    title="Regístrate en SwagBucks y Gana Dinero">
                                        Plataforma de encuestas, juegos y mucho más |
                                        Disponible para todo los PAISES ✅
                                </a>
                            </li>
                            <li className="">
                                Maximiles:
                                <a href="https://bit.ly/maximilesCR" target="_blank" rel="noopener noreferrer"
                                    title="Regístrate en Maximales y Gana Regalos 🎁">
                                        NUEVA PLATAFORMA DE ENCUESTAS 🎉 | Disponible SOLO en Europa
                                </a>
                            </li>
                        </ul>
                        <h3 className="h6 text-danger">Apps de Encuestas (Disponible en Android & iOS)</h3>
                        <ul className="enlaces encuestas">
                            <li className="">
                                AttaPoll:
                                <Link exact to="/attapoll/" title="Mira más información sobre AttaPoll">
                                    La mejor app para ganar dinero con encuestas 🤯
                                </Link>
                            </li>
                            <li className="">
                                SmartmeApp:
                                <Link exact to="/smartme-app/" title="Mira más información sobre SmartmeApp">
                                    Encuestas cortas y mucho más beneficios 😎
                                </Link>
                            </li>
                            <li className="">
                                PollPay:
                                <Link exact to="/pollpay/" title="Mira más información sobre PollPay">
                                    La mejor app para ganar con tus amigos ⚡
                                </Link>
                            </li>
                        </ul>
                        <h2 className="h5 text-danger">Plataformas de Cashback 🛒</h2>
                        <ul className="enlaces cashback">
                            <li className="">
                                LetyShops: 
                                <Link exact to="/letyshops/" title="Mira más información sobre LetyShops">
                                    La mejor plataforma de cashback,
                                    gana 5€ al hacer tu primera compra superior a 20€ 🥇
                                </Link>
                            </li>
                            <li className="">
                                Widilo:
                                <Link exact to="/widilo/" title="Mira más información sobre Widilo">
                                    La segunda mejor plataforma,
                                    sirve de complemento a LetyShops. 🥈
                                </Link>
                            </li>
                            <li className="">
                                Igraal:
                                <Link exact to="/igraal/" title="Mira más información sobre Igraal">
                                    Cada día suben el cashback en tiendas, gana 3€ por la primera compra + 1€ por la extensión 💡
                                </Link>
                            </li>
                            <li className="">
                                Beruby:
                                <Link exact to="/compras-cashback/" title="Mira más información sobre Beruby">
                                    Variedad de herramientas para ganar dinero, como encuestas, ofertas, recomendaciones, etc 💎
                                </Link>
                            </li>
                            <li className="">
                                SwagBucks: 
                                <a href="https://bit.ly/swagbucksCR" target="_blank" rel="noopener noreferrer" 
                                    title="Regístrate en SwagBucks y Gana Dinero Con Tus Compras 🎁">
                                        Posee también un sistema de cashback,
                                        además de poder ganar dinero por encuestas, etc 💡
                                </a>
                            </li>
                            <li className="">
                                Promos App:
                                <Link exact to="/promos-app/" title="Mira más información sobre PromosAPP">
                                    La mejor app para ganar cashback por tickets de compra en supermercados 🛒
                                </Link>
                            </li>
                            <li className="">
                                Tiendeo:
                                <Link exact to="/tiendeo/" title="Mira más información sobre Tiendeo">
                                    Segunda opción para recibir cashback por tickets 👌
                                </Link>
                            </li>
                            <li className="">
                                Gelt:
                                <a href="https://bit.ly/2PYt77n" target="_blank" rel="noreferrer" 
                                    title="Regístrate en Gelt y Gana Dinero Con Tus Tickets">
                                        Muchísimas promociones en las que ganar MUCHO dinero 🤯💎
                                </a>
                            </li>
                            <br/>
                            <div className="">
                                EJ: En este momento, en LetyShops no nos devuelven cashback por comprar en Ebay,
                                en este caso Widilo nos devuelve el 4% del total de nuestra compra. 🧐
                                <br/>
                                Además la app de SmartmeApp, posee un "club smartme", 
                                por lo que también podemos recibir cashback por nuestras compras, teneís el link arriba ☝☝😍
                            </div>
                        </ul>
                        <h2 className="h5 text-danger">Ganar DINERO por tus COMPRAS ONLINE</h2>
                        <ul className="enlaces list-custom">
                            <li className="">
                                Robin Rover (Gana 100€ GRATIS):
                                <Link exact to="/robin-rover/" title="Mira más información sobre Robin Rover">
                                    Mira más información sobre Robin Rover y registrate 🤯
                                </Link>
                            </li>
                        </ul>
                        <h2 className="h5 text-danger">Promociones ACTUALES 💎 | Bancos Online 🏦</h2>
                        <ul className="enlaces bancos-online">
                            <li className="">
                                N26 (De los mejores bancos móviles):
                                <a href="https://bit.ly/n26invCR" target="_blank" rel="noopener noreferrer">
                                    Gana 5€ por unirte al banco móvil N26
                                </a>
                            </li>
                            <li className="">
                                Vivid 💜 (Uno de los mejores bancos actualmente 💸):
                                <Link exact to="/vivid-money/" title="Mira más información sobre Vivid Money y consigue dinero con tus compras 🥳">
                                    Únete y obtén bonos interesantes de 20€ y cashback de hasta 70€ 🤯
                                    (Aprovecha el Black FRIDAY con Descuentos en MUCHAS TIENDAS 🏪)
                                </Link>
                            </li>
                            <li className="">
                                Rebellion (Banco móvil):
                                <a href="https://bit.ly/rebellionCR" target="_blank" rel="noopener noreferrer" 
                                    title="Únete a Rebellion, banco online y gana dinero">
                                        Gana HASTA 5€ por UNIRTE Conmigo y Aprovecha las Promociones que hay! 🥳🥳
                                </a>
                            </li>
                            <li className="">
                                Verse (Pagos móviles & más):
                                <Link exact to="/verse-app/" title="Mira más información sobre Verse 💙">
                                    Aprovecha y descarga Verse para hacer pagos con amigos en segundos, además
                                    de poder ganar 5€ al UNIRTE y SOLO tener que MOVER 1€ ¿te lo vas a perder? 👋💙
                                </Link>
                            </li>
                            <li className="">
                                Zelf (Banco por aplicaciones de mensajería):
                                <a href="https://bit.ly/2ZelfBCR" target="_blank" rel="noopener noreferrer"
                                    title="Únete al mejor banco por aplicaciones y aprovecha la PROMO DE 20€ 🎁🥳">
                                        Gana 20€ GRATIS por UNIRTE al banco por aplicaciones de mensajería 👋 
                                        (Puedes ganar más cashback, gracias a los BONOS 😍😍)
                                </a>
                            </li>
                        </ul>
                        <h2 className="h5 text-danger">Ganar DINERO HACIENDO MULTIPLES COSAS 😃</h2>
                        <ul className="enlaces list-custom">
                            <li className="">
                                ClipClaps:
                                <a href="https://bit.ly/ClipClapsCR" target="_blank" rel="noreferrer" 
                                    title="Únete a ClipClaps">
                                        Gana dinero 💸 por ver vídeos graciosos, jugar entre otras muchas cosas 🤯
                                </a>
                            </li>
                            <li className="">
                                MistPlay:
                                <a href="https://bit.ly/mistplayCR" target="_blank" rel="noreferrer" 
                                    title="Únete a MistPlay y gana dinero jugando 🎮💸">
                                        Gana dinero 💸 jugando a múltiples juegos 🎮
                                </a>
                            </li>
                        </ul>
                        <h2 className="h5 text-danger">Ahorra dinero compartiendo suscripciones a servicios</h2>
                        <ul className="enlaces list-custom">
                            <li className="">
                                Together Price:
                                <a href="https://bit.ly/togpriceCR" target="_blank" rel="noreferrer"
                                    title="Ahorra dinero por compartir suscripciones digitales con Together Price 💸😍">
                                        Comparte una suscripción con grupos y ahorra dinero 💡💸
                                </a>
                                <br />
                                * Se puede compartir cualquier servicio de Streaming (Netflix, HBO, Disney +), 
                                hasta licencia de Office (Hay un sinfín de grupos en los que unirse 🥇)
                            </li>
                        </ul>
                        <h2 className="h5 text-danger">Ganar DINERO CAMINANDO (Haciendo Pasos)</h2>
                        <ul className="enlaces ganar-caminando">
                            <li>
                                WeWard:
                                <a href="https://acortar.link/wewardCR" target="_blank" rel="noopener noreferrer">
                                    Gana dinero caminando o canjea en cheques regalo ⚡ (USA mi código: JESU-vXm6X para ganar un bonus 🤯)
                                </a>
                            </li>
                        </ul>
                        <h2 className="h5 text-danger">Ganar DINERO Sin Hacer Nada (Compartiendo Internet)</h2>
                        <ul className="enlaces dinero-nada">
                            <li className="">
                                HoneyGain:
                                <Link exact to="/honeygain">
                                    El mejor servicio para ganar compartiendo tu internet. Ganas pts todos los días 🔥 <br />
                                    (Únete a HoneyGain y recibe 5$ por registrarte ✨)
                                </Link>
                            </li>
                            <li className="">
                                IpRoyal:
                                <a href="https://bit.ly/iproyalCR" target="_blank" rel="noopener noreferrer">
                                    Mínimo de retiro 1$ por PayPal y Bitcoin 🥳
                                </a>
                            </li>
                        </ul>
                        <h2 className="h5 text-danger">Ahorra y gana dinero con tus amigos 😎</h2>
                        <ul className="enlaces">
                            <li className="">
                                Plum:
                                <a href="https://bit.ly/ahplumCR" target="_blank" rel="noopener noreferrer">
                                    Ahorra dinero y sobre todo invita a amigos y gana dinero 💸 ( +15€ 🔥)
                                </a>
                            </li>
                            <li className="">
                                Numbrs:
                                <a href="https://bit.ly/numbrsCR" target="_blank" rel="noopener noreferrer">
                                    Únete ahorra dinero y participa en sorteos cada Viernes de 50K 🥳🔥
                                </a>
                            </li>
                        </ul>
                        <h2 className="h5 text-danger">Gana Dinero Gratis | Gana Cryptos 💸</h2>
                        <p className="text-justify">
                            Otra forma de ganar dinero es con las criptomonedas, ya que puedes llegar a conseguir mucho beneficio,
                            si sabes del tema. Aquí os dejo algunas páginas o bots para ganarlas gratis.
                        </p>
                        <h3 className="h6 text-danger">Faucets ✅</h3>
                        <ul className="enlaces list-custom">
                            <li className="">
                                Faucet Crypto
                                <a href="https://bit.ly/faucetCR" target="_blank" rel="noopener noreferrer">
                                    La mejor faucet para ganar cualquier crypto (Mínimo de retiro: 1.000 Coins) ✅🔥
                                </a>
                            </li>
                            <li className="">
                                Faucet Automáticas (Faucet Pay):
                                <ul>
                                    <li className="">
                                        <a href="https://bit.ly/faucetDogeCR" target="_blank" rel="noopener noreferrer">
                                            Doge | Gana Satoshi cada 5 min
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="">
                                        <a href="https://bit.ly/faucetTronCR" target="_blank" rel="noopener noreferrer">
                                            Tron (TRX) | Gana Satoshi cada 5 min
                                        </a>                                       
                                    </li>
                                </ul>
                                <ul>
                                    <li className="">
                                        <a href="https://bit.ly/faucetLiteCR" target="_blank" rel="noopener noreferrer">
                                            LiteCoin (LTC) | Gana Satoshi cada 5 min
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            { /* col col-md-3 offset-md-1 mb-5 */ }
            <div className="col-12 col-md-3 mb-5">
                <div className="card">
                    <div className="card-body">
                        <h2 className="h5 text-danger">⚡IMPORTANTE⚡</h2>
                        <p className="text-justify">
                            Si teneís alguna pregunta, o alguna duda sobre esto o en general,
                            me podeís escribir en mis redes sociales:
                        </p>
                        <ul className="enlaces list-custom">
                            <li className="">
                                <a href="https://bit.ly/ingCraftianos" target="_blank" rel="noreferrer">
                                    Instagram (Te puedo responder rápido 🤳)
                                </a>
                            </li>
                            <li className="">
                                <a href="https://bit.ly/twCraftianos" target="_blank" rel="noreferrer">
                                Twitter (Comparto a veces cosas 📙)
                                </a>
                            </li>
                            {/* Poner email en foto (mejor) */}
                            <li className="">
                                <a href="https://bit.ly/channelCR" target="_blank" rel="noreferrer">
                                Canal de Telegram (Aquí podrás encontrar todos los enlaces de promociones, etc ✅)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bannerVerse col-10 ms-5">
                    <a href="https://bit.ly/VerseCR" target="_blank" rel="noreferrer">
                        <img className="img-fluid rounded mx-auto d-block w-100 mt-4" src="../images/verse/banner.png" 
                            alt="Únete a Verse y consigue 5€ GRATIS" title="Únete a Verse y consigue 5€ GRATIS" loading="lazy" />
                    </a>
                </div>
            </div>
        </>
    )
}