import React from 'react';

export const Article = () => {
    return (
        <div className="row justify-content-center article">
            <div className="col-12 col-sm-7 col-md-5 mt-2">
                <p className="text-justify text-article">
                    En este blog podreís la forma de ganar dinero en 2021, ya sea por realizar encuestas, 
                    recibir cashback por compras en tiendas online, además de recibir ingresos extras, 
                    por utilizar aplicaciones de pago como Verse y bancos móviles 100% online referentes en Europa.
                </p>
                <hr />
                <div className="card">
                    <img className="card-img-top rounded imgCraftianos" 
                        title="Icono de Craftianos" alt="Imagen de Craftianos" loading="lazy"/>
                    <div className="card-body">
                        <h5 className="card-title"><b>Sobre mí</b></h5>
                        <p className="card-text">
                            Publico aplicaciones multiplataforma / web para resolver encuestas por dinero,
                            comprando online, promociones, plataformas de pago, etc. <br /><br />
                            Si está interesado pinche 👇
                        </p>
                        <a className="btn btn-outline-success" href="./encuestas-renumeradas/" title="Apps">Apps</a>
                        <br/><br/>
                        Si no me conoce, sigueme en mis <a href="./redes/" title="Redes sociales">redes sociales</a>, así verá mis publicaciones 
                        y no se pierde ninguna novedad de la que publico.
                    </div>
                </div>
            </div>
        </div>
    )
}
