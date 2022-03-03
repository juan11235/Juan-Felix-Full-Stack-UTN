import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Landing from './components/layout/Landing';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';

import HomePage from './pages/HomePage';
import ContactoPage from './pages/ContactoPage';
import NosotrosPage from './pages/NosotrosPage';
import ServiciosPage from './pages/ServiciosPage'

function App() {
    return ( <
        div >

        <
        Landing / >
        <
        Header / >
        <
        Nav / >
        <
        Footer / >
        <
        /div>



    );
}

export default App;