import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import Header from "./Header";
import CarouselCoffeeShop from "./CarouselCoffeeShop";

const HomePage = (props) => {
  return (
    <div>
      <Header />
      <Nav />
      <CarouselCoffeeShop />
      <Footer />
    </div>
  );
};

export default HomePage;
