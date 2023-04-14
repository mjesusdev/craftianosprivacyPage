import { NavLink } from 'react-router-dom';

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
                    {/* TODO: Crear nueva sección de Ciberseguridad y Privacidad */}
                    <li className="nav-item">
                        <NavLink
                            className="nav-item nav-link"
                            exact
                            title="Blog de CraftianosPrivacy"
                            to="/blog/"
                        >
                            📙 Blog
                        </NavLink>
                        </li>
                </ul>
            </div>
            
            <DarkScreen />
        </nav>
    )
}
