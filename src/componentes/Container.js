import React, { useEffect, useState } from "react";
import instrumentos from "../data/data";
import ItemList from "./ItemList";
import Contador from "./Contador"

const promesa = new Promise((res, rej) => {
    setTimeout(() => {
      res(instrumentos);
    }, 2000);
  });

function Container(props){
const {name} = props;
const [instrumentList, setInstrumentList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    promesa.then((response) => {
      setLoading(false);
      setInstrumentList(response);
    });
  }, []);

  if (loading) {
    return (
      <>
        <h1>Cargando...</h1>
      </>
    );
  }

return(
<div>
    <h1>{name}</h1>
    <Contador stock={5} initial ={0}/>
    <div>
      <ItemList instruments={instrumentList} />
    </div>
</div>

);
}
export default function ItemListContainer() {
  const [instrumentList, setInstrumentList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    promesa.then((response) => {
      setLoading(false);
      setInstrumentList(response);
    });
  }, []);

  if (loading) {
    return (
      <>
        <h1>Cargando...</h1>
      </>
    );
  }
  return (
    <div>
      <ItemList instruments={instrumentList} />
    </div>
  );
}