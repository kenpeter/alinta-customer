import * as React from 'react';
import { connect } from 'react-redux';

// all the states
import { IAppState } from '../../store';
// data type
import { ICustomer } from '../../reducers/customer';

// interface
interface IProps {
  customer: ICustomer;
}

class Customer extends React.Component<IProps> {
    public render() {
      return (
        <div>bla</div>    
      );
    }
}

// Grab the characters from the store and make them available on props
const mapStateToProps = (store: IAppState) => {
  return {
    customer: store.customerState.customer
  };
};

export default connect(mapStateToProps)(Customer);