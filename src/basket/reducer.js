import { BASKET_ADD_PRODUCT } from './constants'

const INITIAL_STATE = {
  products: [] // {name, quantity, price}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BASKET_ADD_PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.payload)
      }
    default:
      return state
  }
}
