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

// Function to create an incident in ServiceNow
function createIncident(data) {
  return instance.post('/incident', data)
    .then(response => {
      // Handle successful response
      console.log('Incident created:', response.data);
      return response.data; // Return the created incident data
    })
    .catch(error => {
      // Handle error
      console.error('Error creating incident:', error);
      throw error; // Rethrow the error for handling elsewhere
    });
}

module.exports = createIncident;
