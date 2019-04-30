/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../../containers/Search';
import './index.css';

interface IProps {
  data: any;
  deleteCustomer: (id: string) => void;
}

// define outside
function buildLayout(data: any, deleteCustomer: any) {
  const res = data.map((item: any, index: number) => {
    return (
      <tr key={index}>
        <td>{index}</td>

        <td>{item.firstName + ' ' + item.lastName}</td>

        <td>
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
        </td>
      </tr>
    );
  });

  return res;
}

export const Customer: React.FC<IProps> = ({ data, deleteCustomer }) => (
  <div className="container customer">
    <div className="top-bar">
      <Search />
      <Link to="/create-customer">Create</Link>
    </div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{buildLayout(data, deleteCustomer)}</tbody>
    </table>
  </div>
);

export default Customer;
