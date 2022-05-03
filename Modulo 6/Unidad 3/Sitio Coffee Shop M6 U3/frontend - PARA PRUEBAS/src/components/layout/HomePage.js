import React from "react";

import { NavLink } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import CarouselCoffeeShop from "./CarouselCoffeeShop";

const HomePage = (props) => {
  return (
    <div>
      <Header />
      {/* <Nav /> */}
      <nav className="navbar navbar-expand-sm bg-light          justify-content-center ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link activo" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/nosotros">
              Nosotros
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/servicios">
              Servicios
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contacto">
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
      <CarouselCoffeeShop />
      <Footer />
    </div>
  );
};

export default HomePage;
