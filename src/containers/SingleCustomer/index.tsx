/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';
import { default as SingleCustomerComponent } from '../../components/SingleCustomer';

class SingleCustomer extends React.Component {
  public render() {
    return (
      <div className="container singleCustomer">
        <SingleCustomerComponent data={null} />
      </div>
    );
  }
}

export default SingleCustomer;
