/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { customerReducer, ICustomerState } from './reducers/customer';
import {
  createCustomerReducer,
  ICreateCustomerState
} from './reducers/createCustomer';
import {
  editCustomerReducer,
  IEditCustomerState
} from './reducers/editCustomer';

// more state
export interface IAppState {
  customerState: ICustomerState;
  createCustomerState: ICreateCustomerState;
  editCustomerState: IEditCustomerState;
}

// Use data type, instead of reducer name
const rootReducer = combineReducers<IAppState>({
  customerState: customerReducer,
  createCustomerState: createCustomerReducer,
  editCustomerState: editCustomerReducer
});

// Create a configure store function of type `IAppState`
export default function configureStore(): Store<IAppState, any> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}
