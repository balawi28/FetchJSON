import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Form from './components/Form/Form';
import InfoCard from './components/InfoCard/InfoCard';
import ListView from './components/ListView/ListView';
import Spinner from './components/Spinner/Spinner';
import { setFormData } from './features/formData';
import { setUser } from './features/user';
import { addUser, setUsers } from './features/usersList';
import URL from './urls.json';

export default function App() {
  const usersList = useSelector((state) => state.usersList.value);
  const formData = useSelector((state) => state.formData.value);
  const dispatch = useDispatch();

  const [loadingCard, setLoadingCard] = useState(false);
  const [loadingForm, setLoadingForm] = useState(false);
  const [visibleForm, setVisibleForm] = useState(false);

  // Set axios headers.
  const api = axios.create({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    baseURL: URL.api,
  });

  useEffect(() => {
    api
      .get('/employees')
      .then((response) => {
        dispatch(setUsers(response.data.data));
      })
      .catch((error) => {
        alert(
          'Could not retrieve employees from the database, please refresh the page. (' +
            error.message +
            ').'
        );
      });
  }, []);

  const fillCard = (e, id) => {
    // check if the user exists locally.
    let searchedArray = usersList.filter((user) => user.id === id);
    if (searchedArray.length > 0) {
      dispatch(setUser(searchedArray[0]));
      dispatch(setFormData(searchedArray[0]));

      return;
    }
    setLoadingCard(true);
    axios
      .get(URL.employee + id)
      .then((response) => {
        const {
          data: { data: user },
        } = response;
        dispatch(setUser(user));
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
    setLoadingForm(true);

    api
      .post('/create', formData)
      .then((res) => {
        alert(res.data.message + ' (id = ' + res.data.data.id + ').');
        dispatch(addUser({ ...formData, id: res.data.data.id }));
      })
      .catch((error) => {
        alert('An error has occured while posting the new employee');
      })
      .finally(() => {
        setLoadingForm(false);
      });
  }

  function onUpdate() {
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

  function onAdd() {
    setVisibleForm(true);
  }

  // prettier-ignore
  return (
    <div className='App'>
      <div className='App-Container'>
        <div className='App-List'><ListView fillCard={fillCard} /></div>
        <div className='App-Card'><InfoCard isEmpty={loadingCard} /></div>
        <div className='App-Spinner-Card'>{loadingCard && <Spinner />}</div>
        <div className='App-Form'>{visibleForm
          ? <Form onSubmit={onSubmit} onUpdate={onUpdate} isEmpty={loadingForm} setVisibleForm={setVisibleForm}/>
          : <button className='App-button-add' onClick={onAdd}>Add/Update</button>}
        </div>
        <div className='App-Spinner-Form'>{loadingForm && <Spinner />}</div>
      </div>
    </div>
  );
}
