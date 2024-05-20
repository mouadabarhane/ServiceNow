import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IncidentList = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/incidents')
      .then(response => {
        setIncidents(response.data.result);
      })
      .catch(error => {
        console.error('Error fetching incidents:', error);
      });
  }, []);

  return (
    <div>
      <h1>Incidents</h1>
      <ul>
        {incidents.map(incident => (
          <li key={incident.sys_id}>{incident.short_description}</li>
        ))}
      </ul>
    </div>
  );
};

export default IncidentList;
