/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  data: any;
}

// define outside
function buildLayout(data: any) {
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
            {item.firstName + item.lastName}
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
          , Delete
        </td>
      </tr>
    );
  });

  return res;
}

export const Customer: React.FC<IProps> = ({ data }) => (
  <div className="customer">
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
      <tbody>{buildLayout(data)}</tbody>
    </table>
  </div>
);

export default Customer;