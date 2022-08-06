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
  const [formData, setFormData] = useState({});
  const [loadingCard, setLoadingCard] = useState(false);
  const [loadingForm, setLoadingForm] = useState(false);

  // Set axios headers.
  const api = axios.create({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    baseURL: URL.api,
  });

  useEffect(() => {
    api
      .get('/employees')
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        alert(
          'Could not retrieve employees from the database, please refresh the page. (' +
            error.message +
            ').'
        );
      });
  }, []);

  const displayCard = (e, id) => {
    // check if the user exists locally.
    let searchedArray = users.filter((user) => user.id === id);
    if (searchedArray.length > 0) {
      setUser(searchedArray[0]);
      return;
    }
    setLoadingCard(true);
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
        alert(
          'An error has occured while trying to reach the servers. (' +
            error.message +
            ').'
        );
      })
      .finally(() => setLoadingCard(false));
  };

  function onSubmit() {
    if (!isFilledForm()) return;
    setLoadingForm(true);

    api
      .post('/create', formData)
      .then((res) => {
        alert(res.data.message + ' (id = ' + res.data.data.id + ').');
        setUsers((users) => [...users, { ...formData, id: res.data.data.id }]);
      })
      .catch((error) => {
        alert('An error has occured while posting the new employee');
      })
      .finally(() => {
        setLoadingForm(false);
      });
  }

  function onUpdate() {
    if (!isFilledForm()) return;

    setLoadingForm(true);
    const api = axios.create({
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      baseURL: URL.api,
    });
    api
      .put('/update/1', formData)
      .then((res) => {
        alert(
          'The employee has been updated successfully, status: ' + res.status
        );
      })
      .catch((error) => {
        alert('An error has occured while updating the new employee');
      })
      .finally(() => {
        setLoadingForm(false);
      });
  }

  function isFilledForm() {
    if (
      !formData.employee_name ||
      !formData.employee_salary ||
      !formData.employee_age
    ) {
      alert('Please fill the form.');
      return false;
    }
    return true;
  }
  // prettier-ignore

  return (
    <div className='App'>
      <div className='App-Container'>
        <div className='App-List'><ListView users={users} displayCard={displayCard} /></div>
        <div className='App-Card'><InfoCard user={user} isEmpty={loadingCard} /></div>
        <div className='App-Spinner-Card'>{loadingCard ? <Spinner /> : null}</div>
        <div className='App-Form'><Form onSubmit={onSubmit} onUpdate={onUpdate} isEmpty={loadingForm} setFormData={setFormData} /></div>
        <div className='App-Spinner-Form'>{loadingForm ? <Spinner /> : null}</div>
      </div>
    </div>
  );
}
