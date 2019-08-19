import { BASKET_ADD_PRODUCT } from './constants'

const INITIAL_STATE = {
  products: [] // {name, quantity, price}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BASKET_ADD_PRODUCT:
      const product = {
        id: action.payload.id,
        name: action.payload.name,
        quantity: 1,
        price: action.payload.price
      }
      const newProducts = [...state.products];
      const productIndex = newProducts.findIndex((element) => element.id === product.id)

      if (productIndex === -1) {
        return {
          ...state,
          products: state.products.concat(product)
        }
      } else {
        const modifiedProduct = newProducts[productIndex]
        newProducts[productIndex] = {...modifiedProduct, quantity: modifiedProduct.quantity + 1}
        return {
          ...state,
          products: newProducts
        }
      }

    default:
      return state
  }
}
