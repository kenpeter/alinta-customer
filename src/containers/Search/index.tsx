/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';
import { connect } from 'react-redux';
import { loadCustomerAPI } from '../../reducers/customer';

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
      <div className="container search">
        <div>
          <input
            type="text"
            value={this.state.searchText || ''}
            onChange={this.handleSearchTextChange.bind(this)}
          />
        </div>
        <div>
          <button>Search</button>
        </div>
      </div>
    );
  }
}

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
