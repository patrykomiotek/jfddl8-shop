import React from 'react'

const Product = props => (
  <div>
    <p>{props.name}</p>
    <p>{props.description}</p>
    <p>{props.price}</p>
  </div>
)

export default Product
