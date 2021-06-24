import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {

    /* const history = useHistory();
 */
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/"
                    >
                        Inicio 🏠
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/sobre-mi"
                    >
                        Redes Sociales 🧡
                    </NavLink>
                    <li className="nav-item dropdown">
{/*                         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Gana dinero con estos métodos">
                            Gana dinero con estos métodos 💸
                        </a> */}
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
{/*                             <a className="dropdown-item" href="./encuestas-renumeradas/" title="Encuestas renumeradas">
                                Encuestas renumeradas 📙
                            </a>
                            <a className="dropdown-item" href="./compras-cashback/" title="Recibe cashback por realizar compras">
                                Recibe cashback por realizar compras 👛
                            </a>
                            <a className="dropdown-item" href="./gana-dinero-jugando/" title="Gana dinero jugando">
                                Gana dinero jugando 🎮💸
                            </a>
                            <a className="dropdown-item" href="./gana-cryptos-gratis/" title="Gana cryptos gratis">
                                Gana cryptos gratis 🔥💸
                            </a>
                            <a className="dropdown-item" href="./banco-movil-pagos/" title="Bancos móviles y Pagos">
                                Bancos móviles y Pagos 🏦 
                            </a> */}
                        </div>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="./blog/" title="Blog">Blog 📚</a> */}
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="./enlaces/" title="Enlaces">Enlaces 💡</a> */}
                    </li>
                </ul>
            </div>
            <button className="switch" id="switch">
                <span>💡</span>
                <span>🌑</span>
            </button>
        </nav>
    )
}
