/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/interface-name-prefix */
// Import Reducer type
import { Reducer, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

export enum CustomerActionTypes {
  LOAD_CUSTOMER_SUCCESS = 'app/customer/LOAD_CUSTOMER_SUCCESS'
}

// data type
export interface ICustomer {
  data: [];
  loading: false;
  isError: false;
  errors: '';
}

// obj (with data type)
export interface ICustomerState {
  customer: ICustomer;
}

// init state
const initialCustomerState: ICustomerState = {
  customer: {
    data: [],
    loading: false,
    isError: false,
    errors: ''
  }
};

export const customerReducer: Reducer<ICustomerState> = (
  state = initialCustomerState,
  action
) => {
  switch (action.type) {
    case CustomerActionTypes.LOAD_CUSTOMER_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        isError: false,
        errors: ''
      };
    default:
      return state;
  }
};

export interface ILoadCustomerSuccess {
  type: CustomerActionTypes.LOAD_CUSTOMER_SUCCESS;
  customer: ICustomer;
}

export const getAllCustomers: ActionCreator<
  ThunkAction<Promise<any>, ICustomerState, null, ILoadCustomerSuccess>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('https://swapi.co/api/people/');
      dispatch({
        characters: response.data.results,
        type: CustomerActionTypes.LOAD_CUSTOMER_SUCCESS
      });
    } catch (err) {
      console.error(err);
    }
  };
};
