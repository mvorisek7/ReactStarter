import React from 'react'
import { Provider } from 'react-redux';
import RootReducer from './redux/reducers/rootReducer';
import { configureStore } from 'redux-starter-kit';

import App from './App';

const store = configureStore({ reducer: RootReducer });

export default function ProviderWrapper(props) {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
