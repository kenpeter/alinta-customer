/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/interface-name-prefix */
// Import Reducer type
import { Reducer, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import history from '../history';
import { editCustomer } from '../api/customer';

export enum EditCustomerActionTypes {
  EDIT_CUSTOMER_SUCCESS = 'app/edit_customer/EDIT_CUSTOMER_SUCCESS'
}

// data type
export interface IEditCustomer {
  loading: false;
  isError: false;
  errors: '';
}

// obj (with data type)
export interface IEditCustomerState {
  editCustomer: IEditCustomer;
}

// init state
const initialEditCustomerState: IEditCustomerState = {
  editCustomer: {
    loading: false,
    isError: false,
    errors: ''
  }
};

export const editCustomerReducer: Reducer<IEditCustomerState> = (
  state = initialEditCustomerState,
  action
) => {
  switch (action.type) {
    case EditCustomerActionTypes.EDIT_CUSTOMER_SUCCESS:
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
export interface IEditCustomerSuccess {
  type: EditCustomerActionTypes.EDIT_CUSTOMER_SUCCESS;
}

export const editCustomerAPI: ActionCreator<
  ThunkAction<Promise<any>, null, null, IEditCustomerSuccess>
> = (item: any) => {
  return async (dispatch: Dispatch) => {
    try {
      await editCustomer(item);
      dispatch({
        type: EditCustomerActionTypes.EDIT_CUSTOMER_SUCCESS
      });
      history.push('/home');
    } catch (err) {
      console.error(err);
    }
  };
};
