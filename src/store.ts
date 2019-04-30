/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { customerReducer, ICustomerState } from './reducers/customer';
import {
  createCustomerReducer,
  ICreateCustomerState
} from './reducers/createCustomer';

// more state
export interface IAppState {
  customerState: ICustomerState;
  createCustomerState: ICreateCustomerState;
}

// Use data type, instead of reducer name
const rootReducer = combineReducers<IAppState>({
  customerState: customerReducer,
  createCustomerState: createCustomerReducer
});

// Create a configure store function of type `IAppState`
export default function configureStore(): Store<IAppState, any> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}
