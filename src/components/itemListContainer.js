import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

const itemListContainer = () => {
  const[iTems,setItems]= useState ([])

  const productos= [
    {id:1, name: 'Producto 1',price:100, stock:10, image:'https://m.media-amazon.com/images/I/81afsli5ctL._AC_SL1500_.jpg'} ,
    {id:2, name: 'Producto 2',price:200, stock:20, image:'https://m.media-amazon.com/images/I/81afsli5ctL._AC_SL1500_.jpg'} ,
    {id:3, name: 'Producto 3',price:300, stock:30, image:'https://m.media-amazon.com/images/I/81afsli5ctL._AC_SL1500_.jpg'} ,
  ]

  const task= new Promise ((res, rej)=>{
setTimeout(() => {
    res()
    }, 2000)
  
})

useEffect(()=>{

  task.then(res=> console.log(res))
  .catch(error=> console.log(error))

},[])
 console.log(iTems)
 
 
 
  return (
    <div>
  <ItemList iTems={iTems}/>
  </div>
  )
}

export default itemListContainer