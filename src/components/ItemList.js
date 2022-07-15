import React from 'react'
import item from './Item' 

const ItemList = ({items}) => {
  return (
    <div>
        {items.map((item)=> <Item item={item} key={item.id} />)}
    </div>
  )
}

export default ItemList