import React, { Component } from 'react'

import Product from '../components/Product';

class ProductsList extends Component {

    render () {
      return (
        <React.Fragment>
          <Product data={{ name: "One", description: 'Super produkt', price: 123 }} />
          <Product data={{ name: "Two", description: 'Super produkt2', price: 332 }} />
          <Product data={{ name: "Three", description: 'Super produkt3', price: 321 }} />
        </React.Fragment>
      )
    }
}

export default ProductsList
