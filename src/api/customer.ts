/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
import Config from '../config.json';

export const getCustomers = (searchText: string) => {
  const url = `${Config.customerUrl}/api/search-customer/${searchText}`;
  return fetch(url, {
    method: 'GET'
  });
};

export const deleteCustomer = (id: string) => {
  const url = `${Config.customerUrl}/api/delete-customer/${id}`;
  return fetch(url, {
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

export const editCustomer = (item: any) => {
  const body = `_id=${item._id}&firstName=${item.firstName}&lastName=${
    item.lastName
  }&dob=${item.dob}`;
  return fetch(`${Config.customerUrl}/api/edit-customer`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded' // Specifying the Content-Type
    }),
    body
  });
};
