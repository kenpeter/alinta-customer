import React from 'react';
import ReactDOM from 'react-dom';
import Search from './index';
import { Provider } from 'react-redux';
import configureStore from '../../store';
const store = configureStore();

class MyElement extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Search />
      </Provider>
    );
  }
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyElement />, div);
  ReactDOM.unmountComponentAtNode(div);
});
