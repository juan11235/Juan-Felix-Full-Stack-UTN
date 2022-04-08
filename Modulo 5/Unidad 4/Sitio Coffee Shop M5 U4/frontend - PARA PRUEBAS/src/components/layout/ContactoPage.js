import React from "react";

import { NavLink } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

const ContactoPage = (props) => {
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
            <NavLink class="nav-link" to="/servicios">
              Servicios
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link activo" to="/contacto">
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
      <Footer />
    </div>
  );
};

export default ContactoPage;
