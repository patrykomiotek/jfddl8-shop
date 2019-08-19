import React from 'react'

const Basket = props => (
  <div style={{ border: '#c0c0c0 1px solid' }}>
    {props.data.map((product, index) => (
      <div key={`basket-${index}`}>
        <span>{product.name}</span> {product.quantity} szt., {product.quantity * product.price}
      </div>
    ))}
  </div>
)

export default Basket
