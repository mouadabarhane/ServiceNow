// src/components/Incidents.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Incidents = () => {
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const response = await axios.get('/api/incidents');
        setIncidents(response.data.result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching incidents:', error);
        setLoading(false);
      }
    };

    fetchIncidents();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>ServiceNow Incidents</h1>
      <ul>
        {incidents.map((incident) => (
          <li key={incident.sys_id}>{incident.short_description}</li>
        ))}
      </ul>
    </div>
  );
};

export default Incidents;
