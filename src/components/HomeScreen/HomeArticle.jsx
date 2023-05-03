import { HashLink as Link } from 'react-router-hash-link';

export const HomeArticle = () => {
    return (
        <article className='col-12 col-sm-7 col-md-6 mt-2'>
            <h1 className="h4 text-primary mb-2">👋 Bienvenidos a mi página 🤗</h1>
            <p className="text-justify text-article">
                En este blog podreís encontrar tips de ciberseguridad y privacidad, 
                su importancia y el porque es tan importante tus datos.
            </p>
            <hr />
            <div className="card cardHome">
                <img className="card-img-top rounded imgCraftianos" src="../img/craftianosprivacy.webp"
                    title="Icono de Craftianos" alt="Imagen de Craftianos" loading="lazy"/>
                <div className="card-body d-grid gap-2 col-12 mx-auto">
                    <h2 className="h4 card-title fw-bold">Sobre mí ✨</h2>
                    <p className="card-text">
                        Soy de España y comencé a hacer esta página como hobby en el 2018,
                        como proyecto personal, ya que aparte de tener conocimientos en el mundo de la ciberseguridad y privacidad,
                        soy Desarrollador Web 👨‍💻 y por lo cual esta página la hecho desde cero 🥰 <br /><br />
                        
                        De hecho está página no estaba dedicada para concienciar sobre esto, que es tan importante,
                        me gustaba ganar dinero en línea utilizando aplicaciones, como son encuestas en línea, cashback, etc.

                        Pero eso lo he dejado en un "segundo plano" porque me he dado cuenta de todos los datos que damos por simplemente ganar un extra, 
                        así que aquí te doy consejos, alternativas a los productos de las grandes compañías tecnológicas (GAFAM o GAMAM)
                    </p>

                    {/* Link to Enlaces with scroll to top 🚀 */}
                    <Link
                        className="btn btn-outline-success btn-block mb-4"
                        exact
                        to="/sobre-mi/#"
                        title="Link a redes sociales - CraftinosPrivacy"
                    >
                        Sigueme en mis redes sociales
                    </Link>
                </div>
            </div>
        </article>
    )
}