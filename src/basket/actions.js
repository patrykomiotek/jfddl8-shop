import { BASKET_ADD_PRODUCT } from './constants'

export const addProduct = (product) => ({
  type: BASKET_ADD_PRODUCT,
  payload: product
})
