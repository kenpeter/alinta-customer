/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { customerReducer, ICustomerState } from './reducers/customer';

// more state
export interface IAppState {
  customerState: ICustomerState;
}

// more real values
const rootReducer = combineReducers<IAppState>({
  customerState: customerReducer
});

// Create a configure store function of type `IAppState`
export default function configureStore(): Store<IAppState, any> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}
