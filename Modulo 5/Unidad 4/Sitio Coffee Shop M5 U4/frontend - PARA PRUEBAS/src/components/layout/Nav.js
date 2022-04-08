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

/* import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import './App.css'
import './normalize.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Nav />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/nosotros' exact component={NosotrosPage} />
          <Route path='/novedades' exact component={NovedadesPage} />
          <Route path='/contacto' exact component={ContactoPage} />

        </Switch>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App; */