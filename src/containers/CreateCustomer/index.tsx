/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';
import { connect } from 'react-redux';
import { createCustomerAPI } from '../../reducers/createCustomer';

interface IProps {
  createCustomerAPIProps: any;
}

interface IState {
  firstName: string;
  lastName: string;
  dob: string;
}

class CreateCustomer extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      dob: ''
    };
  }

  private handleFirstNameChange(e: any) {
    const target = e.target;
    const value = target.value;
    this.setState({ firstName: value });
  }

  private handleLastNameChange(e: any) {
    const target = e.target;
    const value = target.value;
    this.setState({ lastName: value });
  }

  private handleDobChange(e: any) {
    const target = e.target;
    const value = target.value;
    this.setState({ dob: value });
  }

  private createCustomer() {
    this.props.createCustomerAPIProps(this.state);
  }

  public render() {
    return (
      <div className="container createCustomer">
        <h3>Create a new customer</h3>

        <div className="field">
          <label>First name</label>
          <p>
            <input
              name="firstName"
              value={this.state.firstName || ''}
              onChange={this.handleFirstNameChange.bind(this)}
            />
          </p>
        </div>

        <div className="field">
          <label>Last name</label>
          <p>
            <input
              name="lastName"
              value={this.state.lastName || ''}
              onChange={this.handleLastNameChange.bind(this)}
            />
          </p>
        </div>

        <div className="field">
          <label>Date of birth</label>
          <p>
            <input
              name="dob"
              value={this.state.dob || ''}
              onChange={this.handleDobChange.bind(this)}
            />
          </p>
        </div>

        <div>
          <button
            className="btn btn-primary"
            onClick={this.createCustomer.bind(this)}
          >
            Create
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => ({
  createCustomerAPIProps: (item: any) => dispatch(createCustomerAPI(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCustomer);
