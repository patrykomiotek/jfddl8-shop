import { createStore, combineReducers } from 'redux'

import products from './products/reducers'
// import users from './users/reducers'
// import comments from './comments/reducers'

const rootReducer = combineReducers({
  products: products,
  // users: combineReducers({
  //   auth: ,
  //   profile:
  // }),
  // comments
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
