import { useState, useEffect } from 'react'
import './NavBar.css'
import logo from '../imagenes/logoTienda.png'
import Icono from "../imagenes/icono.png"
import { NavLink } from 'react-router-dom'
import CartWidget from '../components/CartWidget'

const NavBar = () =>{

    const [categorias, setCategorias] = useState([])
    useEffect(()=>{
        setTimeout(()=>{
        fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=>{
            setCategorias(json)
        })
        .catch(err=>console.log(err))
        }, 500)
    },[])

    return(
    <header>
        <NavLink to="/"><img src={logo} alt="logo"/></NavLink>
        <NavLink to="/"><h1>Coder<br/>Celulares</h1></NavLink>
        <nav>
            {categorias.map((categorias)=><NavLink key={categorias} to={`/category/${categorias}`}>{categorias}</NavLink>)}
        </nav>
        <CartWidget/>
    </header>
    )
}

export default NavBar