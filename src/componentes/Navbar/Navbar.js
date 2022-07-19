import React from "react"
import logo from "../../assents/imagenlogo.png"
import Icono from "../Icono"
import "./Navbar.css"

const Navbar = () => {
    return(
        <header>
        <img src={logo} alt="logo" />
        <h1>Coder-celulares</h1>
        <nav>
            <a href="../../app.js">Inicio</a>
            <a href="#">Celulares</a>
            <a href="#">Computadoras</a>
            <a href="#">Sobre-nosotros</a>
        </nav>
        <img src={Icono} alt="" />
        </header>
    )
}


export default Navbar