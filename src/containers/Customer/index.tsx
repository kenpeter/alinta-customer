/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { default as CustomerComponent } from '../../components/Customer';
import { loadCustomerAPI } from '../../reducers/customer';

// all the states
import { IAppState } from '../../store';
// data type
import { ICustomer } from '../../reducers/customer';

interface IProps {
  loadCustomerAPIProps: any;
  customer: ICustomer[];
}

class Customer extends React.Component<IProps> {
  componentDidMount() {
    const { loadCustomerAPIProps } = this.props;
    loadCustomerAPIProps();
  }

  public render() {
    const { customer } = this.props;

    return (
      <div>
        {customer.length === 0 ? (
          <p>Loading....</p>
        ) : (
          <CustomerComponent data={customer} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (store: IAppState) => {
  return {
    customer: store.customerState.customer
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      loadCustomerAPIProps: loadCustomerAPI
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customer);
