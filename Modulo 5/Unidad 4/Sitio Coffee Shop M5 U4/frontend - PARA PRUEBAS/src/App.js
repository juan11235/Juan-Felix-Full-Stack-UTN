import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./components/layout/LandingPage";
import HomePage from "./components/layout/HomePage";
import NosotrosPage from "./components/layout/NosotrosPage";
import ServiciosPage from "./components/layout/ServiciosPage";
import ContactoPage from "./components/layout/ContactoPage";

import "./App.css";
import "./styles/normalize.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/nosotros" exact component={NosotrosPage} />
        <Route path="/servicios" exact component={ServiciosPage} />
        <Route path="/contacto" exact component={ContactoPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
