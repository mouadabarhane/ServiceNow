const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://dev214870.service-now.com/api/now/table/',
  auth: {
    username: 'mouad', // Replace with your ServiceNow username
    password: '!P@ssw0rd92Xz' // Replace with your ServiceNow password
  },
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Function to retrieve incidents from ServiceNow
function retrieveIncidents() {
  return instance.get('/incident')
    .then(response => {
      // Handle successful response
      console.log('Retrieved records:', response.data);
      return response.data; // Return the retrieved data
    })
    .catch(error => {
      // Handle error
      console.error('Error retrieving records:', error);
      throw error; // Rethrow the error for handling elsewhere
    });
}

module.exports = retrieveIncidents;
