import React from "react";
import '../../styles/components/layout/Landing.css'

const Landing = (props) => {
    return (
        <div>
            <div class="todo">
                <img class="todo-fondo" src="./Images/espresso.jpg" alt="Cafe Espresso"/>
            </div>


            <div class="todo-menos-img">

                <div class="logo-titulo">
                    <div class="logo">
                        <a href="#" target="_blank">
                            <img src="./Images/favicon.ico" alt="Coffee Shop Logo"/>
                        </a>
                    </div>
                    <h1>Coffee Shop</h1>
                </div>

                <div class="texto">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil accusantium, iure voluptate tenetur animi quia fugiat dicta.
                    </p>
                </div>

                <div class="boton">
                    <a href="#" target="_blank">Entrar</a>
                </div>

            </div>
        </div>
    );
}

export default Landing