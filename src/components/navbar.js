import React from "react";
import style from "../components/style.css"
import logo from "../img/logo.png"
import carrito from "../img/carrito.jpg"
const navbar= ()=>{
  return(

  <header>
    <img src={logo} alt="logodecelular"/>
    <h1>Coder-celulares</h1>
    <nav>
      <a href="#">Inicio</a>
      <a href="#">Celulares</a>
      <a href="#">Computadoras</a>
      <a href="#">Sobre-nosotros</a>
    </nav>
<img src="carrito" alt="fotocarrito" />
  </header> 

  )

}

export default navbar
