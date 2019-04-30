import Config from '../config.json';

export const getCustomers = () => {
  /* eslint-disable no-undef */
  return fetch(Config.customerUrl, {
    method: 'GET'
  });
};
