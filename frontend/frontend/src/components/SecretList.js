import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SecretList = () => {
  const [secrets, setSecrets] = useState([]);

  useEffect(() => {
    const fetchSecrets = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/secrets/get-secrets');
        setSecrets(response.data);
      } catch (error) {
        console.error('Fetching secrets failed:', error.response.data); 
      }
    };

    fetchSecrets();
  }, []);

  return (
    <div>
      <h1>Secrets List</h1>
      <ul>
        {secrets.map((secret) => (
          <li key={secret._id}>{secret.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default SecretList;
