import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './components/layout/Landing';
import HomePage from './components/layout/HomePage'
import NosotrosPage from './components/layout/NosotrosPage'
import ServiciosPage from './components/layout/ServiciosPage'
import ContactoPage from './components/layout/ContactoPage'


import './App.css';
import './styles/normalize.css'


function App() {
  return (

      <BrowserRouter>

        <Route path='/' exact component={Landing} />
        <Route path='/home' exact component={HomePage} />
        <Route path='/nosotros' exact component={NosotrosPage} />
        <Route path='/servicios' exact component={ServiciosPage} />
        <Route path='/contacto' exact component={ContactoPage} />

      </BrowserRouter>

  );
}

export default App;
