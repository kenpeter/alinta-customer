/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';
import { connect } from 'react-redux';
import { createCustomerAPI } from '../../reducers/createCustomer';
import './index.css';
import styled from 'styled-components';

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
        <h4>Create a new customer</h4>

        <DeTable>
          <tbody>
            <DeTr>
              <DeTd>
                <h5>First name</h5>
              </DeTd>
              <DeTd>
                <input
                  name="firstName"
                  value={this.state.firstName || ''}
                  onChange={this.handleFirstNameChange.bind(this)}
                />
              </DeTd>
            </DeTr>

            <DeTr>
              <DeTd>
                <h5>Last name</h5>
              </DeTd>
              <DeTd>
                <input
                  name="lastName"
                  value={this.state.lastName || ''}
                  onChange={this.handleLastNameChange.bind(this)}
                />
              </DeTd>
            </DeTr>

            <DeTr>
              <DeTd>
                <h5>Date of birth</h5>
              </DeTd>
              <DeTd>
                <input
                  name="dob"
                  value={this.state.dob || ''}
                  onChange={this.handleDobChange.bind(this)}
                />
              </DeTd>
            </DeTr>
          </tbody>
        </DeTable>

        <DeButton onClick={this.createCustomer.bind(this)}>Create</DeButton>
      </div>
    );
  }
}

const DeTable = styled.table`
  border-collapse: collapse;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 20px;
`;

const DeTr = styled.tr`
  border: 1px solid #ccc;
  padding: 20px;
`;

const DeTd = styled.td`
  border: 1px solid #ccc;
  padding: 20px;
`;

const DeButton = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

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
