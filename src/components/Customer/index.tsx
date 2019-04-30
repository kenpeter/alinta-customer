/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../../containers/Search';
import styled from 'styled-components';

interface IProps {
  data: any;
  deleteCustomer: (id: string) => void;
}

// define outside
function buildLayout(data: any, deleteCustomer: any) {
  const res = data.map((item: any, index: number) => {
    return (
      <DeTr key={index}>
        <DeTd>{index}</DeTd>

        <DeTd>{item.firstName + ' ' + item.lastName}</DeTd>

        <DeTd>
          <Link
            to={{
              pathname: '/edit-customer',
              data: {
                _id: item._id,
                firstName: item.firstName,
                lastName: item.lastName,
                dob: item.dob
              }
            }}
          >
            Edit
          </Link>
          ,{' '}
          <a
            href="#"
            onClick={() => {
              deleteCustomer(item._id);
            }}
          >
            Delete
          </a>
        </DeTd>
      </DeTr>
    );
  });

  return res;
}

export const Customer: React.FC<IProps> = ({ data, deleteCustomer }) => (
  <div className="container customer">
    <div className="top-bar">
      <Search />
    </div>
    <DeTable>
      <thead>
        <DeTr>
          <DeTh>ID</DeTh>
          <DeTh>Name</DeTh>
          <DeTh>Action</DeTh>
        </DeTr>
      </thead>
      <tbody>{buildLayout(data, deleteCustomer)}</tbody>
    </DeTable>

    <Link to="/create-customer">Create new customer</Link>
  </div>
);

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

const DeTh = styled.th`
  border: 1px solid #ccc;
  padding: 20px;
`;

export default Customer;
