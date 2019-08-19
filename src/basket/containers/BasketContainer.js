import React from 'react'
import { connect } from 'react-redux'

import Basket from '../components/Basket'

const mapStateToProps = state => ({
  products: state.basket.products
})

class BasketContainer extends React.Component {
  render () {
    return (
      <Basket data={this.props.products} />
    )
  }
}

export default connect(mapStateToProps)(BasketContainer)
