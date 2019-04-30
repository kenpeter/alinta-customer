/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/interface-name-prefix */
// Import Reducer type
import { Reducer, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

export enum CreateCustomerActionTypes {
  CREATE_CUSTOMER_SUCCESS = 'app/create_customer/CREATE_CUSTOMER_SUCCESS'
}

// data type
export interface ICreateCustomer {
  loading: false;
  isError: false;
  errors: '';
}

// obj (with data type)
export interface ICreateCustomerState {
  createCustomer: ICreateCustomer;
}

// init state
const initialCreateCustomerState: ICreateCustomerState = {
  createCustomer: {
    loading: false,
    isError: false,
    errors: ''
  }
};

export const createCustomerReducer: Reducer<ICreateCustomerState> = (
  state = initialCreateCustomerState,
  action
) => {
  switch (action.type) {
    case CreateCustomerActionTypes.CREATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        isError: false,
        errors: ''
      };
    default:
      return state;
  }
};

// action creator
export interface ICreateCustomerSuccess {
  type: CreateCustomerActionTypes.CREATE_CUSTOMER_SUCCESS;
}

export const createCustomerAPI: ActionCreator<
  ThunkAction<Promise<any>, ICreateCustomerState, null, ICreateCustomerSuccess>
> = (item: any) => {
  return async (dispatch: Dispatch) => {
    try {
      // api call
      //const response = await axios.get('https://swapi.co/api/people/');
      dispatch({
        type: CreateCustomerActionTypes.CREATE_CUSTOMER_SUCCESS
      });
    } catch (err) {
      console.error(err);
    }
  };
};
