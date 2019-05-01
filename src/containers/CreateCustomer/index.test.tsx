import React from 'react';
import ReactDOM from 'react-dom';
import CreateCustomer from './index';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from '../../history';
import configureStore from '../../store';
const store = configureStore();

class MyElement extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <CreateCustomer />
        </Router>
      </Provider>
    );
  }
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyElement />, div);
  ReactDOM.unmountComponentAtNode(div);
});
