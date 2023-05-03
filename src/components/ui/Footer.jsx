import { HashLink as Link } from 'react-router-hash-link';
import { IconContext } from 'react-icons/lib';
import { FaArrowUp } from 'react-icons/fa';

export const Footer = () => {
    const btnGoUp = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div className="col-12 mt-2">
            <p className='text-justify text-center'>
                Todos los derechos reservados <br />
                © CraftianosPrivacy 2023
            </p>
            
            <button onClick={ btnGoUp } className='go-up'>
                <IconContext.Provider value={{ size: '1.2em'}}>
                    <FaArrowUp className="figure-img img-fluid rounded mt-2" alt="arrow"/>
                </IconContext.Provider>
            </button>

            <ul className="nav nav-pills justify-content-center enlaces">
                <Link
                    className="nav-item nav-link"
                    to="#"
                >
                    Uso de cookies 🍪
                </Link>

                <Link
                    className="nav-item nav-link"
                    exact
                    title="Contactame por mis redes sociales"
                    to="/sobre-mi/#"
                >
                    Contacto 📬
                </Link>
            </ul>
        </div>
    )
}
