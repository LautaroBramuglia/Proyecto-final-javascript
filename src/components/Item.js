import { Button } from 'bootstrap';
import React from 'react'

const Item = (item) => {
    const {name, price , stock}= item
  return (
    <div>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Image}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          ${price}
          <br/>
          stock:{stock}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  
  ); 
}


export default Item