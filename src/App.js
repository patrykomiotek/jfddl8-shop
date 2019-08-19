import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import ProductsList from './products/containers/ProductsList'

function App() {
  return (
    <Provider store={store}>
      <ProductsList isUser={true} />
    </Provider>
  );
}

export default App;
