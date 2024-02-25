import React, { useState, useEffect } from 'react';
import UserDetails from './Task/UserDetails';
import './App.css'


const App = () => {
  const [usernames, setUsernames] = useState([]);
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all usernames
    fetch('https://api.github.com/users')
      .then((response) => response.json())
      .then((data) => setUsernames(data.map((user) => user.login)))
      .catch((err) => setError(err.message));
  }, []);

  useEffect(() => {
    // Fetch user data for each username
    const fetchData = async () => {
      const promises = usernames.map(async (username) => {
        const response = await fetch(`https://api.github.com/users/${username}`);
        return response.json();
      });

      Promise.all(promises)
        .then((data) => setUserData(data))
        .catch((err) => setError(err.message));
    };

    if (usernames.length > 0) {
      fetchData();
    }
  }, [usernames]);

  return (
    <div className="App">
      <div className='heading'><h1>Github Users</h1></div>
      {error && <p>Error: {error}</p>}
      <div className="user-list">
        {userData.map((user) => (
          <UserDetails key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;

