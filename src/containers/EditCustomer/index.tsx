/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';
import { connect } from 'react-redux';
import { editCustomerAPI } from '../../reducers/editCustomer';

interface IProps {
  location: any;
  editCustomerAPIProps: any;
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

  private editCustomer() {
    this.props.editCustomerAPIProps(this.state);
  }

  public render() {
    return (
      <div className="container editCustomer">
        <h3>Edit customer</h3>

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
            onClick={this.editCustomer.bind(this)}
          >
            Update
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
  editCustomerAPIProps: (item: any) => dispatch(editCustomerAPI(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCustomer);
