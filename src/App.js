import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import ProductsList from './products/containers/ProductsList'
import BasketContainer from './basket/containers/BasketContainer'

function App() {
  return (
    <Provider store={store}>
      <BasketContainer />
      <ProductsList isUser={true} />
    </Provider>
  );
}

export default App;
