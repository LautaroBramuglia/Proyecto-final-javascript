import React from "react";
import { useState } from "react";

const ItemCount = ({stock, initial = 0}) =>{
   const[cuenta, setCuenta ] = useState(initial)


   const sumar =( ) =>{
    if(cuenta < stock){
        setCuenta( cuenta + 1)
    }
    if(cuenta >= stock){
        alert("No hay mas Stock")
    }
}

const restar = () =>{
    if (cuenta > 0){
        setCuenta(cuenta - 1)
    }
}





   return(
    <>
<div>
    <button onClick={sumar}>+</button>
    <p>{cuenta}</p>
    <button onClick={restar}>-</button>
</div>
<button onClick={onAdd}>Agregar al carrito</button>

    </>
   )
}
export default ItemCount;