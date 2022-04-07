import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = (props) => {
    return (
        <div>
            
            <header className="holder container-fluid">
                <NavLink to="/">
                    <img src="../public/Images/favicon.ico" alt="Coffe Shop Logo"/>
                </NavLink>
                <div>
                    <h1>Coffee Shop</h1>
                </div>
            </header>
           
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
           
           

            <footer>
                <div className="container-fluid">
                    <h3 className="text-center">Coffe Shop Copyright</h3>
                    <h4 className="text-center">Todos los Derechos Reservados</h4>
                    <h5 className="text-center">Website realizado por Juan Felix</h5>
                </div>
            </footer>

           
                    
        </div>
    );
}

export default HomePage