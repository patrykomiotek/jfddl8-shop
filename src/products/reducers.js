const INITIAL_STATE = {
  products: [],
  product: {},
  basket: {}
}

const products = [
  { name: "One", description: 'Super produkt', price: 123 },
  { name: "Two", description: 'Super produkt2', price: 332 },
  { name: "Three", description: 'Super produkt3', price: 321 }
]

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'PRODUCTS/FETCH':
      return {
        ...state,
        products: products,
      }
    default:
      return state
  }
}
