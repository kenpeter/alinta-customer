/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  data: any;
}

const SingleCustomer: React.FC<IProps> = ({ data }) => (
  <div className="singleCustomer">
    <p>single customer</p>
  </div>
);

export default SingleCustomer;
