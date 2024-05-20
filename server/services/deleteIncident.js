const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://dev214870.service-now.com/api/now/table/',
  auth: {
    username: 'mouad',
    password: '!P@ssw0rd92Xz'
  },
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

function deleteIncident(sys_id) {
  return instance.delete(`/incident/${sys_id}`)
    .then(response => {
      console.log('Incident deleted:', response.data);
      return response.data;
    })
    .catch(error => {
      console.error('Error deleting incident:', error);
      throw error;
    });
}

module.exports = deleteIncident;
