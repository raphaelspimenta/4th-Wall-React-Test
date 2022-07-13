import createAPI from '.';
import { getCurrentEnvConfig } from '../config';
import { simulateSlowApiCall } from './utils';

const { apiUrl } = getCurrentEnvConfig();
const BaseAPI = createAPI(apiUrl);

export const getContacts = () => simulateSlowApiCall(BaseAPI.get('contacts'));

export const saveContact = (contact) =>
  simulateSlowApiCall(BaseAPI.post('contacts', contact));

export const updateContact = (contact) =>
  simulateSlowApiCall(BaseAPI.put(`contacts/${contact.id}`, contact));

export const deleteContact = (contact) =>
  simulateSlowApiCall(BaseAPI.delete(`contacts/${contact.id}`, contact));
