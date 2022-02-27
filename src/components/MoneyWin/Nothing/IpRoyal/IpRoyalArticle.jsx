import React from 'react';

export const IpRoyalArticle = () => {
    return (
        <>
            <div className="col col-md-3"></div>
            <div className="col-12 col-md-6 mt-2 article">
                <h1 className="h3 text-success mb-4">IpRoyal Panws 🎁</h1>
                <h2 className="h4 text-success mb-4">Gana dinero sin hacer nada</h2>
                <p className="text-justify enlaces">
                    Con IpRoyal Panws puedes compartir tu internet y a la vez ganar dinero de forma pasiva.
                    Más abajo encontrarás una breve explicación de como funciona. Además del link de registro 🚀
                </p>
                
                <div className="list-indice">
                    <span className="h5 mt-4">Índice de los contenidos</span>
                    <div class="list-group mt-4">
                        <a href="#construccion" class="list-group-item list-group-item-action list-group-item-dark">
                            CONTENIDO EN CONSTRUCCION
                        </a>
                    </div>
                </div>

                <div id="construccion">
                    {/* <h3 className="h5 text-danger mt-4 mb-4"></h3> */}
                    {/* <p className="text-justify">
                        CONTENIDO EN CONSTRUCCION
                    </p> */}
                    <div className="alert alert-danger enlaces" role="alert">
                        Aquí os dejo el link de registro por si os interesa ganar algunos dólares o dinero.
                        <br /><br />
                        <a href="https://bit.ly/iproyalCR" target="_blank" rel="noopener noreferrer">
                            🚀🚀 Enlace de registro (Hacer click aquí) 🚀🚀
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-3 mb-5">
                <div className="card">
                    <div className="card-body">
                        <h3 className="h5 text-danger">⚡ Otras plataformas de cashback ⚡</h3>
                        <p className="text-justify fw-bold">
                            Aquí os dejo un listado de otras plataformas de cashback que he probado y que recomiendo ✅
                        </p>
                        <ul className="enlaces">
                            <li className="fw-bold">
                                <a href="https://bit.ly/widiloCR" target="_blank" rel="noreferrer">
                                    🥇 Widilo: La segunda mejor 🎁
                                </a>
                            </li>
                            <li className="fw-bold">
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
            </div>
        </>
    )
}