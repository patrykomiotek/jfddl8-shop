import React, { Component } from 'react'

import Product from '../components/Product';

class ProductsList extends Component {

    state = {
      products: [
        { name: "One", description: 'Super produkt', price: 123 },
        { name: "Two", description: 'Super produkt2', price: 332 },
        { name: "Three", description: 'Super produkt3', price: 321 }
      ]
    }

    render () {
      return (
        <React.Fragment>
          {this.state.products.map((product, index) => (
            <Product key={`prod-${index}`} data={product} />
          ))}
        </React.Fragment>
      )
    }
}

export default ProductsList
