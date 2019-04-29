/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';
import { Provider } from 'react-redux';
import { default as Customer } from './containers/Customer';

import configureStore from './store';

import './App.css';

const store = configureStore();

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Customer />
      </Provider>
    );
  }
}

export default App;
