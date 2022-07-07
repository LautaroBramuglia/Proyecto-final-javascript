import React from "react";
import style from "../components/style.css"
import carrito from "../img/carrito.jpg"
import CardWidget from "./CartWidget";


const navbar= ()=>{
  return(

  <header>
    <CardWidget />
    <h1>Coder-celulares</h1>
    <nav>
      <a href="#">Inicio</a>
      <a href="#">Celulares</a>
      <a href="#">Computadoras</a>
      <a href="#">Sobre-nosotros</a>
    </nav>
    <img src={carrito} alt="fotocarrito" />
  </header> 

  )

}

export default navbar
