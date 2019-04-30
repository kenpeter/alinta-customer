/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';
import { connect } from 'react-redux';
import { loadCustomerAPI } from '../../reducers/customer';
import styled from 'styled-components';

interface IProps {
  searchCustomerAPIProps: any;
}

interface IState {
  searchText: string;
}

class Search extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  private handleSearchTextChange(e: any) {
    const target = e.target;
    const value = target.value;
    this.setState({ searchText: value });
  }

  public render() {
    return (
      <div className="search">
        <span>
          <input
            type="text"
            value={this.state.searchText || ''}
            onChange={this.handleSearchTextChange.bind(this)}
          />
        </span>
        <span>
          <DeButton
            onClick={() =>
              this.props.searchCustomerAPIProps(this.state.searchText)
            }
          >
            Search
          </DeButton>
        </span>
      </div>
    );
  }
}

const DeButton = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
`;

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => ({
  searchCustomerAPIProps: (searchText: string) =>
    dispatch(loadCustomerAPI(searchText))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
