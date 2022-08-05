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
  const [newUser, setNewUser] = useState({});
  const [loadingCard, setLoadingCard] = useState(false);
  const [loadingForm, setLoadingForm] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    axios
      .get(URL.employees)
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch(() => {
        alert(
          'Could not retrieve employees from the database, please refresh the page.'
        );
      });
  }, []);

  const displayCard = (e, id) => {
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
        alert('An error has occured while trying to reach the servers.');
        //setTimeout(displayCard(e, id), 1000);
      })
      .finally(() => setLoadingCard(false));
  };

  useEffect(() => {
    if (submit) {
      if (
        !newUser.employee_name ||
        !newUser.employee_salary ||
        !newUser.employee_age
      ) {
        alert('Please fill the form.');
        setSubmit(!submit);
        return;
      }
      setLoadingForm(true);

      const api = axios.create({
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        baseURL: URL.api,
      });
      api
        .post('/create', newUser)
        .then((res) => {
          alert('The employee has been added successfully');
        })
        .catch((error) => {
          alert('An error has occured while posting the new employee');
        })
        .finally(() => {
          setLoadingForm(false);
        });
      setSubmit(false);
    }
  }, [submit]);

  useEffect(() => {
    if (update) {
      setLoadingForm(true);

      const api = axios.create({
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        baseURL: URL.api,
      });
      api
        .put('/update/1', newUser)
        .then((res) => {
          alert('The employee has been added successfully');
        })
        .catch((error) => {
          alert('An error has occured while updating the new employee');
        })
        .finally(() => {
          setLoadingForm(false);
        });
      setSubmit(false);
    }
  }, [update]);

  // prettier-ignore

  return (
    <div className='App'>
      <div className='App-Container'>
        <div className='App-List'><ListView users={users} displayCard={displayCard} /></div>
        <div className='App-Card'><InfoCard user={user} isEmpty={loadingCard} /></div>
        <div className='App-Spinner-Card'>{loadingCard ? <Spinner /> : null}</div>
        <div className='App-Form'><Form setSubmit={setSubmit} setUpdate={setUpdate} isEmpty={loadingForm} setNewUser={setNewUser} newUser={newUser} /></div>
        <div className='App-Spinner-Form'>{loadingForm ? <Spinner /> : null}</div>
      </div>
    </div>
  );
}
