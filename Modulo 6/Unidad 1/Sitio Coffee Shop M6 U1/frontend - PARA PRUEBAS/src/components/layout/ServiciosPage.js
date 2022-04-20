import React from "react";

import { NavLink } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

const ServiciosPage = (props) => {
  return (
    <div>
      <Header />
      <nav class="navbar navbar-expand-sm bg-light justify-content-center ">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NavLink class="nav-link" to="/home">
              Home
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/nosotros">
              Nosotros
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link activo" to="/servicios">
              Servicios
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/contacto">
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
      <main class="main-servicios">
        <div class="grid-container">
            <div id="item1" class="grid-item">
                <img src="" alt=""/>
                <h3>Cafetería</h3>
                <p>lorem10</p>
                <button>Leer más<i></i></button>
            </div>
            <div id="item2" class="grid-item">
                <img src="" alt=""/>
                <h3>Pasteleria</h3>
                <p>lorem10</p>
                <button>Leer más<i></i></button>
            </div>
            <div id="item3" class="grid-item">
                <img src="" alt=""/>
                <h3>Vinos</h3>
                <p>lorem10</p>
                <button>Leer más<i></i></button>
            </div>
            <div id="item4" class="grid-item">
                <img src="" alt=""/>
                <h3>Almuerzos</h3>
                <p>lorem10</p>
                <button>Leer más<i></i></button>
            </div>
            <div id="item5" class="grid-item">
                <img src="" alt=""/>
                <h3>Cocktails</h3>
                <p>lorem10</p>
                <button>Leer más<i></i></button>
            </div>
            <div id="item6" class="grid-item">
                <img src="" alt=""/>
                <h3>Chocolates</h3>
                <p>lorem10</p>
                <button>Leer más<i></i></button>
            </div>
            <div id="item7" class="grid-item">
                <img src="" alt=""/>
                <h3>Catering</h3>
                <p>lorem10</p>
                <button>Leer más<i></i></button>
            </div>
            <div id="item8" class="grid-item">
                <img src="" alt=""/>
                <h3>Delivery</h3>
                <p>lorem10</p>
                <button>Leer más<i></i></button>
            </div>

        </div>
    </main>
      <Footer />
    </div>
  );
};

export default ServiciosPage;
