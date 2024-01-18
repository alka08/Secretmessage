import React, { useState } from 'react';
import axios from 'axios';

const PostSecret = () => {
  const [secret, setSecret] = useState('');

  const handlePostSecret = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/secrets/post-secret', { message: secret });
      console.log(response.data); 
    } catch (error) {
      console.error('Posting secret failed:', error.response.data); 
    }
  };

  return (
    <div>
      <h1>Post Secret</h1>
      <form>
        <label>Secret Message:</label>
        <textarea value={secret} onChange={(e) => setSecret(e.target.value)} required />
        <br />
        <button type="button" onClick={handlePostSecret}>
          Post Secret
        </button>
      </form>
    </div>
  );
};

export default PostSecret;
