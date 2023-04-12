import { NavLink, Link } from 'react-router-dom';

import { DarkScreen } from '../DarkScreen/DarkScreen';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            title="Página Principal | Home CraftianosMoney"
                            to="/"
                        >
                            🏠 Inicio 
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact
                            title="Mira mis redes sociales y conóceme"
                            to="/sobre-mi/"
                        >
                            📲 Redes Sociales
                        </NavLink>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <Link
                            aria-expanded="false"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                            id="navBarDropdown"
                            role="button"
                            title="Gana dinero"
                            to="#"
                        >
                            Dropdown
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navBarDropdown">
                            <li>
                                <Link
                                    className="dropdown-item"
                                    exact
                                    title="Gana dinero sin hacer nada | Ingresos Pasivos"
                                    to="/gana-dinero-sin-hacer-nada/"
                                >
                                    ✅ Gana dinero sin hacer nada
                                </Link>
                            </li>
                        </ul>
                    </li> */}
                    {/* TODO: Crear nueva sección de Ciberseguridad y Privacidad */}
                    {
                        /* <li className="nav-item">
                        <NavLink
                            className="nav-item nav-link"
                            exact
                            title="Bancos móviles y Pagos"
                            to="/banco-movil-pagos/"
                        >
                            🪙 Bancos móviles y Pagos
                        </NavLink>
                        </li> */
                    }
                </ul>
            </div>
            
            <DarkScreen />
        </nav>
    )
}
