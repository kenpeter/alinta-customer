/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/interface-name-prefix */
// Import Reducer type
import { Reducer, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { getCustomers, deleteCustomer } from '../api/customer';

export enum CustomerActionTypes {
  LOAD_CUSTOMER_SUCCESS = 'app/customer/LOAD_CUSTOMER_SUCCESS',
  DELETE_CUSTOMER_SUCCESS = 'app/customer/DELETE_CUSTOMER_SUCCESS'
}

// data type
export interface ICustomer {
  firstName: string;
  lastName: string;
  dob: string;
}

// many data
export interface ICustomerState {
  customer: ICustomer[];
}

// above has shape
const initialCustomerState: ICustomerState = {
  customer: []
};

export const customerReducer: Reducer<ICustomerState> = (
  state = initialCustomerState,
  action
) => {
  switch (action.type) {
    case CustomerActionTypes.LOAD_CUSTOMER_SUCCESS:
      return {
        ...state,
        customer: action.customer
      };
    default:
      return state;
  }
};

export interface ILoadCustomerSuccess {
  type: CustomerActionTypes.LOAD_CUSTOMER_SUCCESS;
  customer: ICustomer[];
}

export const loadCustomerAPI: ActionCreator<
  ThunkAction<Promise<any>, ICustomerState, null, ILoadCustomerSuccess>
> = (searchText: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await getCustomers(searchText);
      const json = await res.json();
      dispatch({
        customer: json,
        type: CustomerActionTypes.LOAD_CUSTOMER_SUCCESS
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export interface IDeleteCustomerSuccess {
  type: CustomerActionTypes.DELETE_CUSTOMER_SUCCESS;
}

export const deleteCustomerAPI: ActionCreator<
  ThunkAction<Promise<any>, null, null, IDeleteCustomerSuccess>
> = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await deleteCustomer(id);
      const json = await res.json();
      dispatch({
        customer: json,
        type: CustomerActionTypes.DELETE_CUSTOMER_SUCCESS
      });

      const res1 = await getCustomers('');
      const json1 = await res1.json();
      dispatch({
        customer: json1,
        type: CustomerActionTypes.LOAD_CUSTOMER_SUCCESS
      });
    } catch (err) {
      console.error(err);
    }
  };
};
