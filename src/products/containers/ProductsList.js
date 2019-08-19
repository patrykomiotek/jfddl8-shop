import React, { Component } from 'react'
import { connect } from 'react-redux'

import Product from '../components/Product'
import { fetchProducts } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  myProducts: state.products.products,
  isUser: ownProps.isUser
})

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
})

class ProductsList extends Component {

    componentDidMount() {
      this.props.fetchProducts()
    }

    render () {
      return (
        <React.Fragment>
          {this.props.myProducts.map((product, index) => (
            <Product key={`prod-${index}`} data={product} />
          ))}
        </React.Fragment>
      )
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList)
