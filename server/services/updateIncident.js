const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://dev214870.service-now.com/api/now/table/',
  auth: {
    username: 'mouad', // Replace 'mouad' with your ServiceNow username
    password: '!P@ssw0rd92Xz' // Replace '!P@ssw0rd92Xz' with your ServiceNow password
  },
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

function updateIncident(sys_id, data) {
  return instance.patch(`/incident/${sys_id}`, data)
    .then(response => {
      console.log('Incident updated:', response.data);
      return response.data;
    })
    .catch(error => {
      console.error('Error updating incident:', error);
      throw error;
    });
}

module.exports = updateIncident;
