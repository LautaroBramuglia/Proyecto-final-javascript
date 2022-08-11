import { useContext, useState } from "react"
import {contexto} from './CartContext'
import {NavLink} from 'react-router-dom'
import Formulario from './Formulario'
import {doc, addDoc, collection, serverTimestamp, updateDoc} from 'firebase/firestore'
import {db} from '../firebase/firebase'

const Cart = () =>{
    const [idVentas, setIdVenta] = useState('')

    const {removeItem, clear, productosCarrito, precioTotal} = useContext(contexto)

    const eliminar = (element) =>{
        removeItem(element)
    }
    const vaciar = () =>{
        clear()
    }
    const finalizarCompra = (usuario) =>{
        const ventasCollection = collection(db, 'ventas')
        addDoc(ventasCollection, {usuario, productosCarrito, precioTotal, date: serverTimestamp()})
        .then(res => setIdVenta(res.id))
        let copiaArray = [...productosCarrito]
        copiaArray.forEach((element) => {
            let updateCollection = doc(db, 'productos', element.id)
            updateDoc(updateCollection, {stock: (element.stock - element.cantidad)})
        });
        clear()
    }
    return(
        <div style={style.contenedor}>
            {productosCarrito.length <= 0 
            ? <div style={style.contenedor}><h3>No hay productos</h3><NavLink to="/"><button>Volver a Home</button></NavLink></div>
            : productosCarrito.map((element) =>
            <div key={element.id} style={style.contenedor}>
                <h3>{element.title}</h3>
                <p>{`Precio: ${element.price}`}</p>
                <p>{`Cantidad: ${element.cantidad}`}</p>
                <button onClick={()=>eliminar(element)}>Eliminar</button>
            </div>
            )}
            {productosCarrito.length > 0 && <h4>{`El precio total es ${precioTotal}`}</h4>}
            {productosCarrito.length > 0 && <button onClick={vaciar}>Vaciar carrito</button>}
            {productosCarrito.length > 0 && <Formulario finalizarCompra={finalizarCompra}/>}
            {idVentas != '' && <h4>{`El Id de tu compra es ${idVentas}`}</h4>}
        </div>
    )
}

export default Cart

const style = {
    contenedor: {
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center"
    }
}