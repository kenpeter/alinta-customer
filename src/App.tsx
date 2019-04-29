/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';
import { Provider } from 'react-redux';
//import { Store } from 'redux';

import configureStore from './store';

import './App.css';

const store = configureStore();

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <div>bla</div>
      </Provider>
    );
  }
}

export default App;
