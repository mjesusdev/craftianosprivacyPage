import React from 'react'

export const Article = () => {
    return (
        <>
            <div className="col-12 col-md-6 article">
                {/*                 <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="../">Inicio</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Redes Sociales</li>
                    </ol>
                </nav> */}
                <figure className="figure">
                    <h4 className="text-success">Instagram</h4>
                    <a href="https://bit.ly/ingCraftianos" target="_blank" rel="noreferrer">
                        <img loading="lazy" src="../images/iconos/instagram_icon.svg" 
                            className="figure-img img-fluid rounded mt-2 iconInstagram" alt="Icono de Instagram"/>
                    </a>
                    <figcaption className="figure-caption text-left mt-2">Es en la red social que estoy más activo y más
                        contenido publico. Por aquí te puedo responder más rápido.</figcaption>
                </figure>
                <hr/>
                <figure className="figure">
                    <h4 className="text-success">TikTok</h4>
                    <a href="https://bit.ly/tiktokCR" target="_blank" rel="noreferrer">

                    </a>
                    <figcaption className="figure-caption text-left mt-2">
                        Me he abierto esta red social hace poco, sigueme porque subiré muchos vídeos interesantes, 
                        que este relacionado con esta página y mi marca personal de Instagram 👏
                    </figcaption>
                </figure>
                <hr />
                <figure className="figure">
                    <h4 className="text-success">Twitter</h4>
                    <a href="https://bit.ly/twCraftianos" className="twitter-follow-button" data-size="large"
                        data-show-screen-name="true" data-show-count="false" target="_blank" rel="noreferrer">
                            <img loading="lazy" src="../images/iconos/twitter_icon.svg" 
                                className="figure-img img-fluid rounded mt-2 iconTwitter" alt="Icono de Twitter" /> 
                            Follow @craftianosmoney
                    </a>
                    <br/>
                    <figcaption className="figure-caption text-left mt-2">Segunda red social en la que publico más contenido, 
                        aquí hablo de las novedades de esta página web y más. También me puedes preguntar aquí lo que quieras 😅</figcaption>
                </figure>
                <hr />
                <figure className="figure">
                    <h4 className="text-success">Peoople</h4>
                    <a href="https://bit.ly/peoopleCR" target="_blank" rel="noreferrer">Link</a>
                    <figcaption className="figure-caption text-left mt-2">Sigueme en Peoople, en mi cuenta puedes ver mis recomendaciones
                        (Apps para ganar dinero, banco móvil y mucho más personal 👏).</figcaption>
                </figure>
                <hr />
                <figure className="figure">
                    <h4 className="text-success">Youtube</h4>
                    <a href="https://bit.ly/3gNBI96" target="_blank" rel="noreferrer">
                        <img loading="lazy" src="../images/iconos/youtube_icon.svg" 
                            className="figure-img img-fluid rounded iconYoutube" alt="Canal de Youtube" />
                    </a>
                    <figcaption className="figure-caption text-left">Canal actualmente inactivo.</figcaption>
                </figure>
                <hr />
                <figure className="figure">
                    <h4 className="text-success">Pinterest</h4>
                    <a href="https://bit.ly/2MkH4dW" target="_blank" rel="noreferrer">
                        <img loading="lazy" src="../images/iconos/pinterest_icon.svg" className="figure-img img-fluid rounded mt-2 iconPinterest"
                            alt="Pinterest" />
                    </a>
                    <figcaption className="figure-caption text-left mt-2">
                        En mi cuenta, podrás ver los varios tablones que tengo
                    </figcaption>
                </figure>
                <hr />
            </div>
            <div className="col col-md-3 mb-4">
                <div className="card ">
                    <div className="card-body">
                        <h2 className="h5 text-danger">⚡IMPORTANTE⚡</h2>
                        <p className="text-justify font-weight-bold">
                            Si teneís alguna pregunta, o alguna duda sobre esto o en general,
                            también me podeís escribir a mi correo 👇
                        </p>
                        <ul>
                            <li className="font-weight-bold">
                                <a href="mailto:admin@craftianosmoney.com" target="_blank" rel="noreferrer">
                                    Correo 📩
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
