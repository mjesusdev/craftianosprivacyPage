import { IconContext } from 'react-icons/lib';
import { BsTwitter } from 'react-icons/bs';
import { FaExternalLinkAlt } from 'react-icons/fa'

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
                        <IconContext.Provider value={{ size: '1.4em', color: '#1DA1F2', title: 'Twitter Icon' }}>
                            <BsTwitter className="figure-img img-fluid rounded m-2" />
                        </IconContext.Provider>
                        
                        Twitter 🔐
                    </h2>
                    <figcaption className="figure-caption text-left mt-2">
                        En la cuenta de Twitter comparto noticias sobre ciberseguridad y privacidad, tips 
                        o noticias sobre la empresa Proton que posee los distintos servicios respetuosos con la privacidad <br />
                        (ProtonMail, ProtonCalendar, ProtonDrive, ProtonVPN y ProtonPass (de recién creación: 2023) )
                    </figcaption>
                    <a 
                        href="https://cutt.ly/craftianosPrivacyTw" 
                        className="btn btn-outline-success btn-block mt-4" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        🔐 Sigueme en Twitter y aprende más sobre la ciberseguridad y privacidad
                        <IconContext.Provider value={{ size: '1.2em', color: '#1DA1F2', title: 'External Link Icon' }}>
                            <FaExternalLinkAlt className="figure-img img-fluid rounded m-2" />
                        </IconContext.Provider>
                    </a>
                </figure>

                <hr />

                <figure className="figure">
                    <h2 className="h5 text-primary mb-4">📘 Email Craftianosprivacy 📤</h2>
                    <img 
                        alt="Email CraftianosPrivacy" 
                        className="figure-img rounded mx-auto d-block emailCraftianos" 
                        loading="lazy" 
                        src="../img/otros/email-craftianos.png" 
                    />
                    <figcaption className="figure-caption text-left mt-4">
                        A esta dirección de correo electrónico me puedes enviar un correo, ya sea con preguntar información o 
                        si quieres que te ayude con algo, también atiendo sin compromiso 🙌
                    </figcaption>
                </figure>

                <hr />

                <figure className="figure">
                    <h2 className="h5 text-primary">📘 Peoople 🎈</h2>
                    <a href="https://cutt.ly/craftianosPeoople" target="_blank" rel="noreferrer">
                        <img 
                            alt="Icono de Peoople"
                            className="figure-img img-fluid rounded mt-2 iconPeoople" 
                            loading="lazy" 
                            src="../img/icons/iconPeoople.webp" 
                        />
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
            */}
        </>
    )
}