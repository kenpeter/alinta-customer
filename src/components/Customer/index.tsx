/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../../containers/Search';

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

        <td>
          <Link
            to={{
              pathname: '/single-customer',
              data: {
                firstName: item.firstName,
                lastName: item.lastName,
                dob: item.dob
              }
            }}
          >
            {item.firstName + ' ' + item.lastName}
          </Link>
        </td>

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
  <div className="customer">
    <div>
      <Search />
    </div>
    <div>
      <Link to="/create-customer">Create a customer</Link>
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
