/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/interface-name-prefix */
// Import Reducer type
import { Reducer, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
//import axios from 'axios';
import { getCustomers } from '../api/customer';

export enum CustomerActionTypes {
  LOAD_CUSTOMER_SUCCESS = 'app/customer/LOAD_CUSTOMER_SUCCESS'
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
      dispatch({
        customer: await res.json(),
        type: CustomerActionTypes.LOAD_CUSTOMER_SUCCESS
      });
    } catch (err) {
      console.error(err);
    }
  };
};
