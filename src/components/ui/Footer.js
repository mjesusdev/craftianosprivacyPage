import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <>
            <div className="col-12 footer mt-2">
                <p className='text-justify text-center'>
                    Todos los derechos reservados © Craftianos 2022
                    {/* <img loading="lazy" src="../images/iconos/arrow.svg" className="go-up figure-img img-fluid rounded mt-2" alt="arrow"/> */}
                </p>
            </div>
            <div className="col-12 footer enlaces">
                <ul className="nav nav-pills justify-content-center enlacesfooter">
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
                        to="/sobre-mi"
                    >
                        Contacto 📬
                    </Link>
                </ul>
            </div>
        </>
    )
}
