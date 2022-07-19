import React from "react";
const itemStyle = {
  backgroundColor: "lightblue",
};
function Item({ elem }) {
  return (
    <div style={itemStyle}>
      <h1>{elem.titulo}</h1>
      <img src={elem.PictureUrl} alt="Celular"></img>
      <h2>{elem.precio}</h2>
      <h3>{elem.descripcion}</h3>
      <button>Ver detalle el producto</button>

    </div>
  );
}

export default Item
 



