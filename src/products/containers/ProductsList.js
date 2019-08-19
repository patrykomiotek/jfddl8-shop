import React, { Component } from 'react'
import { connect } from 'react-redux'

import Product from '../components/Product'
import { fetchProducts } from '../actions'
import { addProduct } from '../../basket/actions'

const mapStateToProps = (state, ownProps) => ({
  myProducts: state.products.products,
  isUser: ownProps.isUser
})

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  addProduct: (product) => dispatch(addProduct(product))
})

// const mapDispatchToProps = {
//   fetchProducts,
//   addProduct
// }


class ProductsList extends Component {

    componentDidMount() {
      this.props.fetchProducts()
    }

    render () {
      return (
        <React.Fragment>
          {this.props.myProducts.map((product, index) => (
            <Product key={`prod-${index}`} data={product} addHandler={this.props.addProduct} />
          ))}
        </React.Fragment>
      )
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList)
