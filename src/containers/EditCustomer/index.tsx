/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';

interface IProps {
  location: any;
}

interface IState {
  _id: string;
  firstName: string;
  lastName: string;
  dob: string;
}

class EditCustomer extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    const data = this.props.location.data;

    this.state = {
      _id: data._id,
      firstName: data.firstName,
      lastName: data.lastName,
      dob: data.dob
    };
  }

  public render() {

    //test
    console.log('state', this.state);

    return (
      <div className="container editCustomer">
        <div>bla</div>
      </div>
    );
  }
}

export default EditCustomer;
