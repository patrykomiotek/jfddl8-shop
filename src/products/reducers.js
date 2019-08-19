import { PRODUCTS_FETCH } from './constants'

const INITIAL_STATE = {
  products: [],
  product: {},
  basket: {}
}

const products = [
  { id: 1, name: "One", description: 'Super produkt', price: 123 },
  { id: 2, name: "Two", description: 'Super produkt2', price: 332 },
  { id: 3, name: "Three", description: 'Super produkt3', price: 321 }
]

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_FETCH:
      return {
        ...state,
        products: products,
      }
    default:
      return state
  }
}
