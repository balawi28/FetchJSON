import axios from 'axios';
import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import URL from './urls.json';
import './App.css';
import Form from './Form';
import InfoCard from './InfoCard';

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
    <div className='app'>
      <div className='list'>
        {users.length > 0 && (
          <table className='list-table'>
            {_.map(users, (user) => (
              <tr
                className='element'
                key={user.id}
                onClick={(event) => displayCard(event, user.id)}
              >
                <td>{user.employee_name}</td>
              </tr>
            ))}
          </table>
        )}
      </div>
      <div className='card'>
        {loading ? <div class='lds-dual-ring'></div> : <InfoCard user={user} />}
      </div>
      <Form />
    </div>
  );
}
