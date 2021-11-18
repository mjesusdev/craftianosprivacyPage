import React from 'react';

export const VerseArticle = () => {
    return (
        <>
            <div className="col col-md-3"></div>
            <div className="col-12 col-md-6 mt-2 article">
                <h1 className="h3 text-success mb-4">🏅 Verse App: La Mejor App de Pagos Del Mercado 💙🌎</h1>
                <h2 className="h4 text-success mb-4">✅ Gana 5€ rápido y participa en promociones</h2>
                <p className="text-justify">
                    Verse es una app de pagos como alternativa a BIZUM y MUCHO mejor 🤗, 
                    la gran diferencia es que BIZUM es un servicio de ofrece los bancos Españoles y Verse una app independiente, 
                    la cual es mejor ya que al hacer PAGOS u otra cosa, solo se comparte el versetag. <br /><br />
                    Con Verse podemos hacer PAGOS AL INSTANTE a AMIGOS o a cualquier PERSONA,
                    además tenemos la opción de crear GRUPOS para dividir el DINERO de cada PERSONA. <br /><br />
                    EJ: Se comparte una cuenta de Netflix o cualquier otro gasto, pues con Verse se divide el PAGO
                    y se recibe al INSTANTE. <br /><br />
                    Otra de las cosas que podemos hacer con Verse es participar en los trivials cada Martes, Jueves y Domingo,
                    para así ganar DINERO jugando.
                </p>

                <div className="list-indice">
                    <span className="h5 mt-4">Índice de los contenidos</span>
                    <div className="list-group mt-4">
                        <a href="#ventajas-verse" className="list-group-item list-group-item-action list-group-item-dark">
                            1. 🥇 Ventajas de Verse 💙
                        </a>
                        <a href="#registro-verse" className="list-group-item list-group-item-action list-group-item-dark">
                            2. 🥈 ¿Cómo registrarse en Verse?
                        </a>
                    </div>
                </div>

                <div id="ventajas-verse">
                    <h3 className="h5 text-danger mt-4 mb-4">🥇 Ventajas de Verse 💙</h3>
                    <p className="text-justify">
                        Aquí os dejo algunas ventajas sobre usar Verse:
                    </p>
                    <ol className="enlaces">
                        <li>Pagos INSTANTANEOS a cualquier PERSONA ⚡</li>
                        <li>Creación de Grupos para dividir el gasto hasta otra cualquier otra cosa 💡</li>
                        <li>SE GANA DINERO al INVITAR AMIGOS, PARTICIPANDO EN TRIVIALS Y MUCHO MÁS 🤯⚡</li>
                        <li>
                            VENTAJAS DEL <a href="https://www.verse.me/es/ambassadors" target="_blank" rel="noreferrer"> PROGRAMA AMBASSADORS
                            </a> 🎉
                        </li>
                        <li>SOLO SE REQUIERE EL VERSETAG PARA REALIZAR CUALQUIER MOVIMIENTO 🟢</li>
                        <li>
                            Al compartir solo el VerseTag, estamos ganando en PRIVACIDAD, 
                            ya que NADIE que no esté en nuestros CONTACTOS no sabrá nuestro Número de Teléfono 🔏
                        </li>
                        <li>
                            Se AÑADE DINERO DE FORMA SEGURA Y RÁPIDA 🔏⚡
                        </li>
                        <li>
                            Variedad de OPCIONES para CONFIGURAR NUESTRO PERFIL ASI COMO LA PRIVACIDAD Y SEGURIDAD 💙
                        </li>
                        <li>
                            Verse es la alternativa a bizum, ya que se gana en privacidad, seguridad y rapidez, 
                            en su cuenta de Instagram, tienen una prueba.
                        </li>
                        <li>
                            Al registrarse en Verse se gana 5€, para ello tienes que usar mi código de promoción: 
                            <b>BJNQ8R e ingresar SOLO 1€</b>, moverlos con alguien 
                            (si no conoces a alguien, me puedes enviar un MD a mi cuenta de Instagram, para que el proceso sea más rápido y 
                            sencillo), posteriormente debes verificar la documentación y ganarías los 5€ 💰
                        </li>
                    </ol>
                </div>

                <div id="registro-verse">
                    <h3 className="h5 text-danger mt-4 mb-4">🥈 ¿Cómo registrarse en Verse?</h3>
                    <p className="text-justify">
                        
                    </p>

                    <a className="btn btn-outline-success font-weight-bold" href="https://bit.ly/VerseCR" target="_blank" rel="noopener noreferrer">
                        Únete a VERSE y GANA 5€ AL INSTANTE ASI COMO OTRAS VENTAJAS 💙
                    </a>
                    <div className="alert alert-info font-weight-bold mt-4 enlaces">
                        Si estás leyendo esto y todavía no tienes Verse,
                        <a href="https://bit.ly/VerseCR" target="_blank" rel="noopener noreferrer">
                            aprovecha y UNETE porque han bajado la cantidad de pago que se tiene que hacer para conseguir el bono GRATIS 🚀⚡
                        </a>
                        <br /><br />
                        (ANTES había que MOVER o PAGAR 5€ a cualquier persona, pero AHORA es de SOLO 1€, aprovecha yaaa! 🎉🎉)
                    </div>
                </div>
                
            </div>

            <div className="col-12 col-md-3 mb-5">
                <div className="card">
                    <div className="card-body">
                        <h4 className="h5 text-danger">⚡ Otras plataformas de encuestas ⚡</h4>
                        <p className="text-justify fw-bold">
                            Aquí os dejo un listado de otras páginas de encuestas que podrían interesarle.
                        </p>

                        <ul className="enlaces">
                            <li className="fw-bold">
                                Ipsos Isay
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </>
    )
}