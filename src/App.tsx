/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Router } from 'react-router-dom';
import history from './history';
import { default as Customer } from './containers/Customer';
import { default as EditCustomer } from './containers/EditCustomer';
import { default as CreateCustomer } from './containers/CreateCustomer';

import configureStore from './store';

import './App.css';

const store = configureStore();

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/home" component={Customer} />
            <Route exact path="/edit-customer" component={EditCustomer} />
            <Route exact path="/create-customer" component={CreateCustomer} />
            <Route path="*" component={Customer} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
