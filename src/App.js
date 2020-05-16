import React, { useState, useEffect } from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import ImageCard from './ImageCard';

function App() {
  const [users, setUsers] = useState([])

  useEffect( () => {
    async function fetchData() {
      setUsers(
        await fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(res => res.data)
      )
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <h3>
        RESPONSIVE REACT
      </h3>
        <Grid container spacing={10} style={{padding: '24px'}}>
          {users.map(user => (
            <Grid key={user.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
              <ImageCard 
                key={user.id}
                email={user.email}
                firstName={user.first_name}
                lastName={user.last_name}
                avatar={user.avatar}
              />
            </Grid>
          ))}
        </Grid>
    </div>
  );
}

export default App;
