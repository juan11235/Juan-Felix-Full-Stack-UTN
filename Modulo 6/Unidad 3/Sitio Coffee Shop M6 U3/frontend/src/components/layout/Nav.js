import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-light          justify-content-center ">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link activo" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/nosotros">Nosotros</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/servicios">Servicios</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav