import React from "react";
import '../../styles/components/layout/Landing.css'
import { NavLink } from 'react-router-dom';

const Landing = (props) => {
    return (
        <div>
            <div className="todo">
                <img className="todo-fondo" src="./Images/espresso.jpg" alt="Cafe Espresso"/>
            </div>


            <div className="todo-menos-img">

                <div className="logo-titulo">
                    <div className="logo">
                        <NavLink activeClassName='activo' to='/'>
                            <img src="./Images/favicon.ico" alt="Coffee Shop Logo"/>
                        </NavLink>
                    </div>
                    <h1>Coffee Shop</h1>
                </div>

                <div className="texto">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil accusantium, iure voluptate tenetur animi quia fugiat dicta.
                    </p>
                </div>

                <div className="boton">
                    <NavLink activeClassName='activo' to='/home'>Entrar</NavLink>
                </div>

            </div>
        </div>
    );
}

export default Landing

/*
<div className='holder'>
                <ul>
                    <li>
                    <NavLink activeClassName='activo' exact to='/'>Home</NavLink>
                    </li>

                    <li><NavLink activeClassName='activo' exact to='/nosotros'>Nosotros</NavLink></li>
                    <li><NavLink activeClassName='activo' exact to='/novedades'>Novedades</NavLink></li>
                    <li><NavLink activeClassName='activo' exact to='/contacto'>Contacto</NavLink></li>
                </ul>
            </div>
*/