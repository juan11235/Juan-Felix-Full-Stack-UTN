import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <div>
            <header className="holder container-fluid">
                <NavLink to="/">
                    <img src="./../Images/favicon.ico" alt="Coffee Shop Logo"/>
                </NavLink>
                <div>
                    <h1>Coffee Shop</h1>
                </div>
            </header>
        </div>
    );
}

export default Header