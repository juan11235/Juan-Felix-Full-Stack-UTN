import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { NavLink } from "react-router-dom";

const NosotrosPage = (props) => {
  return (
    <div>
      <Header />
      {/* <Nav /> */}
      <nav class="navbar navbar-expand-sm bg-light justify-content-center ">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NavLink class="nav-link" to="/home">
              Home
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link activo" to="/nosotros">
              Nosotros
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/servicios">
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
      <div>
        <main class="main-nosotros">
          <div class="div-nosotros">
            <div class="div-item-nosotros">
              <img
                src="Images/nosotros1.jpg"
                alt="Gerente General Juan Coffee"
              ></img>
              <h2>Juan Coffee</h2>
              <h3>Gerente General</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, qui!
              </p>
            </div>
            <div class="div-item-nosotros">
              <img src="Images/nosotros2.jpg" alt="Manager Maggie Coffee"></img>
              <h2>Maggie Coffee</h2>
              <h3>Manager</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, qui!
              </p>
            </div>
            <div class="div-item-nosotros">
              <img src="Images/nosotros3.jpg" alt="Barista Kevin Coffee"></img>
              <h2>Kevin Coffee</h2>
              <h3>Barista</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, qui!
              </p>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default NosotrosPage;
