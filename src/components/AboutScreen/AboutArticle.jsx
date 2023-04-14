import { IconContext } from 'react-icons/lib';
import { TiSocialTwitter } from 'react-icons/ti';

export const AboutArticle = () => {
    return (
        <>
            <article className="col-12 col-md-8 article">
                {/*                 <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="../">Inicio</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Redes Sociales</li>
                    </ol>
                </nav> */}
                <h1 className="h4 text-primary mb-3">🏅 Mis Redes Sociales 📲</h1>
                <figure className="figure">
                    <h2 className="h5 text-primary">
                        <IconContext.Provider value={{ size: '1.2em', color: 'orange', title: 'Twitter Icon' }}>
                            <TiSocialTwitter className="figure-img img-fluid rounded mt-2"/>
                        </IconContext.Provider>
                        
                        Twitter ✨
                    </h2>
                    <a href="https://cutt.ly/craftianosTwitter" className="twitter-follow-button" target="_blank" rel="noreferrer">
                        <img loading="lazy" src="../img/icons/iconTwitter.webp" 
                            className="figure-img img-fluid rounded mt-2 iconTwitter" 
                            alt="Icono de Twitter" /> 
                    </a>
                    {/* <figcaption className="figure-caption text-left mt-2">
                        Red Social en la que publico más contenido, me puedes preguntar aquí lo que quieras 😅
                    </figcaption> */}
                </figure>

                <hr />

                <figure className="figure">
                    <h2 className="h5 text-primary mb-4">📘 Email Craftianosprivacy 📤</h2>
                    
                    <img loading="lazy" src="../img/otros/email-craftianos.png" 
                        className="figure-img rounded mx-auto d-block emailCraftianos" alt="Email CraftianosPrivacy" />
                    <figcaption className="figure-caption text-left mt-4">
                        A esta dirección de correo electrónico me puedes enviar un correo, ya sea con preguntar información o 
                        si quieres que te ayude con algo, también atiendo sin compromiso 🙌
                    </figcaption>
                </figure>

                <hr />

                <figure className="figure">
                    <h2 className="h5 text-primary">📘 Peoople 🎈</h2>
                    <a href="https://cutt.ly/craftianosPeoople" target="_blank" rel="noreferrer">
                        <img loading="lazy" src="../img/icons/iconPeoople.webp" 
                            className="figure-img img-fluid rounded mt-2 iconPeoople" alt="Icono de Peoople" />
                    </a>
                    <figcaption className="figure-caption text-left mt-2">
                        Sigueme en Peoople, en mi cuenta puedes ver mis recomendaciones
                        (Apps para ganar dinero, banco móvil y mucho más personal 👏).
                    </figcaption>
                </figure>
            </article>
            
                
{/*                         
                            <li className="">
                                <a href="https://cutt.ly/craftianosTwitter" target="_blank" rel="noreferrer">
                                    Twitter | Mi segunda cuenta 📘🖋️
                                </a>
                            </li>
                            <li className="">
                                <a href="https://cutt.ly/craftianosTelegram" target="_blank" rel="noreferrer">
                                    Canal de Telegram 📢🦄 | Aquí podrás encontrar todos los enlaces que voy publicando, etc 💫
                                </a>
                            </li>
                            <div className="email-contacto mt-4">
                                Aunque también me puedes escribir a mi correo electrónico 👇
                                <img loading="lazy" src="../img/otros/email-craftianos.png" 
                                    className="figure-img img-fluid rounded mt-2" alt="Email de Craftianos"/>
                            </div>
                         */}
            
        </>
    )
}