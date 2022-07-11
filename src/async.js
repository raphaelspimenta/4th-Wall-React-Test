import axios from 'axios';

const simulateSlowApiCall = (promise) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => promise.then(resolve).catch(reject), 2000)
  })
}

//Locations

export const getLocations = () => simulateSlowApiCall(axios.get('http://localhost:3004/locations'));


// Contacts

export const getContacts = () => simulateSlowApiCall(axios.get('http://localhost:3004/contacts'));

export const saveContact = (contact) => simulateSlowApiCall(axios.post('http://localhost:3004/contacts', contact));

export const updateContact = (contact) => simulateSlowApiCall(axios.put(`http://localhost:3004/contacts/${contact.id}`, contact));

export const deleteContact = (contact) => simulateSlowApiCall(axios.delete(`http://localhost:3004/contacts/${contact.id}`, contact));