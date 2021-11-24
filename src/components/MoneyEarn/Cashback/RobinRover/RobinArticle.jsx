import React from 'react';

export const RobinArticle = () => {
    return (
        <>
            <div className="col col-md-3"></div>
            <div className="col-12 col-md-6 mt-2 article">
                {/* //* Modificar estructura web xd */}
                <h1 className="h3 text-success mb-4">Robin Rover 🎁 - Recibe dinero por ceder tu infomarción</h1>
                <h2 className="h4 text-success mb-4">✅ Haz compras en cualquier tienda online y recibe cash 💸</h2>

                <div className="list-indice">
                    <span className="h5 mt-4">Índice de los contenidos</span>
                    <div className="list-group mt-4">
                        <a href="#funcionamiento-robin" className="list-group-item list-group-item-action list-group-item-dark">
                            1. ❓ ¿Cómo funciona Robin Rover? | Registro y Funcionamiento
                        </a>
                        <a href="#ganar-dinero-robin" className="list-group-item list-group-item-action list-group-item-dark">
                            2. ✅ ¿Cómo se gana dinero con Robin Rover?
                        </a>
                    </div>
                </div>

                <div id="funcionamiento-robin">
                    <h3 className="h5 text-danger mt-4 mb-4">❓ ¿Cómo funciona Robin Rover? | Registro y Funcionamiento</h3>
                    <p className="text-justify">
                        Pues bien, aquí os enseño en la imagen de abajo, el procedimiento para recibir dinero con
                        nuestros datos de compra.
                    </p>
                    {/* <img loading="lazy" src="../img/robin-rover/funcionamiento.png" className="img-fluid rounded mx-auto d-block mb-4" 
                        alt="Funcionamiento de Robin Rover" title="Funcionamiento de Robin Rover" /> */}
                    <p className="text-justify enlaces">
                        El primer paso, es descargarnos la aplicación de Robin Rover, disponible en Android e iOS. <br />
                        Desde aquí podeís descargarosla 👉 
                        <a href="https://bit.ly/robinRoverCR" target="_blank" rel="noopener noreferrer"> https://bit.ly/robinRoverCR </a> 
                        <br />
                        Si entraís en el enlace de arriba, podreís encontrar los pasos para registraros y demás.
                    </p>
                    <div className="alert alert-info enlaces" role="alert">
                        IMPORTANTE: No olvides de indicar mi código (R0006775) cuando te lo pidan, ya que obtendrás una posibilidad
                        de ser el afortunado/a de ganar cada día.
                    </div>
                    <p className="text-justify enlaces">
                        Cuando ya os habeís registrado, teneís que enviar las compras online que habeís hecho, tales como
                        Amazon, Ebay, Aliexpress, etc.
                        Podeís enviar cuales quiera, ya que la única condición, es que tiene que ser del 2019 o de este
                        mismo año 2020. <br /> <br />
                        Aquí veís más información sobre como funciona el envío de los pedidos: <br />
                        <a href="https://www.robinrover.io/centro-de-ayuda/mis-pedidos/#3-1"
                            target="_blank" rel="noopener noreferrer"> https://www.robinrover.io/centro-de-ayuda/mis-pedidos/</a>
                    </p>
                    <div className="alert alert-info enlaces" role="alert">
                        *** En la imagen está todo el procedimiento para obtener beneficios por ceder nuestros datos de compras
                        online. <br />
                        Si tenéis cualquier otra pregunta, os estaré encantado de responderos en mis 
                        <a href="/sobre-mi/"> redes sociales</a>
                    </div>
                </div>

                <div id="ganar-dinero-robin">
                    <h3 className="h5 text-danger mt-4 mb-4">✅ ¿Cómo se gana dinero con Robin Rover?</h3>
                    <a className="btn btn-outline-success mt-2 mb-4" href="https://bit.ly/robinRoverCR" target="_blank" rel="noopener noreferrer">
                        Descarga la app y empieza a recibir dinero por tus datos 📗
                    </a>
                </div>
            </div>
            <div className="col-12 col-md-3 mb-5">
                <div className="card">
                    <div className="card-body">
                        <h2 className="h5 text-danger">⚡ Otras plataformas de cashback ⚡</h2>
                        <p className="text-justify fw-bold">
                            Aquí os dejo un listado de otras plataformas de cashback que he probado y que recomiendo ✅
                        </p>
                        <ul className="enlaces">
                            <li className="">
                                <a href="https://bit.ly/widiloCR" target="_blank" rel="noreferrer">
                                    🥇 Widilo: La segunda mejor 🎁
                                </a>
                            </li>
                            <li className="">
                                <a href="https://bit.ly/igraalCR" target="_blank" rel="noreferrer">
                                    🥈 Igraal: Subidas del cashback todos los días 🎁
                                </a>
                            </li>
                            <li className="fw-bold">
                                <a href="https://bit.ly/berubyCR" target="_blank" rel="noreferrer">
                                    🥉 Beruby: Encuestas y otros beneficios 🎁
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* <div className="bannerRobin Rover mb-5">
                    <a href="https://bit.ly/robinRoverCR" target="_blank" rel="noopener noreferrer">
                        <img 
                            loading="lazy" 
                            className="img-fluid rounded mx-auto d-block imgLety w-100 mt-4" 
                            src="../img/robin-rover/banner.webp"
                            alt="Consigue 5€ GRATIS al Unirte a Robin Rover | Banner Robin Rover" 
                        />
                    </a>
                </div> */}
            </div>
        </>
    )
}