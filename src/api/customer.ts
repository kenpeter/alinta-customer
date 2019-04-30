/* eslint-disable @typescript-eslint/no-explicit-any */
import Config from '../config.json';

export const getCustomers = () => {
  /* eslint-disable no-undef */
  return fetch(Config.customerUrl, {
    method: 'GET'
  });
};

export const createCustomer = (item: any) => {
  const body = `firstName=${item.firstName}&lastName=${item.lastName}&dob=${
    item.dob
  }`;
  return fetch(`${Config.customerUrl}/api/create-customer`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded' // Specifying the Content-Type
    }),
    body
  });
};
