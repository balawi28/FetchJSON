import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import formDataReducer from './features/formData';
import userReducer from './features/user';
import usersListReducer from './features/usersList';

const store = configureStore({
  reducer: {
    user: userReducer,
    usersList: usersListReducer,
    formData: formDataReducer,
  },
});

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
