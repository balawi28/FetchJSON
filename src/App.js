import axios from 'axios';
import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import URL from './urls.json';
import './App.css';

export default function App() {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [age, setAge] = useState('');
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
        setId(response.data.data.id);
        setName(response.data.data.employee_name);
        setSalary(response.data.data.employee_salary);
        setAge(response.data.data.employee_age);
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
          <ul>
            {_.map(users, (user) => (
              <li
                key={user.id}
                onClick={(event) => displayCard(event, user.id)}
              >
                {user.employee_name}
              </li>
            ))}
          </ul>
        )}
      </div>
      {loading ? (
        <div class='lds-dual-ring'></div>
      ) : (
        <div className='infocard'>
          <div className='column1'>
            <label>Employee ID:</label>
            <br />
            <label>Employee Name:</label>
            <br />
            <label>Employee Salary:</label>
            <br />
            <label>Employee Age:</label>
          </div>
          <div className='column2'>
            <label>{id}</label>
            <br />
            <label>{name}</label>
            <br />
            <label>{salary}</label>
            <br />
            <label>{age}</label>
          </div>
        </div>
      )}
    </div>
  );
}
