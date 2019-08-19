import React from 'react'

const Product = props => (
  <div>
    <p>{props.data.name}</p>
    <p>{props.data.description}</p>
    <p>{props.data.price}</p>
    <p><button onClick={() => props.addHandler(props.data)}>add to Cart</button></p>
  </div>
)

export default Product
