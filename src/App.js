import axios from 'axios';
import React, { useState, useEffect } from 'react';
import URL from './urls.json';
import './App.css';
import Form from './Form';
import InfoCard from './InfoCard';
import ListView from './ListView';
import Spinner from './Spinner';

export default function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(URL.employees)
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  const displayCard = (e, id) => {
    setLoading(true);
    axios
      .get(URL.employee + id)
      .then((response) => {
        const {
          data: { data: user },
        } = response;
        setUser(user);
      })
      .catch((error) => {
        console.log(error.response);
        //setTimeout(displayCard(e, id), 1000);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className='App'>
      <div className='App-Container'>
        <div className='App-List'>
          <ListView users={users} displayCard={displayCard} />
        </div>
        <div className='App-Card'>
          {loading ? <Spinner /> : <InfoCard user={user} />}
        </div>
        <div className='App-Form'>
          <Form />
        </div>
      </div>
    </div>
  );
}
