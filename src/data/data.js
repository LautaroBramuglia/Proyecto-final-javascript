import guitarra from ".././assents/guitarra.png"
import notebook from ".././assents/notebook.png"
import television from ".././assents/television.png"
import React from "react";
const instrumentos = [
    {
      titulo: "Guitarra Electrica",
      id: 1,
      descripcion: "Roja",
      precio: 30000,
      PictureUrl: guitarra,
      
    },
    {
      titulo: "Notebook",
      id: 2,
      descripcion: "Notebook Acer",
      precio: 65000,
      PictureUrl:notebook,
    },
    {
      titulo: "Television 42'",
      id: 3,
      descripcion: "Television Samsung",
      precio: 90000,
      PictureUrl:television,
    },
  ];
  
  export default instrumentos;